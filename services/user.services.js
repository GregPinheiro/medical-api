const { User } = require("../models");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
const { secret } = require("../middlewares/config");

const userServices = {
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
