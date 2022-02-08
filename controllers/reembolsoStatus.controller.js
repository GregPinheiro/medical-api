const reembolsoStatusService = require("../services/reembolsoStatus.service");

const reembolsoStatusController = {
  findAll: async (req, res) => {
    const { data, status, error } = await reembolsoStatusService.findAll();

    res.status(status).json(error ? error : data);
  },
};

module.exports = reembolsoStatusController;
