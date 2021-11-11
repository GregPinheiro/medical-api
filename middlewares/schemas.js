const { string } = require("joi");
const Joi = require("joi");

const postUserSchema = Joi.object().keys({
  name: Joi.string().min(5).required(),
  password: Joi.string().min(6).required(),
});

const signinSchema = Joi.object().keys({
  name: Joi.string().min(5).required(),
  password: Joi.string().min(6).required(),
});

const cirurgiasSchema = Joi.object().keys({
  nome: Joi.string().min(5).required(),
  CID: Joi.string(),
  justificativa: Joi.string(),
  TUSS: Joi.string(),
  materiais: Joi.string(),
});

const conveniosSchema = Joi.object().keys({
  nome: Joi.string().min(5).required(),
  endereco: Joi.string(),
  cidade: Joi.string(),
  UF: Joi.string(),
  CEP: Joi.string(),
  telefone: Joi.string(),
  email: Joi.string(),
  celular: Joi.string(),
  plano: Joi.string(),
  acomodacao: Joi.string(),
});

const fornecedoresSchema = Joi.object().keys({
  nome: Joi.string().min(5).required(),
  CNPJ: Joi.string(),
  endereco: Joi.string(),
  cidade: Joi.string(),
  UF: Joi.string(),
  CEP: Joi.string(),
  representante: Joi.string(),
  telefone: Joi.string(),
  email: Joi.string(),
  celular: Joi.string(),
});

const hospitaisSchema = Joi.object().keys({
  nome: Joi.string().min(5).required(),
  CNPJ: Joi.string(),
  unidade: Joi.string(),
  endereco: Joi.string(),
  cidade: Joi.string(),
  UF: Joi.string(),
  CEP: Joi.string(),
  contato1: Joi.string(),
  contato2: Joi.string(),
  contato3: Joi.string(),
  contato4: Joi.string(),
  telefone1: Joi.string(),
  telefone2: Joi.string(),
  telefone3: Joi.string(),
  telefone4: Joi.string(),
  email1: Joi.string(),
  email2: Joi.string(),
  email3: Joi.string(),
  email4: Joi.string(),
});

module.exports = {
  signinSchema,
  postUserSchema,
  cirurgiasSchema,
  conveniosSchema,
  fornecedoresSchema,
  hospitaisSchema,
};
