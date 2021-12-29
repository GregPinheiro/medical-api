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
  CID: Joi.string().allow(null, ""),
  justificativa: Joi.string().allow(null, ""),
  TUSS: Joi.string().allow(null, ""),
  materiais: Joi.string().allow(null, ""),
  observation: Joi.string().allow(null, ""),
});

const conveniosSchema = Joi.object().keys({
  nome: Joi.string().min(5).required(),
  endereco: Joi.string().allow(null, ""),
  cidade: Joi.string().allow(null, ""),
  UF: Joi.string().allow(null, ""),
  CEP: Joi.string().allow(null, ""),
  telefone: Joi.string().allow(null, ""),
  email: Joi.string().allow(null, ""),
  celular: Joi.string().allow(null, ""),
  plano: Joi.string().allow(null, ""),
  acomodacao: Joi.string().allow(null, ""),
  observation: Joi.string().allow(null, ""),
});

const fornecedoresSchema = Joi.object().keys({
  nome: Joi.string().min(5).required(),
  CNPJ: Joi.string().allow(null, ""),
  endereco: Joi.string().allow(null, ""),
  cidade: Joi.string().allow(null, ""),
  UF: Joi.string().allow(null, ""),
  CEP: Joi.string().allow(null, ""),
  representante: Joi.string().allow(null, ""),
  telefone: Joi.string().allow(null, ""),
  email: Joi.string().allow(null, ""),
  celular: Joi.string().allow(null, ""),
  observation: Joi.string().allow(null, ""),
});

const hospitaisSchema = Joi.object().keys({
  nome: Joi.string().min(5).required(),
  CNPJ: Joi.string().allow(null, ""),
  unidade: Joi.string().allow(null, ""),
  endereco: Joi.string().allow(null, ""),
  cidade: Joi.string().allow(null, ""),
  UF: Joi.string().allow(null, ""),
  CEP: Joi.string().allow(null, ""),
  contato1: Joi.string().allow(null, ""),
  contato2: Joi.string().allow(null, ""),
  contato3: Joi.string().allow(null, ""),
  contato4: Joi.string().allow(null, ""),
  telefone1: Joi.string().allow(null, ""),
  telefone2: Joi.string().allow(null, ""),
  telefone3: Joi.string().allow(null, ""),
  telefone4: Joi.string().allow(null, ""),
  email1: Joi.string().allow(null, ""),
  email2: Joi.string().allow(null, ""),
  email3: Joi.string().allow(null, ""),
  email4: Joi.string().allow(null, ""),
  observation: Joi.string().allow(null, ""),
});

const medicosSchema = Joi.object().keys({
  nome: Joi.string().min(5).required(),
  especialidade: Joi.string().allow(null, ""),
  CRO_CRM: Joi.string().allow(null, ""),
  endereco: Joi.string().allow(null, ""),
  cidade: Joi.string().allow(null, ""),
  UF: Joi.string().allow(null, ""),
  CEP: Joi.string().allow(null, ""),
  telefone: Joi.string().allow(null, ""),
  celular: Joi.string().allow(null, ""),
  email: Joi.string().allow(null, ""),
  secretaria: Joi.string().allow(null, ""),
  observation: Joi.string().allow(null, ""),
});

const pacientesSchema = Joi.object().keys({
  nome: Joi.string().min(5).required(),
  CPF: Joi.string().allow(null, ""),
  dataNasc: Joi.date(),
  endereco: Joi.string().allow(null, ""),
  cidade: Joi.string().allow(null, ""),
  UF: Joi.string().allow(null, ""),
  CEP: Joi.string().allow(null, ""),
  telefone: Joi.string().allow(null, ""),
  celular: Joi.string().allow(null, ""),
  email: Joi.string().email(),
  noCarteirinha: Joi.string().allow(null, ""),
  dataInclusao: Joi.date(),
  validade: Joi.date(),
  login: Joi.string().allow(null, ""),
  senha: Joi.string().allow(null, ""),
  observation: Joi.string().allow(null, ""),
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
