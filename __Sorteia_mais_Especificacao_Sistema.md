# 📋 Sorteia+  
## Especificação do Sistema  
**Detalhamento de Funcionalidades, Requisitos e Regras de Negócio**  
*Documento técnico — v1.0*

---

### 🧑‍💼 Fundador  
**Wellington Monteiro**  
📧 wcsevendev@gmail.com  

---

## 🎯 Objetivo do Sistema

O **Sorteia+** é uma plataforma digital que permite a criação, gerenciamento e realização de:
- **Rifas numeradas**
- **Sorteios aleatórios**
- **Vaquinhas (crowdfunding)**
- **Roda da sorte visual**
- **Programa de afiliados**

Com foco em **transparência, segurança e justiça**, o sistema permite que qualquer usuário crie campanhas, arrecade recursos e realize sorteios com auditoria, enquanto a plataforma gera receita por meio de **assinaturas** e **taxa obrigatória sobre vaquinhas**.

---

## 🧩 Módulos do Sistema

| Módulo | Descrição |
|-------|---------|
| **Autenticação** | Cadastro e login com Google, e-mail ou redes sociais |
| **Rifas** | Criação de rifas numeradas com pagamento integrado |
| **Sorteios Aleatórios** | Sorteio entre nomes, e-mails ou IDs |
| **Vaquinhas** | Campanhas de arrecadação com meta e taxa fixa |
| **Roda da Sorte** | Componente visual interativo para sorteios |
| **Pagamentos** | Integração com Pix, cartão e moedas internas |
| **Saque (Payout)** | Retirada de valores arrecadados via Pix |
| **Afiliados** | Programa de indicação com comissão |
| **Dashboard** | Painel para criadores, afiliados e admin |
| **Histórico e Auditoria** | Registro de todas as ações e transações |

---

## 📋 Funcionalidades por Módulo

### 1. Autenticação
- [ ] Login com Google
- [ ] Cadastro com e-mail e senha (opcional)
- [ ] Recuperação de senha
- [ ] Verificação de e-mail
- [ ] Perfil com foto, nome e papel (`role`)
- [ ] Suporte a contas sociais (futuro)

### 2. Rifas
- [ ] Criar rifa com título, descrição, preço e quantidade
- [ ] Definir prêmio e imagem
- [ ] Venda de números sequenciais (1 a N)
- [ ] Participante escolhe quantidade de números
- [ ] Geração de comprovante de compra
- [ ] Sorteio automático com número vencedor
- [ ] Notificação por e-mail ao vencedor
- [ ] Exportação do resultado (PDF/CSV)

### 3. Sorteios Aleatórios
- [ ] Criar sorteio com lista de participantes
- [ ] Adicionar participantes por nome, e-mail ou ID
- [ ] Sorteio com 1 ou mais vencedores
- [ ] Opção de excluir vencedores anteriores do mesmo concurso
- [ ] Visualização do sorteio em roleta (Roda da Sorte)
- [ ] Exportação de resultados

### 4. Vaquinhas
- [ ] Criar vaquinha com meta, descrição e imagem
- [ ] Qualquer usuário pode criar (sem restrição de plano)
- [ ] Arrecadação com Pix, cartão ou moedas internas
- [ ] **Taxa de 5% obrigatória sobre o valor arrecadado**
- [ ] Dashboard com progresso em tempo real
- [ ] Histórico de contribuidores
- [ ] Saque do valor líquido via Pix

### 5. Roda da Sorte Visual
- [ ] Integração com rifas e sorteios
- [ ] Personalização de prêmios e cores
- [ ] Animação realista de rotação
- [ ] Resultado auditável (número sorteado + timestamp)

### 6. Pagamentos
- [ ] Integração com **Stripe** (cartão de crédito)
- [ ] Integração com **Pix** (Mercado Pago ou Gerencianet)
- [ ] Webhooks para confirmação de pagamento
- [ ] Suporte a **moedas internas** (saldo da plataforma)
- [ ] Histórico de pagamentos no perfil

### 7. Saque (Payout)
- [ ] Solicitação de saque via Pix
- [ ] Informar chave Pix (CPF, e-mail, telefone, aleatória)
- [ ] Aprovação automática ou manual
- [ ] Processamento em até 24h
- [ ] Notificação por e-mail
- [ ] Mínimo para saque: R$10,00
- [ ] Histórico de saques

### 8. Afiliados
- [ ] Cadastro como afiliado
- [ ] Link de indicação único: `sorteia.plus?ref=wellington123`
- [ ] Ganhos por indicação de assinaturas PRO
- [ ] Comissão: 30% do primeiro pagamento do indicado
- [ ] Dashboard de afiliado (ganhos, indicados, saques)
- [ ] Pagamento via Pix ou crédito na plataforma

### 9. Dashboard
- [ ] **Para Criadores:**
  - Minhas rifas, sorteios, vaquinhas
  - Saldo disponível para saque
  - Histórico de sorteios
- [ ] **Para Afiliados:**
  - Ganhos, número de indicados
  - Link de indicação
  - Histórico de comissões
- [ ] **Para Admin:**
  - Gestão de usuários, sorteios, pagamentos
  - Logs de segurança
  - Relatórios financeiros

### 10. Histórico e Auditoria
- [ ] Registro de todas as ações (criar, editar, sortear, pagar)
- [ ] Tabela `Log` com:
  - Usuário
  - Ação
  - Entidade (Rifa, Vaquinha, etc.)
  - ID da entidade
  - IP e User Agent
  - Timestamp
- [ ] Exportação de logs (admin)

---

## 📐 Requisitos Funcionais (RF)

| ID | Descrição |
|----|----------|
| RF-01 | O sistema deve permitir cadastro com Google ou e-mail |
| RF-02 | Usuário pode criar até 3 sorteios gratuitos na vida |
| RF-03 | Após 3 sorteios, é necessário assinar plano PRO para continuar |
| RF-04 | Qualquer usuário pode criar uma vaquinha |
| RF-05 | O sistema deve cobrar 5% de taxa sobre o valor arrecadado em vaquinhas |
| RF-06 | Criador deve poder solicitar saque via Pix |
| RF-07 | Sistema deve notificar vencedores por e-mail |
| RF-08 | Sorteios devem ser auditáveis (com data, hora e resultado) |
| RF-09 | Afiliado deve ganhar 30% do primeiro pagamento do indicado |
| RF-10 | Resultados de sorteios devem ser exportáveis em PDF e CSV |

---

## 🛡️ Requisitos Não Funcionais (RNF)

| ID | Descrição |
|----|----------|
| RNF-01 | Sistema deve suportar até 10.000 usuários simultâneos |
| RNF-02 | Tempo de resposta das APIs < 500ms |
| RNF-03 | Dados financeiros devem ser criptografados |
| RNF-04 | Backup diário do banco de dados |
| RNF-05 | Logs de todas as ações financeiras |
| RNF-06 | Interface responsiva (web e mobile) |
| RNF-07 | Sistema deve estar disponível 99,9% do tempo |
| RNF-08 | Conformidade com LGPD (proteção de dados) |

---

## 📜 Regras de Negócio (RN)

| ID | Regra |
|----|------|
| RN-01 | Usuário comum pode criar até 3 sorteios na vida |
| RN-02 | Após o 3º sorteio, é necessário assinar plano PRO para criar novos |
| RN-03 | Assinatura PRO não isenta de taxa em vaquinhas |
| RN-04 | Taxa de 5% é obrigatória em todas as vaquinhas, independentemente do plano |
| RN-05 | Valor líquido da vaquinha = valor arrecadado – 5% |
| RN-06 | Saques são processados em até 24h após solicitação |
| RN-07 | Afiliados ganham comissão apenas se o indicado assinar um plano pago |
| RN-08 | Vencedor de um sorteio não pode ser sorteado novamente no mesmo concurso (se configurado) |
| RN-09 | Números de rifa são sequenciais e não podem ser repetidos |
| RN-10 | Criador recebe notificação quando um ticket é vendido |

---

## 🔁 Fluxos de Uso

### Fluxo: Criação de Rifa
1. Usuário autenticado acessa "Criar Rifa"
2. Preenche dados: título, preço, quantidade, prêmio
3. Clica em "Criar"
4. Sistema verifica se o usuário pode criar (≤ 3 sorteios)
5. Rifa é criada e link gerado
6. Participantes compram números via Pix/cartão
7. Criador encerra e realiza sorteio
8. Vencedor é notificado

### Fluxo: Saque de Vaquinha
1. Criador acessa "Financeiro"
2. Ve o valor líquido disponível (após 5%)
3. Clica em "Sacar"
4. Informa chave Pix
5. Sistema cria `PayoutRequest` (status: PENDING)
6. Após aprovação, status muda para PAID
7. Dinheiro é transferido

### Fluxo: Programa de Afiliados
1. Usuário se cadastra como afiliado
2. Recebe link: `?ref=wellington123`
3. Compartilha o link
4. Novo usuário entra e assina plano PRO
5. Sistema registra afiliação
6. Afiliado ganha 30% do primeiro pagamento
7. Comissão é creditada

---

## 🔐 Políticas de Segurança

- **Autenticação:** JWT + cookies seguros
- **Autorização:** Verificação de `role` em todas as rotas protegidas
- **Validação de entrada:** Zod para todos os payloads
- **Sanitização:** Evitar SQL/NoSQL injection
- **Rate Limiting:** Máximo de 100 requisições/min por IP
- **CORS:** Permitido apenas para `sorteia.plus` e `api.sorteia.plus`
- **Logs:** Toda ação financeira é registrada
- **Backup:** Diário, com retenção de 90 dias

---

## 💬 Suporte ao Usuário

- **Canais:**
  - E-mail: suporte@sorteia.plus
  - Telegram: @sorteiaplus_suporte
  - Formulário no site
- **Tempo de resposta:**
  - Básico: até 48h
  - Prioritário (PRO+): até 24h
  - Crítico: até 2h

---

## 📎 Contato

**Wellington Monteiro**  
📧 wcsevendev@gmail.com  
🌐 www.sorteia.plus

---

> © 2025 Sorteia+ – Todos os direitos reservados.  
> Documento técnico confidencial. Não distribuir sem autorização.