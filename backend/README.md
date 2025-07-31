# 🚀 Sorteia+ Backend

## API REST para a Plataforma de Rifas, Sorteios e Vaquinhas

**Backend modular** desenvolvido em Node.js + Express + TypeScript

---

### 🧑‍💼 **Fundador**

**Wellington Monteiro**  
📧 <wcsevendev@gmail.com>

---

## 🛠️ **Tecnologias**

| Camada | Tecnologia |
|-------|-----------|
| **Runtime** | Node.js 18+ |
| **Framework** | Express.js 5+ |
| **Linguagem** | TypeScript |
| **Banco de Dados** | PostgreSQL + Prisma ORM |
| **Autenticação** | JWT + bcryptjs |
| **Validação** | Zod |
| **Logs** | Morgan + Winston |
| **Segurança** | Helmet + CORS |
| **Deploy** | Railway |

---

## 🏗️ **Arquitetura Modular**

### **Módulos do Sistema:**

- **Core** - Autenticação, usuários, middleware
- **Rifas** - Criação e gestão de rifas numeradas
- **Vaquinhas** - Campanhas de arrecadação
- **Sorteios** - Sorteios aleatórios
- **Afiliados** - Programa de indicação
- **Assinaturas** - Planos PRO/PRO+
- **Pagamentos** - Integração com Pix/Stripe

---

## 🚀 **Como Executar**

### **Pré-requisitos:**

- Node.js 18+
- PostgreSQL 15+
- Yarn

### **Instalação:**

```bash
# Instalar dependências
yarn install

# Configurar variáveis de ambiente
cp .env.example .env

# Executar migrations
yarn prisma migrate dev

# Iniciar servidor de desenvolvimento
yarn dev

# Iniciar servidor de produção
yarn start
```

### **Variáveis de Ambiente:**

```env
# Servidor
PORT=3001
NODE_ENV=development

# Banco de Dados
DATABASE_URL="postgresql://..."

# JWT
JWT_SECRET="sua-chave-secreta"

# Pagamentos
STRIPE_SECRET_KEY="..."
MERCADO_PAGO_ACCESS_TOKEN="..."

# CORS
FRONTEND_URL="http://localhost:3000"
```

---

## 📁 **Estrutura do Projeto**

```
backend/
├── src/
│   ├── modules/
│   │   ├── core/
│   │   │   ├── auth/
│   │   │   ├── users/
│   │   │   └── middleware/
│   │   ├── rifas/
│   │   │   ├── controllers/
│   │   │   ├── services/
│   │   │   └── routes/
│   │   ├── vaquinhas/
│   │   ├── sorteios/
│   │   ├── afiliados/
│   │   ├── assinaturas/
│   │   └── payments/
│   ├── config/
│   ├── utils/
│   └── types/
├── prisma/
├── tests/
└── docs/
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

## 🧪 **Testes**

```bash
# Executar testes
yarn test

# Executar testes em modo watch
yarn test:watch

# Cobertura de testes
yarn test:coverage
```

---

## 📊 **Monitoramento**

- **Logs:** Morgan + Winston
- **Health Check:** `/api/health`
- **Métricas:** Prometheus (futuro)
- **Alertas:** Sentry (futuro)

---

## 🔐 **Segurança**

- **CORS** configurado
- **Helmet** para headers de segurança
- **Rate Limiting** implementado
- **Validação** com Zod
- **Sanitização** de inputs
- **JWT** para autenticação

---

## 🚀 **Deploy**

### **Railway:**

```bash
# Deploy automático via GitHub
git push origin main
```

### **Variáveis de Produção:**

- `NODE_ENV=production`
- `DATABASE_URL` (Railway PostgreSQL)
- `JWT_SECRET` (Railway Secrets)
- `FRONTEND_URL` (Vercel URL)

---

## 📝 **Scripts Disponíveis**

```json
{
  "dev": "nodemon src/server.ts",
  "build": "tsc",
  "start": "node dist/server.js",
  "test": "jest",
  "test:watch": "jest --watch",
  "test:coverage": "jest --coverage",
  "prisma:generate": "prisma generate",
  "prisma:migrate": "prisma migrate dev",
  "prisma:studio": "prisma studio"
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

---

> © 2025 Sorteia+ – Backend API
