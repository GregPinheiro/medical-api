const reembolsosService = require("../services/reembolsos.service");

const reembolsosController = {
  findOne: async (req, res) => {
    const { id } = req.params;

    const { data, status, error } = await reembolsosService.findOne(id);

    res.status(status).json(error ? error : data);
  },
  findAll: async (req, res) => {
    const { data, status, error } = await reembolsosService.findAll();

    res.status(status).json(error ? error : data);
  },
  create: async (req, res) => {
    const body = req.body;

    const { data, status, error } = await reembolsosService.create(body);

    res.status(status).json(error ? error : data);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const body = req.body;

    const { data, status, error } = await reembolsosService.update(id, body);

    res.status(status).json(error ? error : data);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    const { data, status, error } = await reembolsosService.delete(id);

    res.status(status).json(error ? error : data);
  },
};

module.exports = reembolsosController;
