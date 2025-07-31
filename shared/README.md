# 📦 Sorteia+ Shared

## Tipos e Utilitários Compartilhados

**Pacote compartilhado** entre Frontend e Backend

---

### 🧑‍💼 **Fundador**

**Wellington Monteiro**  
📧 <wcsevendev@gmail.com>

---

## 🎯 **Objetivo**

Este pacote contém **tipos TypeScript** e **utilitários** que são compartilhados entre o frontend e backend, garantindo:

- ✅ **Consistência** de tipos entre projetos
- ✅ **Reutilização** de código
- ✅ **Manutenibilidade** centralizada
- ✅ **Type Safety** em toda a aplicação

---

## 📁 **Estrutura**

```
shared/
├── types/              # Tipos TypeScript
│   ├── auth.ts        # Tipos de autenticação
│   ├── rifas.ts       # Tipos de rifas
│   ├── vaquinhas.ts   # Tipos de vaquinhas
│   ├── sorteios.ts    # Tipos de sorteios
│   ├── afiliados.ts   # Tipos de afiliados
│   ├── payments.ts    # Tipos de pagamentos
│   └── index.ts       # Exportações principais
├── utils/              # Utilitários
│   ├── validation.ts  # Schemas Zod
│   ├── constants.ts   # Constantes
│   └── helpers.ts     # Funções auxiliares
├── package.json        # Configuração do pacote
└── tsconfig.json      # Configuração TypeScript
```

---

## 🔧 **Tipos Principais**

### **Autenticação:**

```typescript
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  USER = 'USER',
  PRO = 'PRO',
  PRO_PLUS = 'PRO_PLUS',
  ADMIN = 'ADMIN'
}
```

### **Rifas:**

```typescript
export interface Rifa {
  id: string;
  title: string;
  description?: string;
  pricePerTicket: number;
  totalTickets?: number;
  currentTicket: number;
  prize?: string;
  status: RifaStatus;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export enum RifaStatus {
  ACTIVE = 'ACTIVE',
  ENDED = 'ENDED',
  CANCELLED = 'CANCELLED'
}
```

### **Vaquinhas:**

```typescript
export interface Vaquinha {
  id: string;
  title: string;
  description?: string;
  goal: number;
  currentAmount: number;
  platformFeeRate: number;
  platformFee: number;
  netToCreator: number;
  status: VaquinhaStatus;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}
```

---

## 🛠️ **Como Usar**

### **No Backend:**

```typescript
// package.json
{
  "dependencies": {
    "@sorteia-plus/shared": "file:../shared"
  }
}

// Uso
import { User, UserRole } from '@sorteia-plus/shared';
```

### **No Frontend:**

```typescript
// package.json
{
  "dependencies": {
    "@sorteia-plus/shared": "file:../shared"
  }
}

// Uso
import { Rifa, RifaStatus } from '@sorteia-plus/shared';
```

---

## 📝 **Validações Zod**

### **Schemas de Validação:**

```typescript
import { z } from 'zod';

export const createRifaSchema = z.object({
  title: z.string().min(3).max(100),
  description: z.string().optional(),
  pricePerTicket: z.number().positive(),
  totalTickets: z.number().positive().optional(),
  prize: z.string().optional(),
});

export const participateRifaSchema = z.object({
  rifaId: z.string().cuid(),
  quantity: z.number().min(1).max(10),
});
```

---

## 🔄 **Atualizações**

### **Quando Atualizar:**

1. **Novos tipos** adicionados
2. **APIs modificadas** no backend
3. **Validações alteradas**
4. **Constantes atualizadas**

### **Processo:**

1. Atualizar tipos em `shared/types/`
2. Atualizar validações em `shared/utils/`
3. Incrementar versão no `package.json`
4. Reinstalar dependências nos projetos

---

## 📦 **Publicação**

### **Desenvolvimento:**

```bash
# Link local
cd shared && yarn link
cd ../backend && yarn link "@sorteia-plus/shared"
cd ../frontend && yarn link "@sorteia-plus/shared"
```

### **Produção:**

```bash
# Publicar no npm (futuro)
cd shared && yarn publish
```

---

## 🧪 **Testes**

```bash
# Executar testes dos tipos
yarn test:types

# Verificar compatibilidade
yarn test:compatibility
```

---

## 📋 **Checklist de Mudanças**

- [ ] Tipos TypeScript atualizados
- [ ] Schemas Zod validados
- [ ] Constantes revisadas
- [ ] Documentação atualizada
- [ ] Versão incrementada
- [ ] Testes passando
- [ ] Projetos atualizados

---

## 🤝 **Contribuição**

1. Atualizar tipos em `shared/types/`
2. Adicionar validações em `shared/utils/`
3. Atualizar documentação
4. Testar em ambos os projetos
5. Commit com mensagem descritiva

---

## 📞 **Contato**

**Wellington Monteiro**  
📧 <wcsevendev@gmail.com>  
🌐 <www.sorteia.plus>

---

> © 2025 Sorteia+ – Shared Package
