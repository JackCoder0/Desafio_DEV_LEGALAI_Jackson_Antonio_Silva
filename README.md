# Desafio Mini MVP - LEGAL.AI

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-4.9.5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Vercel](https://img.shields.io/badge/Deployed-Vercel-000?logo=vercel)](https://desafio-dev-legalai-jackson-antonio-silva.vercel.app/)
[![License: MIT](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

> Este projeto foi desenvolvido como parte do processo seletivo para a **LEGAL.AI**.  
> O objetivo é simular um sistema de *match inteligente* entre candidatos com base em afinidade.

---

## 🚀 Demo

Acesse a aplicação online:  
🔗 [https://desafio-dev-legalai-jackson-antonio-silva.vercel.app](https://desafio-dev-legalai-jackson-antonio-silva.vercel.app)

---


## 🧠 Principais decisões técnicas

- **Stack escolhida**: React + TypeScript, por ser moderna, performática e altamente escalável.
- **Simulação de afinidade**: Utilizei `Math.random()` para gerar afinidade aleatória acima de 60%, com um *delay* de 2s para simular tempo de resposta da IA.
- **Validação de formulário**: `Zod` + `React Hook Form` para garantir validação tipada e fluída.
- **Estados e municípios**: Integração com a API pública do IBGE usando `Axios` e `React Query`.
- **Mock de dados**: Perfis com nome, descrição e interesses pré-definidos para simulação.

---

## 💡 Melhorias que seriam implementadas com mais tempo

- Integração com backend e banco de dados para buscar candidatos reais.
- Uso de uma IA real com scraping/análise via LinkedIn ou Instagram.
- Exibição da foto do candidato e link direto para contato (chat, email, etc.).
- Sistema de autenticação.
- Animações e melhorias visuais para melhorar a experiência do usuário.

---

## 🛠 Como rodar o projeto

### 1. Clone o repositório

```bash
git clone https://github.com/JackCoder0/Desafio_DEV_LEGALAI_Jackson_Antonio_Silva
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Rode o projeto localmente

```bash
npm run dev
```

---

## 💬 Contato

- GitHub: [GitHub](https://github.com/JackCoder0/)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/jackson-silva-coder/)

---