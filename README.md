# API REST - Clientes, Empresas e Serviços

Este é um projeto de uma API RESTful desenvolvido utilizando Node.js com Express, Sequelize e SQLite. Ele segue o padrão de arquitetura MVC (Model-View-Controller) e implementa operações CRUD para gerenciar as tabelas de **Clientes**, **Empresas** e **Serviços**.

## 🚀 Funcionalidades

- **CRUD Completo** para as tabelas:
  - **Clientes**
  - **Empresas**
  - **Serviços**
- Relacionamentos entre as tabelas.
- Banco de dados local utilizando SQLite.

## 🛠️ Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [Sequelize](https://sequelize.org/)
- [SQLite](https://www.sqlite.org/)

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org/) instalado.
- Gerenciador de pacotes [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/).

## ⚙️ Configuração do Projeto

1. Clone o repositório:

   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
   cd seu-repositorio
  ```
2. Instale as dependências:
  ```bash
    npm install
  ```

## ▶️ Executando o Projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```


## 📄 Endpoints

### Clientes

- **Listar todos os clientes**  
  `GET /clientes`  

- **Obter um cliente específico**  
  `GET /clientes/:id`  

- **Criar um novo cliente**  
  `POST /clientes`  

- **Atualizar um cliente existente**  
  `PUT /clientes/:id`  

- **Excluir um cliente**  
  `DELETE /clientes/:id`  

### Empresas

- **Listar todas as empresas**  
  `GET /empresas`  

- **Obter uma empresa específica**  
  `GET /empresas/:id`  

- **Criar uma nova empresa**  
  `POST /empresas`  

- **Atualizar uma empresa existente**  
  `PUT /empresas/:id`  

- **Excluir uma empresa**  
  `DELETE /empresas/:id`  

### Serviços

- **Listar todos os serviços**  
  `GET /servicos`  

- **Obter um serviço específico**  
  `GET /servicos/:id`  

- **Criar um novo serviço**  
  `POST /servicos`  

- **Atualizar um serviço existente**  
  `PUT /servicos/:id`  

- **Excluir um serviço**  
  `DELETE /servicos/:id`


  ## Desenvolvido com ❤️ por Arthur Manenti.
