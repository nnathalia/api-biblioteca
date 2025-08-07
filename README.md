# 📚 API Biblioteca

Trabalho desenvolvido para a disciplina de **Tópicos Essenciais em Tecnologia**.

Esta aplicação é uma API RESTful para o gerenciamento de uma biblioteca, incluindo funcionalidades para controlar livros, autores, editoras, pessoas, usuários, empréstimos e contatos.

## 📁 Estrutura do Projeto

```
src/
├── api/
│   ├── components/
│   │   ├── autor/
│   │   ├── base/
│   │   ├── contato/
│   │   ├── editora/
│   │   ├── emprestimo/
│   │   ├── endereco/
│   │   ├── livro/
│   │   ├── pessoa/
│   │   └── user/
│   ├── index.ts
│   └── routes.ts
├── config/
│   └── database/
│       └── mysql-datasource.config.ts
├── app.ts
└── server.ts
```

## 🔧 Tecnologias Utilizadas

- **Node.js**
- **Express.js**
- **TypeScript**
- **TypeORM**
- **MySQL**
- **Docker (via docker-compose)**

## 🚀 Como Executar o Projeto

### 1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/api-biblioteca.git
cd api-biblioteca
```

### 2. Instale as dependências:

```bash
npm install
```

### 3. Configure o banco de dados

Edite o arquivo `src/config/database/mysql-datasource.config.ts` com suas credenciais do MySQL, ou utilize o banco fornecido no `docker-compose.yml`.

### 4. Suba os containers com Docker (opcional):

```bash
docker-compose up -d
```

### 5. Execute o projeto:

```bash
npm run dev
```

## 📌 Funcionalidades

- Cadastro e gerenciamento de:
  - 📘 Livros
  - 👤 Pessoas
  - 🧑‍💼 Usuários
  - 🏢 Editoras
  - ✍️ Autores
  - 🏠 Endereços
  - 📞 Contatos
  - 🔁 Empréstimos

## 📨 Rotas

As rotas principais são agrupadas no arquivo `src/api/components/index.ts` e registradas com prefixos. Exemplo:

- `GET /users`
- `GET /livro`
- `POST /emprestimo`
- ...

## 👥 Autores

- Nathalia Mariano — [GitHub](https://github.com/nnathalia)
- Amanda Alves — [GitHub](https://github.com/aalvesz)

## 🤝 Contribuição

Sinta-se à vontade para abrir issues e pull requests. Toda ajuda é bem-vinda!
