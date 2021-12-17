const HospitaisServices = require("../services/hospitais.services");

const hospitaisController = {
  findOne: async (req, res) => {
    const { id } = req.params;

    const { data, status, error } = await HospitaisServices.findOne(id);

    res.status(status).json(error ? error : data);
  },
  findAll: async (req, res) => {
    const { data, status, error } = await HospitaisServices.findAll();

    res.status(status).json(error ? error : data);
  },
  create: async (req, res) => {
    const body = req.body;

    const { data, status, error } = await HospitaisServices.create(body);

    res.status(status).json(error ? error : data);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const body = req.body;

    const { data, status, error } = await HospitaisServices.update(id, body);

    res.status(status).json(error ? error : data);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    const { data, status, error } = await HospitaisServices.delete(id);

    res.status(status).json(error ? error : data);
  },
};

module.exports = hospitaisController;
