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

module.exports = {
  signinSchema,
  postUserSchema,
  cirurgiasSchema,
};
