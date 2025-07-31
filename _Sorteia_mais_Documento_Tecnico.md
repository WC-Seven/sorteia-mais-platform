# 📄 Sorteia+

## *Documentação Técnica do Projeto*

**Plataforma de Rifas, Sorteios, Vaquinhas e Afiliados**  
*Documento oficial de desenvolvimento — v1.0*

---

### 🧑‍💼 Fundador

**Wellington Monteiro**  
📧 <wcsevendev@gmail.com>  

---

## 🎯 *Visão Geral*

**Sorteia+** é uma plataforma web que permite:

- Criar **rifas numeradas**
- Realizar **sorteios aleatórios**
- Organizar **vaquinhas (crowdfunding)**
- Sistema de **afiliados com comissão**
- **Retirada via Pix** para criadores
- **Taxa de 5% obrigatória** sobre o valor arrecadado em vaquinhas
- **Assinaturas mensais** (PRO / PRO+)

**Objetivo:** Oferecer uma solução justa, transparente e escalável para milhões de criadores, ONGs e comunidades no Brasil.

---

## 🛠️ *Tecnologias Utilizadas*

| Camada | Tecnologia |
|-------|-----------|
| **Frontend Web** | Next.js (App Router) + React + Tailwind CSS |
| **Frontend Mobile** | React Native (futuro) |
| **Backend** | Node.js + Express + TypeScript |
| **Banco de Dados** | PostgreSQL + Prisma ORM |
| **Autenticação** | NextAuth.js (Google, Email) |
| **Pagamentos** | Stripe + Pix (Mercado Pago / Gerencianet) |
| **Envio de E-mails** | Resend ou Nodemailer |
| **Armazenamento** | AWS S3 / Cloudinary (imagens) |
| **Logs** | Winston + tabela `Log` no banco |
| **Deploy** | Vercel (frontend), Railway (backend), Neon (PostgreSQL) |

---

## 🗂️ *Estrutura do Projeto*

sorteia-plus/
│
├── backend/
│ ├── src/
│ │ ├── controllers/ # Lógica das rotas
│ │ ├── routes/ # Definição de rotas
│ │ ├── services/ # Regras de negócio
│ │ ├── middleware/ # Autenticação, logs, validação
│ │ ├── models/ # Tipos e validadores
│ │ ├── config/ # Prisma, env, server
│ │ └── server.ts
│ └── prisma/
│ └── schema.prisma # Modelo do banco
│
├── frontend/
│ ├── src/
│ │ ├── app/ # App Router (Next.js)
│ │ │ ├── auth/
│ │ │ ├── dashboard/
│ │ │ ├── rifas/
│ │ │ ├── vaquinhas/
│ │ │ └── api/
│ │ ├── components/ # Reutilizáveis
│ │ ├── lib/ # Prisma, auth, utils
│ │ └── styles/
│ └── public/
│
├── shared/
│ └── types.ts # Tipos compartilhados
│
├── .env.example
├── README.md
└── docs/
└── API.md

---

## 🗄️ *Modelo de Banco de Dados (Prisma - Resumo)*

### Principais Entidades

```prisma
model User {
  id                String     @id @default(cuid())
  name              String?
  email             String     @unique
  emailVerified     DateTime?
  image             String?
  role              UserRole   @default(USER)
  createdAt         DateTime   @default(now())
  updatedAt         DateTime   @updatedAt
  drawsUsed         Int        @default(0)       // sorteios criados
  maxDrawsAllowed   Int        @default(3)       // 3 grátis, ilimitado se PRO

  // Relacionamentos
  subscription      Subscription?
  rifas             Rifa[]
  sorteios          Sorteio[]
  vaquinhas         Vaquinha[]
  affiliate         Affiliate?
  logs              Log[]
}

enum UserRole {
  USER
  CREATOR_FREE
  CREATOR_PRO
  AFFILIATE
  ADMIN
}

model Rifa {
  id                String               @id @default(cuid())
  title             String
  pricePerTicket    Float
  totalTickets      Int?
  currentTicket     Int                  @default(1)
  prize             String?
  status            RifaStatus           @default(ACTIVE)
  winnerTicket      Int?
  createdBy         String
  creator           User                 @relation(fields: [createdBy], references: [id])
  participations    RifaParticipation[]
}

model Vaquinha {
  id                String         @id @default(cuid())
  title             String
  goal              Float
  currentAmount     Float          @default(0.0)
  platformFeeRate   Float          @default(5.0)  // 5% para todos
  platformFee       Float          @default(0.0)  // calculado
  netToCreator      Float          @default(0.0)  // valor líquido
  createdBy         String
  creator           User           @relation(fields: [createdBy], references: [id])
  contributions     VaquinhaContribution[]
  payoutStatus      PayoutStatus   @default(PENDING)
}

model PayoutRequest {
  id          String       @id @default(cuid())
  userId      String
  user        User         @relation(fields: [userId], references: [id])
  amount      Float
  pixKey      String       // chave Pix do criador
  pixKeyType  PixKeyType   // CPF, e-mail, telefone
  status      PayoutStatus @default(PENDING)
  requestedAt DateTime     @default(now())
  processedAt DateTime?
}

enum PayoutStatus {
  PENDING
  APPROVED
  PAID
  FAILED
}
```

## 🔐 *Autenticação*

| --- **NextAuth.js com provedores:** --|

- **Google**
- **Prisma Adapter para persistência**
- **Email/Senha (opcional)**
- **Sessão com papel do usuário (role)**
- **Cookies seguros com NEXTAUTH_SECRET**
- **Rotas de autenticação:**
- **GET /api/auth/session → retorna sessão**
- **POST /api/auth/signin → login**
- **POST /api/auth/signout → logout**

## 💳 *Pagamentos*

1. Assinaturas (PRO / PRO+)
    - **Integração com Stripe**
    - **Webhook**: checkout.session.completed
    - **Atualiza User.role e Subscription**

2. Pix (Mercado Pago)
    - **Geração de QR Code dinâmico**
    - **Webhook para atualizar status do pagamento**
    **Usado em**:
        - **Compra de tickets de rifa**
        - **Pagamento de vaquinhas**
        - **Assinaturas**

## 💸 Saque via Pix (Payout)

|-- Fluxo: --|

- **Criador acessa dashboard/financeiro**
- **Clica em "Sacar"**
- **Informa chave Pix**
- **Sistema cria PayoutRequest (status: PENDING)**
- **Admin ou sistema automático processa**
- **Status muda para PAID**
- **Dinheiro é transferido**
**Regra**:
- **Apenas criadores com saldo netToCreator > 0 podem sacar**
**Mínimo**:
- **R$10,00**

## 🔄 *Fluxos Principais*

1. **Criar uma Rifa**
    1.1 - Usuário autenticado acessa /rifas/criar
    1.2 - Preenche: título, preço, quantidade, prêmio
    1.3 - Sistema cria Rifa no banco
    1.4 - Se role === CREATOR_FREE, incrementa drawsUsed
    1.5 - Rifa disponível para venda
2. **Comprar Ticket de Rifa**
    2.1 - Participante escolhe quantidade
    2.2 - Sistema gera números sequenciais
    2.3 - Cria RifaParticipation
    2.4 - Redireciona para pagamento (Pix ou cartão)
    2.5 - Após pagamento, confirma participação
3. **Criar Vaquinha**
    3.1 - Qualquer usuário pode criar
    3.2 - Define meta, título, descrição
    3.3 - Sistema aplica platformFeeRate = 5%
    3.4 - Link de compartilhamento gerado
    3.5 - Após arrecadação, mostra netToCreator
4. **Programa de Afiliados**
    4.1 - Usuário se cadastra como afiliado
    4.2 - Recebe link: sorteia.plus?ref=wellington123
    4.3 - Quando alguém assina PRO via link:
    4.4 - Afiliado ganha 30% do primeiro pagamento
    4.5 - Registro em AffiliateEarnings

## 🔒 *Segurança e Auditoria*

**Medidas Implementadas**:
    - Logs de ações em tabela Log (quem fez o quê e quando)
    - Rate limiting nas rotas sensíveis
    - Validação de entrada com Zod
    - Sanitização de dados antes de salvar
    - HTTPS obrigatório
    - CORS restrito a domínios autorizados
    - Backup diário do banco de dados
    - Controle de acesso por papel (role)

### **Tabela de Logs**

```Prisma
model Log {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  action    String   // "created_rifa", "paid_vaquinha", "requested_payout"
  entity    String?  // "Rifa", "Vaquinha"
  entityId  String?
  ip        String?
  userAgent String?
  createdAt DateTime @default(now())
}
```

## 🚀 *Deploy*

**Frontend (Next.js)**
    - Plataforma: Vercel
    - Comando: vercel --prod
    - Domínio: <www.sorteia.plus>
**Backend (Node.js)**
    - Plataforma: Railway
    - Comando: npm start
    - URL: api.sorteia.plus
**Banco de Dados**
    - Neon.tech (PostgreSQL com branch e autoscaling)
    - Ou Railway / Supabase

## 🧪 *Testes*

    - Backend: Jest + Supertest
    - Frontend: Playwright (E2E)
    - Cobertura mínima: 80%
**Testes Críticos:**
    - Criação de rifa por CREATOR_FREE
    - Compra de ticket com Pix
    - Cálculo correto da taxa de vaquinha
    - Saque via Pix
    - Upgrade para CREATOR_PRO

## 📅 *Roadmap de Desenvolvimento*

    | ETAPA | OBJETIVO                        | STATUS |
    |-------|---------------------------------|--------|
    | 1     | Configurar repositório e Prisma |   ✅   |
    | 2     | Criar API de Rifas              |   🟡   |
    | 3     | Implementar autenticação        |   🟡   |
    | 4     | Desenvolver dashboard           |   🟡   |
    | 5     | Integrar Pix (Mercado Pago)     |   🔴   |
    | 6     | Implementar saque               |   🔴   |
    | 7     | Testes e segurança              |   🔴   |
    | 8     | MVP Beta (500 usuários)         |   🔴   |
    | 9     | Lançamento oficial              |   🔴   |

## 📎 *Contato*

**Wellington Monteiro**
    📧 **<wcsevendev@gmail.com>**
    🔗 **GitHub**
    🌐 **sorteia.plus**

### © 2025 Sorteia+ – **Todos os direitos reservados**

**Documento técnico confidencial. Não distribuir sem autorização.**
