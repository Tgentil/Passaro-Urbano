# Pássaro Urbano - Marketplace de Ofertas

[![GitHub](https://img.shields.io/badge/Visite-Meu%20Perfil-0891B2?style=flat-square&logo=github)](https://github.com/Tgentil)
[![Website](https://img.shields.io/badge/🌍&nbsp;&nbsp;Visite-Website-4285f4?style=flat-square&logo=globe)](http://app2-teste-publicaco-passaro-urbano.s3-website-sa-east-1.amazonaws.com)
[![Curso Udemy](https://img.shields.io/badge/Udemy-Curso-blue?style=flat-square&logo=udemy)](https://www.udemy.com/course/curso-de-desenvolvimento-web-com-es6-typescript-e-angular-4/)
[![Instrutor](https://img.shields.io/badge/👨🏻‍🏫&nbsp;Instrutor-Jorge%20Sant´Ana-yellow?style=flat-square&logo=website)](https://jorgesantana.net.br/)

O **Pássaro Urbano** é um marketplace de ofertas inspirado no Peixe Urbano, desenvolvido com **Angular 17.1.1** como parte do curso de desenvolvimento web com TypeScript e Angular. O projeto simula a exibição de ofertas e cupons de desconto para estabelecimentos de entretenimento e restaurantes, utilizando um banco de dados fake via `json-server`.

---

## 🚀 Tecnologias Utilizadas

- **Angular 17.1.1**
- **TypeScript 5.3.3**
- **Bootstrap 5** (para estilização)
- **RxJS** (Observables e manipulação de dados assíncronos)
- **Json-Server** (API Fake para simular um backend)
- **Rotas Angular** (Navigation, Route Params e Child Routes)

---

## 📌 Funcionalidades Principais

✔️ Listagem de ofertas de produtos e serviços  
✔️ Navegação entre páginas utilizando **Rotas Angular**  
✔️ Busca dinâmica de ofertas com **Observables e DebounceTime**  
✔️ Detalhamento de ofertas com abas "Como Usar?" e "Onde Fica?"  
✔️ Carrinho de compras dinâmico com **incremento/decremento de itens**  
✔️ Formulário de pedidos com **validações e envio para API**  
✔️ Simulação de um checkout de compra  

---

## 🔧 Como Executar o Projeto?

1️⃣ **Clonar o repositório**
```bash
git clone https://github.com/Tgentil/Passaro-Urbano.git
cd Passaro-Urbano
```

2️⃣ **Instalar as dependências**
```bash
npm install
```

3️⃣ **Rodar o servidor fake (Banco de Dados)**
```bash
json-server --watch banco-de-dados.json
```

4️⃣ **Executar o servidor de desenvolvimento**
```bash
ng serve
```

5️⃣ **Acesse no navegador**  
Abra [http://localhost:4200](http://localhost:4200/) para visualizar o projeto.

---

## 📖 Conceitos Aprendidos no Projeto

Durante o desenvolvimento desse projeto, foram explorados vários conceitos essenciais do **Angular e TypeScript**, incluindo:

✅ **Componentes, Módulos e Serviços no Angular**  
✅ **Promises e Observables** para lidar com operações assíncronas  
✅ **API Rest com HttpClient** para consumir dados  
✅ **Rotas Dinâmicas e Roteamento com Child Routes**  
✅ **Two-Way Data Binding**  
✅ **Validações em formulários reativos e template-driven**  
✅ **Uso de Pipes e Formatação de Dados**  
✅ **Gerenciamento de estado com Service e Subject**  

---

## 📜 Licença

Este projeto foi desenvolvido para fins de estudo e aprendizado. Qualquer uso deve seguir as diretrizes do curso original.