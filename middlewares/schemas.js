const Joi = require("joi");

const signinSchema = Joi.object().keys({
  name: Joi.string().min(5).required(),
  password: Joi.string().min(6).required(),
});

module.exports = { signinSchema };
