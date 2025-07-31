# 🎯 TODO - Sorteia+ MVP

## Foco: Rifas + Pagamentos + Dashboard Básico

**Projeto:** Sorteia+ - MVP para Validação  
**Versão:** v1.0 MVP  
**Data:** Janeiro 2025  
**Timeline:** 8 semanas

---

### 🧑‍💼 **Fundador**

**Wellington Monteiro**  
📧 <wcsevendev@gmail.com>

---

## 🎯 **OBJETIVO DO MVP**

**Validar o core do negócio com o mínimo de funcionalidades:**

1. ✅ **Usuários podem criar rifas**
2. ✅ **Participantes podem comprar números**
3. ✅ **Pagamentos funcionam (Pix)**
4. ✅ **Sorteio é realizado**
5. ✅ **Criador recebe o dinheiro**

**Métricas de sucesso:**

- 50 usuários criam rifas
- 200 participantes compram números
- R$ 5.000 em transações
- 95% de satisfação

---

## 🚀 **FASE 1: SETUP BÁSICO** (Semana 1)

### 1.1 Estrutura do Projeto

- [ ] **1.1.1** Criar projeto Next.js 14 com TypeScript
- [ ] **1.1.2** Configurar Tailwind CSS + Shadcn/ui
- [ ] **1.1.3** Configurar PostgreSQL + Prisma
- [ ] **1.1.4** Configurar NextAuth.js (Google)
- [ ] **1.1.5** Criar estrutura de pastas
- [ ] **1.1.6** Configurar .env.example

### 1.2 Banco de Dados (Apenas Rifas)

- [ ] **1.2.1** Implementar schema simplificado:
  - User (básico)
  - Rifa
  - RifaParticipation
  - Payment
- [ ] **1.2.2** Criar migrations
- [ ] **1.2.3** Configurar seeds básicos

---

## 🚀 **FASE 2: AUTENTICAÇÃO** (Semana 2)

### 2.1 Login/Registro

- [ ] **2.1.1** Página de login (/auth/login)
- [ ] **2.1.2** Página de registro (/auth/register)
- [ ] **2.1.3** Integração com Google OAuth
- [ ] **2.1.4** Middleware de autenticação
- [ ] **2.1.5** Página de perfil básico

### 2.2 Layout Base

- [ ] **2.2.1** Header com navegação
- [ ] **2.2.2** Sidebar do dashboard
- [ ] **2.2.3** Footer básico
- [ ] **2.2.4** Componentes base (Button, Input, Card)

---

## 🚀 **FASE 3: SISTEMA DE RIFAS** (Semana 3-4)

### 3.1 Backend - APIs de Rifas

- [ ] **3.1.1** POST /api/rifas - Criar rifa
- [ ] **3.1.2** GET /api/rifas - Listar rifas
- [ ] **3.1.3** GET /api/rifas/[id] - Detalhes da rifa
- [ ] **3.1.4** PUT /api/rifas/[id] - Editar rifa
- [ ] **3.1.5** POST /api/rifas/[id]/participate - Participar
- [ ] **3.1.6** POST /api/rifas/[id]/draw - Realizar sorteio

### 3.2 Frontend - Páginas de Rifas

- [ ] **3.2.1** /rifas - Lista de rifas
- [ ] **3.2.2** /rifas/criar - Criar rifa
- [ ] **3.2.3** /rifas/[id] - Detalhes da rifa
- [ ] **3.2.4** /rifas/[id]/participar - Participar da rifa
- [ ] **3.2.5** /rifas/[id]/resultado - Resultado da rifa

### 3.3 Funcionalidades Core

- [ ] **3.3.1** Formulário de criação de rifa
- [ ] **3.3.2** Seleção de números disponíveis
- [ ] **3.3.3** Sistema de sorteio aleatório
- [ ] **3.3.4** Notificação de vencedor
- [ ] **3.3.5** Histórico de rifas do usuário

---

## 🚀 **FASE 4: PAGAMENTOS** (Semana 5-6)

### 4.1 Integração Pix

- [ ] **4.1.1** Configurar Mercado Pago
- [ ] **4.1.2** POST /api/payments/pix - Gerar QR Code
- [ ] **4.1.3** POST /api/payments/webhook - Webhook
- [ ] **4.1.4** GET /api/payments/[id]/status - Status
- [ ] **4.1.5** Componente QR Code

### 4.2 Fluxo de Pagamento

- [ ] **4.2.1** Página de checkout
- [ ] **4.2.2** Confirmação de pagamento
- [ ] **4.2.3** Comprovante de compra
- [ ] **4.2.4** Histórico de pagamentos
- [ ] **4.2.5** Tratamento de erros

---

## 🚀 **FASE 5: DASHBOARD** (Semana 7)

### 5.1 Dashboard do Criador

- [ ] **5.1.1** /dashboard - Dashboard principal
- [ ] **5.1.2** Minhas rifas criadas
- [ ] **5.1.3** Estatísticas básicas
- [ ] **5.1.4** Saldo disponível
- [ ] **5.1.5** Histórico de vendas

### 5.2 Dashboard do Participante

- [ ] **5.2.1** Rifas que participei
- [ ] **5.2.2** Meus números comprados
- [ ] **5.2.3** Histórico de pagamentos
- [ ] **5.2.4** Notificações de vitória

---

## 🚀 **FASE 6: TESTES E DEPLOY** (Semana 8)

### 6.1 Testes Básicos

- [ ] **6.1.1** Testes de criação de rifa
- [ ] **6.1.2** Testes de compra de números
- [ ] **6.1.3** Testes de sorteio
- [ ] **6.1.4** Testes de pagamento
- [ ] **6.1.5** Testes de autenticação

### 6.2 Deploy MVP

- [ ] **6.2.1** Configurar Vercel
- [ ] **6.2.2** Configurar Railway (backend)
- [ ] **6.2.3** Configurar Neon (PostgreSQL)
- [ ] **6.2.4** Configurar domínio
- [ ] **6.2.5** Testes em produção

---

## 🚨 **FUNCIONALIDADES REMOVIDAS DO MVP**

### ❌ **Não incluídas (para depois):**

- Vaquinhas
- Sorteios aleatórios
- Roda da sorte
- Programa de afiliados
- Assinaturas PRO
- Admin panel
- Exportação PDF/CSV
- Sistema de comentários
- Upload de imagens
- Notificações em tempo real

### ✅ **Incluídas no MVP:**

- ✅ Autenticação básica
- ✅ CRUD de rifas
- ✅ Compra de números
- ✅ Pagamento via Pix
- ✅ Sorteio automático
- ✅ Dashboard básico
- ✅ Notificações por email

---

## 📊 **MÉTRICAS DO MVP**

### Técnicas

- [ ] Tempo de carregamento < 3s
- [ ] Uptime > 99%
- [ ] Zero bugs críticos
- [ ] Pagamentos funcionando 100%

### Negócio

- [ ] 50 usuários criam rifas
- [ ] 200 participantes compram números
- [ ] R$ 5.000 em transações
- [ ] 95% de satisfação
- [ ] 10 rifas finalizadas com sucesso

---

## 🎯 **PRÓXIMOS PASSOS APÓS MVP**

### Se MVP for bem-sucedido

1. **Adicionar vaquinhas**
2. **Implementar sorteios aleatórios**
3. **Criar programa de afiliados**
4. **Adicionar assinaturas PRO**
5. **Expandir funcionalidades**

### Se MVP precisar de ajustes

1. **Analisar feedback dos usuários**
2. **Corrigir problemas identificados**
3. **Otimizar experiência do usuário**
4. **Refazer MVP se necessário**

---

## 📝 **NOTAS IMPORTANTES**

- **Foco total em rifas** - não dispersar
- **UX simples e intuitiva** - sem complexidades
- **Pagamentos funcionando** - prioridade máxima
- **Testar com usuários reais** - validação é essencial
- **Coletar feedback** - métricas de satisfação
- **Preparar para pivot** - se necessário

---

**Wellington Monteiro**  
📧 <wcsevendev@gmail.com>  
🌐 <www.sorteia.plus>

> © 2025 Sorteia+ – MVP para validação.
