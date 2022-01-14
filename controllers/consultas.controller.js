const consultasService = require("../services/consultas.service");

const consultasController = {
  findOne: async (req, res) => {
    const { id } = req.params;

    const { data, status, error } = await consultasService.findOne(id);

    res.status(status).json(error ? error : data);
  },
  findAll: async (req, res) => {
    const { data, status, error } = await consultasService.findAll();

    res.status(status).json(error ? error : data);
  },
  create: async (req, res) => {
    const body = req.body;

    const { data, status, error } = await consultasService.create(body);

    res.status(status).json(error ? error : data);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const body = req.body;

    const { data, status, error } = await consultasService.update(id, body);

    res.status(status).json(error ? error : data);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    const { data, status, error } = await consultasService.delete(id);

    res.status(status).json(error ? error : data);
  },
};

module.exports = consultasController;
