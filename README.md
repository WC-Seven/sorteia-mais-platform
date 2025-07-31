# 🎯 Sorteia+ Platform

## Plataforma Completa de Rifas, Sorteios e Vaquinhas

**Sistema modular** desenvolvido com arquitetura separada (Backend + Frontend + Shared)

---

### 🧑‍💼 **Fundador**

**Wellington Monteiro**  
📧 <wcsevendev@gmail.com>  
🌐 <www.sorteia.plus>

---

## 🏗️ **Arquitetura do Projeto**

```
sorteia-mais-platform/
├── 🚀 backend/          # API REST (Node.js + Express + TypeScript)
├── 🎨 frontend/         # Interface Web (Next.js 14 + React + TypeScript)
├── 📦 shared/           # Tipos e utilitários compartilhados
└── 📚 docs/             # Documentação do projeto
```

---

## 🛠️ **Tecnologias Utilizadas**

### **Backend:**

- **Runtime:** Node.js 18+
- **Framework:** Express.js 5+
- **Linguagem:** TypeScript
- **Banco de Dados:** PostgreSQL + Prisma ORM
- **Autenticação:** JWT + bcryptjs
- **Validação:** Zod
- **Logs:** Morgan + Winston
- **Segurança:** Helmet + CORS
- **Deploy:** Railway

### **Frontend:**

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **UI Library:** React 18+
- **Styling:** Tailwind CSS
- **Components:** Shadcn/ui
- **State Management:** Zustand
- **HTTP Client:** Axios
- **Forms:** React Hook Form + Zod
- **Deploy:** Vercel

### **Shared:**

- **Tipos:** TypeScript interfaces
- **Validações:** Zod schemas
- **Utilitários:** Funções auxiliares

---

## 🎯 **Funcionalidades Principais**

### **Módulos do Sistema:**

- **Core** - Autenticação, usuários, middleware
- **Rifas** - Criação e gestão de rifas numeradas
- **Vaquinhas** - Campanhas de arrecadação
- **Sorteios** - Sorteios aleatórios com roda visual
- **Afiliados** - Programa de indicação
- **Assinaturas** - Planos PRO/PRO+
- **Pagamentos** - Integração Pix/Stripe

### **Para Usuários:**

- ✅ Login/Registro com Google
- ✅ Dashboard personalizado
- ✅ Participação em rifas
- ✅ Contribuição em vaquinhas
- ✅ Participação em sorteios
- ✅ Histórico de transações

### **Para Criadores:**

- ✅ Criação de rifas
- ✅ Gestão de vaquinhas
- ✅ Realização de sorteios
- ✅ Analytics e relatórios
- ✅ Saque via Pix

### **Para Afiliados:**

- ✅ Dashboard de afiliados
- ✅ Links de indicação
- ✅ Relatório de ganhos
- ✅ Saque de comissões

---

## 🚀 **Como Executar**

### **Pré-requisitos:**

- Node.js 18+
- PostgreSQL 15+
- Yarn

### **Backend:**

```bash
cd backend
yarn install
cp .env.example .env
yarn prisma migrate dev
yarn dev
```

### **Frontend:**

```bash
cd frontend
yarn install
cp .env.example .env.local
yarn dev
```

### **Shared:**

```bash
cd shared
yarn install
yarn build
```

---

## 🔌 **APIs Principais**

### **Autenticação:**

- `POST /api/auth/register` - Registrar usuário
- `POST /api/auth/login` - Login
- `POST /api/auth/refresh` - Renovar token
- `POST /api/auth/logout` - Logout

### **Rifas:**

- `GET /api/rifas` - Listar rifas
- `POST /api/rifas` - Criar rifa
- `GET /api/rifas/:id` - Detalhes da rifa
- `PUT /api/rifas/:id` - Editar rifa
- `DELETE /api/rifas/:id` - Deletar rifa
- `POST /api/rifas/:id/participate` - Participar
- `POST /api/rifas/:id/draw` - Realizar sorteio

### **Vaquinhas:**

- `GET /api/vaquinhas` - Listar vaquinhas
- `POST /api/vaquinhas` - Criar vaquinha
- `POST /api/vaquinhas/:id/contribute` - Contribuir

### **Pagamentos:**

- `POST /api/payments/pix` - Gerar QR Code
- `POST /api/payments/webhook` - Webhook
- `GET /api/payments/:id/status` - Status

---

## 🚀 **Deploy**

### **Backend (Railway):**

- **URL:** <https://sorteia-mais-backend.railway.app>
- **Deploy:** Automático via GitHub

### **Frontend (Vercel):**

- **URL:** <https://sorteia-mais.vercel.app>
- **Deploy:** Automático via GitHub

### **Database (Neon):**

- **PostgreSQL:** Neon Cloud
- **Backup:** Automático diário

---

## 📊 **Métricas de Sucesso**

### **Técnicas:**

- **Performance:** < 200ms response time
- **Uptime:** > 99.9%
- **Test Coverage:** > 80%
- **Security:** Zero vulnerabilidades críticas

### **Negócio:**

- **Usuários Ativos:** 10.000+ (meta 6 meses)
- **Transações:** R$ 1M+ (meta 12 meses)
- **Retenção:** > 70% (30 dias)
- **Satisfação:** > 4.5/5

---

## 🔐 **Segurança**

- **CORS** configurado
- **Helmet** para headers de segurança
- **Rate Limiting** implementado
- **Validação** com Zod
- **Sanitização** de inputs
- **JWT** para autenticação
- **HTTPS** obrigatório
- **LGPD** compliance

---

## 🧪 **Testes**

```bash
# Backend
cd backend && yarn test

# Frontend
cd frontend && yarn test

# E2E
yarn test:e2e
```

---

## 📝 **Scripts Disponíveis**

### **Backend:**

```json
{
  "dev": "nodemon src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js",
  "test": "jest",
  "prisma:generate": "prisma generate",
  "prisma:migrate": "prisma migrate dev"
}
```

### **Frontend:**

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "test": "jest"
}
```

---

## 🤝 **Contribuição**

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📞 **Contato**

**Wellington Monteiro**  
📧 <wcsevendev@gmail.com>  
🌐 <www.sorteia.plus>  
💼 LinkedIn: [Wellington Monteiro](https://linkedin.com/in/wellington-monteiro)

---

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🎯 **Roadmap**

### **Fase 1 (MVP) - 8 semanas:**

- ✅ Estrutura do projeto
- 🔄 Autenticação básica
- 🔄 Módulo de rifas
- 🔄 Pagamentos básicos
- 🔄 Dashboard simples

### **Fase 2 - 12 semanas:**

- 🔄 Módulo de vaquinhas
- 🔄 Sorteios com roda visual
- 🔄 Sistema de afiliados
- 🔄 Analytics avançados

### **Fase 3 - 16 semanas:**

- 🔄 Planos de assinatura
- 🔄 App mobile
- 🔄 Integrações avançadas
- 🔄 IA para recomendações

---

> © 2025 Sorteia+ – Plataforma Completa de Rifas e Sorteios
