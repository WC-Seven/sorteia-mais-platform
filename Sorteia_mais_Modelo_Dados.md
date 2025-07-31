# 🗄️ Sorteia+  

## Modelo de Dados  

**Estrutura do Banco de Dados Relacional (PostgreSQL + Prisma ORM)**  
*Documento técnico — v1.0*

---

### 🧑‍💼 Fundador  

**Wellington Monteiro**  
📧 <wcsevendev@gmail.com>  

---

## 🎯 Objetivo

Este documento define o **modelo de dados do Sorteia+**, com base no **Prisma ORM** e **PostgreSQL**, detalhando:

- Tabelas (models)
- Campos (campos, tipos, restrições)
- Relacionamentos
- Índices e chaves únicas
- Validações e padrões

Serve como base para:

- Geração do banco de dados
- Desenvolvimento do backend
- Migrações com `prisma migrate`
- Auditoria e segurança

---

## 🛠️ Tecnologias

| Camada | Tecnologia |
|-------|-----------|
| **ORM** | Prisma 5+ |
| **Banco de Dados** | PostgreSQL 15+ |
| **Gerador de IDs** | `cuid()` (Prisma) |
| **Migrações** | `prisma migrate dev` |
| **Deploy** | Neon, Railway ou Supabase |

---

## 🧩 Models (Prisma Schema)

> Este é o conteúdo completo do arquivo `prisma/schema.prisma`, com explicações.

```prisma
// prisma/schema.prisma

generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

// ───────────────────────────────────────
// 1. USUÁRIO
// ───────────────────────────────────────
model User {
  id                    String       @id @default(cuid())
  name                  String?
  email                 String       @unique
  emailVerified         DateTime?
  image                 String?
  role                  UserRole     @default(USER)
  password              String?      // se usar login local
  createdAt             DateTime     @default(now())
  updatedAt             DateTime     @updatedAt

  // Controle de criação de sorteios
  drawsUsed             Int          @default(0)    // sorteios criados
  maxDrawsAllowed       Int          @default(3)    // 3 grátis, ilimitado se PRO

  // Relacionamentos
  subscription          Subscription?
  rifas                 Rifa[]
  sorteios              Sorteio[]
  vaquinhas             Vaquinha[]
  affiliate             Affiliate?
  payments              Payment[]
  logs                  Log[]
  notifications         Notification[]
  payoutRequests        PayoutRequest[]
  contributions         VaquinhaContribution[]
  participations        RifaParticipation[]
  sorteioParticipations SorteioParticipation[]

  // Autenticação com NextAuth
  accounts              Account[]
  sessions              Session[]
}

enum UserRole {
  USER          // só participa
  CREATOR_FREE  // cria até 3 sorteios
  CREATOR_PRO   // cria ilimitado (pago)
  AFFILIATE     // ganha comissão
  ADMIN
}

// ───────────────────────────────────────
// 2. AUTENTICAÇÃO (NextAuth)
// ───────────────────────────────────────
model Account {
  id                 String  @id @default(cuid())
  userId             String
  user               User    @relation(fields: [userId], references: [id], onDelete: Cascade)
  type               String
  provider           String
  providerAccountId  String
  refresh_token      String?
  access_token       String?
  expires_at         Int?
  token_type         String?
  scope              String?
  id_token           String?
  session_state      String?

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
  expires      DateTime
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}

// ───────────────────────────────────────
// 3. RIFA
// ───────────────────────────────────────
model Rifa {
  id                String               @id @default(cuid())
  title             String
  description       String?
  pricePerTicket    Float
  totalTickets      Int?                 // null = ilimitado
  currentTicket     Int                  @default(1)
  prize             String?
  image             String?
  status            RifaStatus           @default(ACTIVE)
  startDate         DateTime             @default(now())
  endDate           DateTime?
  winnerTicket      Int?
  winnerUserId      String?
  winnerUser        User?                @relation(fields: [winnerUserId], references: [id])
  createdBy         String
  creator           User                 @relation(fields: [createdBy], references: [id])
  participations    RifaParticipation[]
  createdAt         DateTime             @default(now())
  updatedAt         DateTime             @updatedAt
}

enum RifaStatus {
  ACTIVE
  ENDED
  CANCELLED
}

// ───────────────────────────────────────
// 4. PARTICIPAÇÃO EM RIFA
// ───────────────────────────────────────
model RifaParticipation {
  id             String   @id @default(cuid())
  rifaId         String
  rifa           Rifa     @relation(fields: [rifaId], references: [id])
  userId         String
  user           User     @relation(fields: [userId], references: [id])
  ticketNumbers  Int[]
  purchaseDate   DateTime @default(now())
  paymentId      String?
  payment        Payment? @relation(fields: [paymentId], references: [id])
}

// ───────────────────────────────────────
// 5. SORTEIO ALEATÓRIO
// ───────────────────────────────────────
model Sorteio {
  id               String             @id @default(cuid())
  title            String
  description      String?
  prize            String?
  image            String?
  maxWinners       Int                @default(1)
  excludePrevious  Boolean            @default(false)
  status           SorteioStatus      @default(DRAFT)
  drawDate         DateTime?
  winners          SorteioWinner[]
  createdBy        String
  creator          User               @relation(fields: [createdBy], references: [id])
  participants     SorteioParticipation[]
  createdAt        DateTime           @default(now())
  updatedAt        DateTime           @updatedAt
}

enum SorteioStatus {
  DRAFT
  ACTIVE
  DRAWN
  CANCELLED
}

// ───────────────────────────────────────
// 6. PARTICIPAÇÃO EM SORTEIO
// ───────────────────────────────────────
model SorteioParticipation {
  id         String   @id @default(cuid())
  sorteioId  String
  sorteio    Sorteio  @relation(fields: [sorteioId], references: [id])
  userId     String?
  user       User?    @relation(fields: [userId], references: [id])
  name       String   // pode ser anônimo
  email      String?
  createdAt  DateTime @default(now())
}

// ───────────────────────────────────────
// 7. VENCEDOR DE SORTEIO
// ───────────────────────────────────────
model SorteioWinner {
  id              String   @id @default(cuid())
  sorteioId       String
  sorteio         Sorteio  @relation(fields: [sorteioId], references: [id])
  participationId String
  participation   SorteioParticipation @relation(fields: [participationId], references: [id])
  position        Int      // 1º, 2º, etc.
  notified        Boolean  @default(false)
  notifyAt        DateTime?
}

// ───────────────────────────────────────
// 8. VAQUINHA (CROWDFUNDING)
// ───────────────────────────────────────
model Vaquinha {
  id                String         @id @default(cuid())
  title             String
  description       String?
  goal              Float
  currentAmount     Float          @default(0.0)
  image             String?
  status            VaquinhaStatus @default(ACTIVE)
  endDate           DateTime?
  platformFeeRate   Float          @default(5.0)  // 5% para todos
  platformFee       Float          @default(0.0)  // calculado
  netToCreator      Float          @default(0.0)  // valor líquido
  payoutStatus      PayoutStatus   @default(PENDING)
  createdBy         String
  creator           User           @relation(fields: [createdBy], references: [id])
  contributions     VaquinhaContribution[]
  createdAt         DateTime       @default(now())
  updatedAt         DateTime       @updatedAt
}

enum VaquinhaStatus {
  ACTIVE
  COMPLETED
  EXPIRED
  CANCELLED
}

// ───────────────────────────────────────
// 9. CONTRIBUIÇÃO EM VAQUINHA
// ───────────────────────────────────────
model VaquinhaContribution {
  id         String   @id @default(cuid())
  vaquinhaId String
  vaquinha   Vaquinha @relation(fields: [vaquinhaId], references: [id])
  userId     String
  user       User     @relation(fields: [userId], references: [id])
  amount     Float
  message    String?
  createdAt  DateTime @default(now())
  paymentId  String
  payment    Payment  @relation(fields: [paymentId], references: [id])
}

// ───────────────────────────────────────
// 10. PAGAMENTO
// ───────────────────────────────────────
model Payment {
  id              String       @id @default(cuid())
  userId          String
  user            User         @relation(fields: [userId], references: [id])
  amount          Float
  currency        String       @default("BRL")
  method          PaymentMethod
  status          PaymentStatus @default(PENDING)
  transactionId   String?
  metadata        Json?        // dados do gateway
  createdAt       DateTime     @default(now())
  updatedAt       DateTime     @updatedAt
  logs            PaymentLog[]
}

enum PaymentMethod {
  PIX
  CREDIT_CARD
  INTERNAL_COINS
}

enum PaymentStatus {
  PENDING
  APPROVED
  REJECTED
  REFUNDED
}

// ───────────────────────────────────────
// 11. LOG DE PAGAMENTO
// ───────────────────────────────────────
model PaymentLog {
  id        String       @id @default(cuid())
  paymentId String
  payment   Payment      @relation(fields: [paymentId], references: [id])
  action    String       // "created", "approved", "error"
  details   String?
  timestamp DateTime     @default(now())
}

// ───────────────────────────────────────
// 12. SAQUE (PAYOUT)
// ───────────────────────────────────────
model PayoutRequest {
  id          String       @id @default(cuid())
  userId      String
  user        User         @relation(fields: [userId], references: [id])
  amount      Float
  pixKey      String       // chave Pix do criador
  pixKeyType  PixKeyType   // CPF, e-mail, telefone, aleatória
  status      PayoutStatus @default(PENDING)
  requestedAt DateTime     @default(now())
  processedAt DateTime?
}

enum PayoutStatus {
  PENDING
  APPROVED
  PAID
  FAILED
  CANCELLED
}

enum PixKeyType {
  CPF
  EMAIL
  PHONE
  RANDOM
}

// ───────────────────────────────────────
// 13. AFILIADO
// ───────────────────────────────────────
model Affiliate {
  id             String   @id @default(cuid())
  userId         String   @unique
  user           User     @relation(fields: [userId], references: [id])
  commissionRate Float    @default(30.0) // %
  totalEarnings  Float    @default(0.0)
  paidEarnings   Float    @default(0.0)
  createdAt      DateTime @default(now())
  referrals      Referral[]
}

model Referral {
  id           String   @id @default(cuid())
  affiliateId  String
  referredId   String
  joinedAt     DateTime @default(now())
  affiliate    Affiliate @relation(fields: [affiliateId], references: [id])
  referred     User      @relation(fields: [referredId], references: [id])
  @@unique([affiliateId, referredId])
}

// ───────────────────────────────────────
// 14. ASSINATURA (PLANO PRO)
// ───────────────────────────────────────
model Subscription {
  id            String       @id @default(cuid())
  userId        String
  user          User         @relation(fields: [userId], references: [id])
  planId        String
  plan          Plan         @relation(fields: [planId], references: [id])
  status        SubscriptionStatus @default(ACTIVE)
  startDate     DateTime     @default(now())
  nextBilling   DateTime?
  paymentId     String
  payment       Payment      @relation(fields: [paymentId], references: [id])
  affiliateId   String?      // se veio de afiliado
  affiliate     Affiliate?   @relation(fields: [affiliateId], references: [id])
  createdAt     DateTime     @default(now())
  updatedAt     DateTime     @updatedAt
}

enum SubscriptionStatus {
  ACTIVE
  CANCELLED
  EXPIRED
  PENDING
}

model Plan {
  id          String   @id @default(cuid())
  name        String   // "PRO", "PRO+"
  price       Float    // 19.90, 49.90
  currency    String   @default("BRL")
  maxDraws    Int?     // null = ilimitado
  features    String[] // ex: ["export", "bots", "priority"]
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  subscriptions Subscription[]
}

// ───────────────────────────────────────
// 15. LOGS DE SEGURANÇA
// ───────────────────────────────────────
model Log {
  id        String   @id @default(cuid())
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  action    String   // "created_rifa", "paid", "login"
  entity    String?  // "Rifa", "Vaquinha"
  entityId  String?
  details   Json?
  ip        String?
  userAgent String?
  createdAt DateTime @default(now())
}

// ───────────────────────────────────────
// 16. NOTIFICAÇÕES
// ───────────────────────────────────────
model Notification {
  id         String   @id @default(cuid())
  userId     String
  user       User     @relation(fields: [userId], references: [id])
  title      String
  message    String
  read       Boolean  @default(false)
  type       String   // "winner", "payment", "system"
  createdAt  DateTime @default(now())
}
## 🔐 *Índices e Restrições*

```Prisma
// Índices para performance
model Rifa {
  @@index([createdBy])
  @@index([status])
}

model Vaquinha {
  @@index([createdBy])
  @@index([status])
}

model Payment {
  @@index([userId, status])
}

model PayoutRequest {
  @@index([userId, status])
}

model Log {
  @@index([userId, action])
  @@index([entity, entityId])
}
```

## 🧪 *Validação de Dados (Regras de Negócio no Banco)*

| REGRA                                                     | IMPLEMENTAÇÃO                             |
| Usuário só pode criar 3 sorteios grátis                   | drawsUsed < maxDrawsAllowed > no backend  |
| Taxa de 5% em todas as vaquinhas                          | platformFeeRate = 5.0 por padrão          |
| Chave Pix única por saque                                 | Validação no backend antes de salvar      |
| Não repetir números de rifa                               | Sistema controla currentTicket            |
| Vencedor não pode ser sorteado novamente (se configurado) | Lógica no serviço de sorteio              |
