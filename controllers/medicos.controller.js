const MedicosServices = require("../services/medicos.services");

const medicosController = {
  findOne: async (req, res) => {
    const { id } = req.params;

    const { data, status, error } = await MedicosServices.findOne(id);

    res.status(status).json(error ? error : data);
  },
  findAll: async (req, res) => {
    const { data, status, error } = await MedicosServices.findAll();

    res.status(status).json(error ? error : data);
  },
  create: async (req, res) => {
    const body = req.body;

    const { data, status, error } = await MedicosServices.create(body);

    res.status(status).json(error ? error : data);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const body = req.body;

    const { data, status, error } = await MedicosServices.update(id, body);

    res.status(status).json(error ? error : data);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    const { data, status, error } = await MedicosServices.delete(id);

    res.status(status).json(error ? error : data);
  },
};

module.exports = medicosController;
