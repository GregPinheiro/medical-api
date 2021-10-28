const userServices = require("../services/user.services");

const userController = {
  post: async (req, res) => {
    try {
      const datas = req.body;

      const { data, status, error } = await userServices.post(datas);

      res.status(status).json(error ? error : data);
    } catch (e) {
      res.status(500).json(e);
    }
  },
  signin: async (req, res) => {
    try {
      const datas = req.body;

      const { data, status, error } = await userServices.signin(
        datas,
        req.session
      );

      error ? res.status(status).json(error) : res.status(status).json(data);
    } catch (e) {
      res.status(500).json(e);
    }
  },
};

module.exports = userController;
