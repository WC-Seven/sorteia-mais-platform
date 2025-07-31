# 🎯 TODO - Sorteia+ Modular

## Arquitetura Modular por Módulos de Negócio

**Projeto:** Sorteia+ - Sistema Modular  
**Versão:** v1.0 Modular  
**Data:** Janeiro 2025  
**Estratégia:** Módulos independentes com monetização por acesso

---

### 🧑‍💼 **Fundador**

**Wellington Monteiro**  
📧 <wcsevendev@gmail.com>

---

## 🎯 **ESTRATÉGIA MODULAR**

### **Objetivo:**

- **Módulos independentes** que podem ser ativados/desativados
- **Monetização por módulo** - usuários pagam pelo que usam
- **Desenvolvimento incremental** - cada módulo é um produto
- **Escalabilidade** - fácil adicionar novos módulos

### **Modelo de Negócio:**

```
GRÁTIS: Rifas (3/mês)
PRO (R$19,90): Rifas + Vaquinhas + Sorteios
PRO+ (R$49,90): Tudo + Afiliados + Analytics
```

---

## 🏗️ **ARQUITETURA DOS MÓDULOS**

### **Módulo 1: CORE (Base do Sistema)**

- ✅ Autenticação
- ✅ Usuários
- ✅ Pagamentos
- ✅ Dashboard base
- ✅ Configurações

### **Módulo 2: RIFAS**

- ✅ Criação de rifas
- ✅ Compra de números
- ✅ Sorteio automático
- ✅ Histórico de rifas

### **Módulo 3: VAQUINHAS**

- ✅ Criação de vaquinhas
- ✅ Contribuições
- ✅ Taxa de 5%
- ✅ Saque via Pix

### **Módulo 4: SORTEIOS**

- ✅ Sorteios aleatórios
- ✅ Roda da sorte
- ✅ Múltiplos vencedores
- ✅ Auditoria completa

### **Módulo 5: AFILIADOS**

- ✅ Programa de afiliados
- ✅ Links de indicação
- ✅ Comissões automáticas
- ✅ Dashboard de afiliados

### **Módulo 6: ASSINATURAS**

- ✅ Planos PRO/PRO+
- ✅ Integração Stripe
- ✅ Gestão de assinaturas
- ✅ Upgrade/downgrade

---

## 🚀 **FASE 1: MÓDULO CORE + RIFAS** (8 semanas)

### **Semana 1-2: Setup Base**

- [ ] **1.1.1** Criar projeto Next.js 14 + TypeScript
- [ ] **1.1.2** Configurar PostgreSQL + Prisma
- [ ] **1.1.3** Configurar NextAuth.js (Google)
- [ ] **1.1.4** Configurar Tailwind CSS + Shadcn/ui
- [ ] **1.1.5** Criar estrutura modular de pastas
- [ ] **1.1.6** Configurar sistema de módulos

### **Semana 3-4: Autenticação e Usuários**

- [ ] **1.2.1** Sistema de autenticação completo
- [ ] **1.2.2** Páginas de login/registro
- [ ] **1.2.3** Perfil de usuário
- [ ] **1.2.4** Middleware de autenticação
- [ ] **1.2.5** Sistema de roles (USER, PRO, PRO+)

### **Semana 5-6: Módulo Rifas - Backend**

- [ ] **1.3.1** Modelo Rifa (Prisma)
- [ ] **1.3.2** Modelo RifaParticipation
- [ ] **1.3.3** APIs de rifas (CRUD completo)
- [ ] **1.3.4** Sistema de números sequenciais
- [ ] **1.3.5** Lógica de sorteio automático

### **Semana 7-8: Módulo Rifas - Frontend**

- [ ] **1.4.1** Páginas de rifas (/rifas/*)
- [ ] **1.4.2** Formulário de criação
- [ ] **1.4.3** Seleção de números
- [ ] **1.4.4** Dashboard de rifas
- [ ] **1.4.5** Resultado de sorteio

---

## 🚀 **FASE 2: MÓDULO PAGAMENTOS** (4 semanas)

### **Semana 9-10: Integração Pix**

- [ ] **2.1.1** Configurar Mercado Pago
- [ ] **2.1.2** Modelo Payment (Prisma)
- [ ] **2.1.3** APIs de pagamento
- [ ] **2.1.4** Webhook de confirmação
- [ ] **2.1.5** Componente QR Code

### **Semana 11-12: Fluxo de Pagamento**

- [ ] **2.2.1** Página de checkout
- [ ] **2.2.2** Confirmação de pagamento
- [ ] **2.2.3** Comprovante de compra
- [ ] **2.2.4** Histórico de pagamentos
- [ ] **2.2.5** Tratamento de erros

---

## 🚀 **FASE 3: MÓDULO VAQUINHAS** (4 semanas)

### **Semana 13-14: Backend Vaquinhas**

- [ ] **3.1.1** Modelo Vaquinha (Prisma)
- [ ] **3.1.2** Modelo VaquinhaContribution
- [ ] **3.1.3** APIs de vaquinhas (CRUD)
- [ ] **3.1.4** Sistema de taxa de 5%
- [ ] **3.1.5** Cálculo de valores líquidos

### **Semana 15-16: Frontend Vaquinhas**

- [ ] **3.2.1** Páginas de vaquinhas (/vaquinhas/*)
- [ ] **3.2.2** Formulário de criação
- [ ] **3.2.3** Progress bar de arrecadação
- [ ] **3.2.4** Lista de contribuições
- [ ] **3.2.5** Dashboard de vaquinhas

---

## 🚀 **FASE 4: MÓDULO SORTEIOS** (3 semanas)

### **Semana 17-18: Backend Sorteios**

- [ ] **4.1.1** Modelo Sorteio (Prisma)
- [ ] **4.1.2** Modelo SorteioParticipation
- [ ] **4.1.3** Modelo SorteioWinner
- [ ] **4.1.4** APIs de sorteios
- [ ] **4.1.5** Lógica de sorteio aleatório

### **Semana 19: Frontend Sorteios**

- [ ] **4.2.1** Páginas de sorteios (/sorteios/*)
- [ ] **4.2.2** Formulário de criação
- [ ] **4.2.3** Componente Roda da Sorte
- [ ] **4.2.4** Lista de participantes
- [ ] **4.2.5** Resultado com vencedores

---

## 🚀 **FASE 5: MÓDULO AFILIADOS** (3 semanas)

### **Semana 20-21: Backend Afiliados**

- [ ] **5.1.1** Modelo Affiliate (Prisma)
- [ ] **5.1.2** Modelo Referral
- [ ] **5.1.3** APIs de afiliados
- [ ] **5.1.4** Sistema de comissões (30%)
- [ ] **5.1.5** Rastreamento de indicações

### **Semana 22: Frontend Afiliados**

- [ ] **5.2.1** Páginas de afiliados (/afiliados/*)
- [ ] **5.2.2** Dashboard de afiliados
- [ ] **5.2.3** Geração de links únicos
- [ ] **5.2.4** Relatório de ganhos
- [ ] **5.2.5** Lista de indicados

---

## 🚀 **FASE 6: MÓDULO ASSINATURAS** (2 semanas)

### **Semana 23: Backend Assinaturas**

- [ ] **6.1.1** Modelo Subscription (Prisma)
- [ ] **6.1.2** Modelo Plan
- [ ] **6.1.3** Integração com Stripe
- [ ] **6.1.4** APIs de assinaturas
- [ ] **6.1.5** Webhook Stripe

### **Semana 24: Frontend Assinaturas**

- [ ] **6.2.1** Página de planos (/pricing)
- [ ] **6.2.2** Checkout de assinatura
- [ ] **6.2.3** Gestão de assinatura
- [ ] **6.2.4** Upgrade/downgrade
- [ ] **6.2.5** Histórico de pagamentos

---

## 🏗️ **SISTEMA DE MÓDULOS**

### **Estrutura de Pastas:**

```
src/
├── modules/
│   ├── core/
│   │   ├── auth/
│   │   ├── users/
│   │   └── dashboard/
│   ├── rifas/
│   │   ├── api/
│   │   ├── components/
│   │   └── pages/
│   ├── vaquinhas/
│   │   ├── api/
│   │   ├── components/
│   │   └── pages/
│   ├── sorteios/
│   │   ├── api/
│   │   ├── components/
│   │   └── pages/
│   ├── afiliados/
│   │   ├── api/
│   │   ├── components/
│   │   └── pages/
│   └── assinaturas/
│       ├── api/
│       ├── components/
│       └── pages/
```

### **Sistema de Permissões:**

```typescript
enum UserRole {
  USER = 'USER',           // Grátis: 3 rifas/mês
  PRO = 'PRO',             // R$19,90: Rifas + Vaquinhas + Sorteios
  PRO_PLUS = 'PRO_PLUS'    // R$49,90: Tudo + Afiliados
}

interface ModuleAccess {
  rifas: boolean;
  vaquinhas: boolean;
  sorteios: boolean;
  afiliados: boolean;
  analytics: boolean;
}
```

---

## 📊 **MÉTRICAS POR MÓDULO**

### **Módulo Rifas:**

- [ ] 100 rifas criadas
- [ ] 500 números vendidos
- [ ] R$ 10.000 em transações

### **Módulo Vaquinhas:**

- [ ] 50 vaquinhas criadas
- [ ] R$ 20.000 arrecadados
- [ ] Taxa de 5% funcionando

### **Módulo Sorteios:**

- [ ] 30 sorteios realizados
- [ ] 200 participantes
- [ ] Roda da sorte funcionando

### **Módulo Afiliados:**

- [ ] 20 afiliados ativos
- [ ] 100 indicações
- [ ] R$ 5.000 em comissões

### **Módulo Assinaturas:**

- [ ] 50 assinantes PRO
- [ ] 20 assinantes PRO+
- [ ] R$ 1.500/mês em assinaturas

---

## 🎯 **PLANOS DE ACESSO**

### **GRÁTIS:**

- ✅ Rifas (3 por mês)
- ✅ Dashboard básico
- ❌ Vaquinhas
- ❌ Sorteios
- ❌ Afiliados
- ❌ Analytics

### **PRO (R$19,90/mês):**

- ✅ Rifas (ilimitadas)
- ✅ Vaquinhas
- ✅ Sorteios
- ✅ Dashboard avançado
- ❌ Afiliados
- ❌ Analytics avançados

### **PRO+ (R$49,90/mês):**

- ✅ Rifas (ilimitadas)
- ✅ Vaquinhas
- ✅ Sorteios
- ✅ Afiliados
- ✅ Analytics completos
- ✅ Exportação PDF/CSV
- ✅ Suporte prioritário

---

## 🚨 **PRIORIDADES DE DESENVOLVIMENTO**

### 🔴 **ALTA PRIORIDADE:**

1. Módulo Core (base)
2. Módulo Rifas (MVP)
3. Módulo Pagamentos (essencial)

### 🟡 **MÉDIA PRIORIDADE:**

4. Módulo Vaquinhas (nova receita)
5. Módulo Sorteios (diferencial)

### 🟢 **BAIXA PRIORIDADE:**

6. Módulo Afiliados (crescimento)
7. Módulo Assinaturas (monetização)

---

## 📝 **NOTAS IMPORTANTES**

- **Cada módulo é independente** - pode ser ativado/desativado
- **Código modular** - fácil manutenção e expansão
- **Monetização flexível** - usuários pagam pelo que usam
- **Teste por módulo** - validação individual
- **Escalabilidade** - fácil adicionar novos módulos
- **Backup do histórico** - manter versões anteriores

---

**Wellington Monteiro**  
📧 <wcsevendev@gmail.com>  
🌐 <www.sorteia.plus>

> © 2025 Sorteia+ – Sistema Modular v1.0
