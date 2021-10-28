const { User } = require("../models");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { secret } = require("../middlewares/config");

const userServices = {
  post: async (datas) => {
    let status = null;
    let error = null;
    let data = {};

    const { name, password } = datas;

    const hashPassword = bcrypt.hashSync(password, 10);

    try {
      const checkName = await User.findOne({ where: { name } });

      if (checkName) {
        status = 400;
        error = "Usuário já cadastrado!";
      } else {
        const response = await User.create({ name, password: hashPassword });

        const token = jwt.sign({ id: response.id }, secret, {
          expiresIn: 3600,
        });

        status = 201;
        data = { auth: true, token, name };
      }
    } catch (e) {
      status = 500;
      error = e;
    }

    return { data, status, error };
  },
  signin: async (datas, session) => {
    let status = null;
    let error = null;
    data = {};

    const { name, password } = datas;

    try {
      const user = await User.findOne({ where: { name } });

      if (user) {
        if (bcrypt.compareSync(password, user.password)) {
          session.userName = { name, auth: true };

          const token = jwt.sign({ id: user.id }, secret, { expiresIn: 3600 });

          data = { auth: true, token, name };
          status = 202;
        } else {
          error = "Senha inválida";
          status = 404;
        }
      } else {
        error = "Usuário não encontrado";
        status = 404;
      }
    } catch (e) {
      error = e;
      status = 500;
    }

    return { data, status, error };
  },
};

module.exports = userServices;
