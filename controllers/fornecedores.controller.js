const FornecedoresServices = require("../services/fornecedores.services");

const fornecedoresController = {
  findOne: async (req, res) => {
    const { id } = req.params;

    const { data, status, error } = await FornecedoresServices.findOne(id);

    res.status(status).json(error ? error : data);
  },
  findAll: async (req, res) => {
    const { data, status, error } = await FornecedoresServices.findAll();

    res.status(status).json(error ? error : data);
  },
  create: async (req, res) => {
    const body = req.body;

    const { data, status, error } = await FornecedoresServices.create(body);

    res.status(status).json(error ? error : data);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const body = req.body;

    const { data, status, error } = await FornecedoresServices.update(id, body);

    res.status(status).json(error ? error : data);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    const { data, status, error } = await FornecedoresServices.delete(id);

    res.status(status).json(error ? error : data);
  },
};

module.exports = fornecedoresController;
