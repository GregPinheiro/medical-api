const userServices = require("../services/user.services");

const userController = {
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
