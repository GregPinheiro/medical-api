const Joi = require("joi");

const postUserSchema = Joi.object().keys({
  name: Joi.string().min(5).required(),
  password: Joi.string().min(6).required(),
});

const signinSchema = Joi.object().keys({
  name: Joi.string().min(5).required(),
  password: Joi.string().min(6).required(),
});

module.exports = { signinSchema, postUserSchema };
