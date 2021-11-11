const ConveniosServices = require("../services/convenios.services");

const conveniosController = {
  findOne: async (req, res) => {
    const { id } = req.params;

    const { data, status, error } = await ConveniosServices.findOne(id);

    res.status(status).json(error ? error : data);
  },
  findAll: async (req, res) => {
    const { data, status, error } = await ConveniosServices.findAll();

    res.status(status).json(error ? error : data);
  },
  create: async (req, res) => {
    const body = req.body;

    const { data, status, error } = await ConveniosServices.create(body);

    res.status(status).json(error ? error : data);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const body = req.body;

    const { data, status, error } = await ConveniosServices.update(id, body);

    res.status(status).json(error ? error : data);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    const { data, status, error } = await ConveniosServices.delete(id);

    res.status(status).json(error ? error : data);
  },
};

module.exports = conveniosController;
