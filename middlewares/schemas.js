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
  endereco: Joi.any(),
  cidade: Joi.any(),
  UF: Joi.any(),
  CEP: Joi.any(),
  telefone: Joi.any(),
  email: Joi.any(),
  celular: Joi.any(),
  plano: Joi.any(),
  acomodacao: Joi.any(),
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
  CNPJ: Joi.any(),
  unidade: Joi.any(),
  endereco: Joi.any(),
  cidade: Joi.any(),
  UF: Joi.any(),
  CEP: Joi.any(),
  contato1: Joi.any(),
  contato2: Joi.any(),
  contato3: Joi.any(),
  contato4: Joi.any(),
  telefone1: Joi.any(),
  telefone2: Joi.any(),
  telefone3: Joi.any(),
  telefone4: Joi.any(),
  email1: Joi.any(),
  email2: Joi.any(),
  email3: Joi.any(),
  email4: Joi.any(),
});

const medicosSchema = Joi.object().keys({
  nome: Joi.string().min(5).required(),
  especialidade: Joi.any(),
  CRO_CRM: Joi.any(),
  endereco: Joi.any(),
  cidade: Joi.any(),
  UF: Joi.any(),
  CEP: Joi.any(),
  telefone: Joi.any(),
  celular: Joi.any(),
  email: Joi.any(),
  secretaria: Joi.any(),
});

const pacientesSchema = Joi.object().keys({
  nome: Joi.string().min(5).required(),
  CPF: Joi.any(),
  dataNasc: Joi.date(),
  endereco: Joi.any(),
  cidade: Joi.any(),
  UF: Joi.any(),
  CEP: Joi.any(),
  telefone: Joi.any(),
  celular: Joi.any(),
  email: Joi.string().email(),
  noCarteirinha: Joi.any(),
  dataInclusao: Joi.date(),
  validade: Joi.date(),
  login: Joi.any(),
  senha: Joi.any(),
});

module.exports = {
  signinSchema,
  postUserSchema,
  cirurgiasSchema,
  conveniosSchema,
  fornecedoresSchema,
  hospitaisSchema,
  medicosSchema,
  pacientesSchema,
};
