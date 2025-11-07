# Mini E-commerce React + TypeScript + Vite

## 📌 Sobre o Projeto

Este é um **mini e-commerce** construído com **React**, **TypeScript** e **Vite**.
O projeto permite navegar entre páginas de produtos, carrinho e checkout, adicionar ou remover produtos, e visualizar a quantidade total de itens e o valor total da compra.

O layout é totalmente feito com **Styled Components**, e a lógica de estado é gerenciada apenas com **useState** e **props**. Não há Redux ou outras bibliotecas de gerenciamento de estado.

---

## ⚡ Funcionalidades

* Listagem de produtos com seleção/deseleção para o carrinho
* Carrinho com ajuste de quantidade de cada item
* Visualização do subtotal de cada produto e do total geral
* Checkout com resumo do pedido: total de produtos e valor total
* Footer fixo com formas de pagamento e botão de ação

---

## 🛠 Tecnologias Utilizadas

* **React**
* **TypeScript**
* **Vite**
* **Styled Components**

---

## 🗂 Estrutura do Projeto

```
src/
│
├─ components/       # Componentes reutilizáveis (Home, Cart, Checkout, GenericBody)
├─ styles/           # Styled Components organizados por componente
├─ db/               # Simulação de banco de dados de produtos
├─ types/            # Tipagens TypeScript
├─ routes/           # Gerenciamento de páginas com useState
└─ App.tsx           # Componente principal
```

---

## 🚀 Como Rodar

1. Clone o repositório:

```bash
git clone https://github.com/CarlosRodrigoSchimanski/mini-projeto-react
```

2. Entre na pasta do projeto:

```bash
cd nome-do-projeto
```

3. Instale as dependências:

```bash
npm install
```

4. Execute o projeto:

```bash
npm run dev
```

5. Abra no navegador em:

```
http://localhost:5173
```
