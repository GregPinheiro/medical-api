const { ReembolsoStatus } = require("../models");

const reembolsoStatusService = {
  findAll: async () => {
    let status = null;
    let error = null;
    let data = {};

    try {
      const response = await ReembolsoStatus.findAll();

      status = response ? 200 : 204;
      data = response ? response : "Consulta não encontrada";
    } catch (e) {
      status = 500;
      error = e;
    } finally {
      return { data, status, error };
    }
  },
};

module.exports = reembolsoStatusService;
