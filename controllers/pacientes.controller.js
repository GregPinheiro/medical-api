const PacientesServices = require("../services/pacientes.services");

const pacientesController = {
  findOne: async (req, res) => {
    const { id } = req.params;

    const { data, status, error } = await PacientesServices.findOne(id);

    res.status(status).json(error ? error : data);
  },
  findAll: async (req, res) => {
    const { data, status, error } = await PacientesServices.findAll();

    res.status(status).json(error ? error : data);
  },
  create: async (req, res) => {
    const body = req.body;

    const { data, status, error } = await PacientesServices.create(body);

    res.status(status).json(error ? error : data);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const body = req.body;

    const { data, status, error } = await PacientesServices.update(id, body);

    res.status(status).json(error ? error : data);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    const { data, status, error } = await PacientesServices.delete(id);

    res.status(status).json(error ? error : data);
  },
};

module.exports = pacientesController;
