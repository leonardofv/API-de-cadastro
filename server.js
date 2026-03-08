require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;
const joi = require('joi');

app.use(express.json());

const voluntarioSchema = joi.object({
  nome: joi.string().min(3).required(),
  email: joi.string().email().required(),
  telefone: joi.string()
    .pattern(/^\d{10,11}$/)
    .message('Telefone deve ter 10 ou 11 dígitos')
    .required(),
  mensagem: joi.string().max(500),
});

let voluntarios = [];

app.get('/https://api-de-cadastro-66hv.onrender.com/voluntarios', (req, res) => {
  res.json(voluntarios);
});

app.post('https://api-de-cadastro-66hv.onrender.com/cadastrar-voluntario', (req, res) => {
  const { error, value } = voluntarioSchema.validate(req.body);

  if (error) {
    return res.status(400).json({
      message: "Erro ao criar",
      error: error.message
    });
  };

  const { nome, email, telefone, mensagem  } = value;

  const novoCadastro = {
    id: voluntarios.length + 1,
    nome,
    email,
    telefone,
    mensagem
  };

  voluntarios.push(novoCadastro);
  res.status(201).json(novoCadastro);
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
