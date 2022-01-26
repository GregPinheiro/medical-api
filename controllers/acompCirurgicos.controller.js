const acompCirurgicosService = require("../services/acompCirurgicos.service");

const acompCirurgicosController = {
  findOne: async (req, res) => {
    const { id } = req.params;

    const { data, status, error } = await acompCirurgicosService.findOne(id);

    res.status(status).json(error ? error : data);
  },
  findAll: async (req, res) => {
    const { data, status, error } = await acompCirurgicosService.findAll();

    res.status(status).json(error ? error : data);
  },
  create: async (req, res) => {
    const body = req.body;

    const { data, status, error } = await acompCirurgicosService.create(body);

    res.status(status).json(error ? error : data);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const body = req.body;

    const { data, status, error } = await acompCirurgicosService.update(
      id,
      body
    );

    res.status(status).json(error ? error : data);
  },
  delete: async (req, res) => {
    const { id } = req.params;

    const { data, status, error } = await acompCirurgicosService.delete(id);

    res.status(status).json(error ? error : data);
  },
};

module.exports = acompCirurgicosController;
