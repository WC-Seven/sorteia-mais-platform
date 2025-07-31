# 🎯 Sorteia+ Frontend

## Interface Web para a Plataforma de Rifas, Sorteios e Vaquinhas

**Frontend moderno** desenvolvido em Next.js 14 + React + TypeScript

---

### 🧑‍💼 **Fundador**

**Wellington Monteiro**  
📧 <wcsevendev@gmail.com>

---

## 🛠️ **Tecnologias**

| Camada | Tecnologia |
|-------|-----------|
| **Framework** | Next.js 14 (App Router) |
| **Linguagem** | TypeScript |
| **UI Library** | React 18+ |
| **Styling** | Tailwind CSS |
| **Components** | Shadcn/ui |
| **State Management** | Zustand |
| **HTTP Client** | Axios |
| **Forms** | React Hook Form + Zod |
| **Icons** | Lucide React |
| **Deploy** | Vercel |

---

## 🏗️ **Arquitetura Modular**

### **Módulos do Sistema:**

- **Core** - Layout, navegação, autenticação
- **Rifas** - Criação e participação em rifas
- **Vaquinhas** - Campanhas de arrecadação
- **Sorteios** - Sorteios aleatórios com roda
- **Afiliados** - Programa de indicação
- **Assinaturas** - Planos PRO/PRO+
- **Dashboard** - Painel do usuário

---

## 🚀 **Como Executar**

### **Pré-requisitos:**

- Node.js 18+
- Yarn
- Backend rodando (porta 3001)

### **Instalação:**

```bash
# Instalar dependências
yarn install

# Configurar variáveis de ambiente
cp .env.example .env.local

# Iniciar servidor de desenvolvimento
yarn dev

# Build para produção
yarn build

# Iniciar servidor de produção
yarn start
```

### **Variáveis de Ambiente:**

```env
# Backend API
NEXT_PUBLIC_API_URL="http://localhost:3001"

# Autenticação
NEXTAUTH_SECRET="sua-chave-secreta"
NEXTAUTH_URL="http://localhost:3000"

# Google OAuth
GOOGLE_CLIENT_ID="..."
GOOGLE_CLIENT_SECRET="..."

# Pagamentos
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="..."
NEXT_PUBLIC_MERCADO_PAGO_PUBLIC_KEY="..."
```

---

## 📁 **Estrutura do Projeto**

```
frontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (auth)/            # Páginas de autenticação
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── forgot-password/
│   │   ├── dashboard/         # Dashboard do usuário
│   │   ├── rifas/            # Páginas de rifas
│   │   ├── vaquinhas/        # Páginas de vaquinhas
│   │   ├── sorteios/         # Páginas de sorteios
│   │   ├── afiliados/        # Páginas de afiliados
│   │   ├── pricing/          # Planos e preços
│   │   ├── globals.css       # Estilos globais
│   │   └── layout.tsx        # Layout principal
│   ├── components/           # Componentes reutilizáveis
│   │   ├── ui/              # Componentes base (Shadcn/ui)
│   │   ├── forms/           # Formulários
│   │   ├── layout/          # Componentes de layout
│   │   └── modules/         # Componentes específicos dos módulos
│   ├── lib/                 # Utilitários e configurações
│   │   ├── auth.ts         # Configuração NextAuth
│   │   ├── api.ts          # Cliente HTTP
│   │   ├── utils.ts        # Funções utilitárias
│   │   └── validations.ts  # Schemas Zod
│   ├── hooks/              # Custom hooks
│   ├── stores/             # Estado global (Zustand)
│   └── types/              # Tipos TypeScript
├── public/                 # Assets estáticos
└── docs/                   # Documentação
```

---

## 🎨 **Componentes Principais**

### **UI Components (Shadcn/ui):**

- Button, Input, Card, Modal
- Form components
- Data Table
- Toast notifications
- Loading states

### **Módulos Específicos:**

- **Roda da Sorte** - Componente animado
- **Progress Bar** - Para vaquinhas
- **QR Code** - Para pagamentos Pix
- **Dashboard Cards** - Métricas e estatísticas

---

## 🔌 **Integração com Backend**

### **Cliente HTTP:**

```typescript
// lib/api.ts
const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000,
});

// Interceptors para autenticação
api.interceptors.request.use((config) => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
```

### **APIs Consumidas:**

- **Autenticação:** `/api/auth/*`
- **Rifas:** `/api/rifas/*`
- **Vaquinhas:** `/api/vaquinhas/*`
- **Sorteios:** `/api/sorteios/*`
- **Pagamentos:** `/api/payments/*`

---

## 🎯 **Funcionalidades Principais**

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

## 🧪 **Testes**

```bash
# Executar testes
yarn test

# Executar testes em modo watch
yarn test:watch

# Testes E2E
yarn test:e2e
```

---

## 🚀 **Deploy**

### **Vercel:**

```bash
# Deploy automático via GitHub
git push origin main
```

### **Variáveis de Produção:**

- `NEXT_PUBLIC_API_URL` (Railway URL)
- `NEXTAUTH_SECRET` (Vercel Secrets)
- `GOOGLE_CLIENT_ID` (Google Console)
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` (Stripe)

---

## 📝 **Scripts Disponíveis**

```json
{
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "test": "jest",
  "test:watch": "jest --watch",
  "test:e2e": "playwright test"
}
```

---

## 🎨 **Design System**

### **Cores:**

- **Primary:** `#3B82F6` (Blue)
- **Secondary:** `#10B981` (Green)
- **Accent:** `#F59E0B` (Yellow)
- **Danger:** `#EF4444` (Red)

### **Tipografia:**

- **Heading:** Inter (Bold)
- **Body:** Inter (Regular)
- **Monospace:** JetBrains Mono

---

## 🔐 **Segurança**

- **CORS** configurado
- **CSP** headers
- **HTTPS** obrigatório
- **Validação** de formulários
- **Sanitização** de dados

---

## 📊 **Performance**

- **Lazy Loading** de componentes
- **Image Optimization** (Next.js)
- **Code Splitting** automático
- **Bundle Analysis** disponível
- **PWA** ready (futuro)

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

> © 2025 Sorteia+ – Frontend Web
