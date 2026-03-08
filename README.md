# API de Cadastro

Este projeto é uma API simples para cadastro e listagem de dados. Desenvolvida com Node.js e Express, ela consolida conceitos fundamentais de back-end, como rotas, middlewares, validação de dados e armazenamento temporário em memória.

## 🚀 Funcionalidades

- **Listar Voluntários**: Endpoint GET para visualizar todos os profissionais cadastrados.
- **Cadastrar Voluntário**: Endpoint POST para registrar um novo profissional, com validações rigorosas nos dados enviados.
- **Validação de Dados**: Garante que nome, email, telefone e mensagem atendam aos critérios definidos.
- **Armazenamento Temporário**: Os cadastros são armazenados em um array em memória (não persistente após reinicialização do servidor).
- **Middleware JSON**: Suporte para envio de dados em formato JSON.

## 🛠️ Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express.js**: Framework para criação de APIs RESTful.
- **Joi**: Biblioteca para validação de dados de entrada.
- **Dotenv**: Gerenciamento de variáveis de ambiente (para a porta do servidor).
- **Nodemon**: Ferramenta para reinicialização automática do servidor durante desenvolvimento.

## 📋 Pré-requisitos

- Node.js instalado.
- NPM ou Yarn para gerenciamento de pacotes.

## 🔧 Instalação e Execução

1. **Clone o repositório**
   ```
   cd desafioVaiNaWeb
   ```

2. **Instale as dependências**:
   ```
   npm install
   ```

3. **Configure as variáveis de ambiente**:
   - Crie um arquivo `.env` na raiz do projeto.
   - Adicione a porta desejada (exemplo: `PORT=3000`).

4. **Execute o servidor**:
   - Para desenvolvimento (com Nodemon):
     ```
     npm run dev
     ```
   - Para produção:
     ```
     node server.js
     ```

O servidor estará rodando em `http://localhost:{PORT}` (substitua `{PORT}` pela porta configurada no `.env`).

## 📚 Endpoints da API

### 1. Listar Voluntários
- **Método**: GET
- **URL**: `/voluntarios`
- **Descrição**: Retorna uma lista de todos os voluntários cadastrados em formato JSON.
- **Resposta de Sucesso (200)**:
  ```json
  [
    {
      "id": 1,
      "nome": "João Silva",
      "email": "joao@example.com",
      "telefone": "11987654321",
      "mensagem": "Disponível para consultas gerais."
    }
  ]
  ```


### 2. Cadastrar Voluntário
- **Método**: POST
- **URL**: `/cadastrar-voluntario`
- **Descrição**: Registra um novo voluntário. Os dados devem ser enviados no corpo da requisição em JSON.
- **Cabeçalhos**: `Content-Type: application/json`
- **Corpo da Requisição (JSON)**:
  ```json
  {
    "nome": "Maria Oliveira",
    "email": "maria@example.com",
    "telefone": "1187654321",
    "mensagem": "Especialista em odontologia preventiva."
  }
  ```

## ✅ Regras de Validação

Os dados enviados no POST devem seguir estas regras:

- **Nome**: String com no mínimo 3 caracteres (obrigatório).
- **Email**: Email válido no formato padrão (ex.: usuario@dominio.com) (obrigatório).
- **Telefone**: String com exatamente 10 ou 11 dígitos numéricos (ex.: "11987654321" ou "1187654321") (obrigatório).
- **Mensagem**: String com no máximo 500 caracteres (opcional).

Se qualquer campo não atender às regras, a API retornará um erro 400 com a descrição do problema.

