const {
  AcompCirurgicos,
  Pacientes,
  Convenios,
  Cirurgias,
  Hospitais,
} = require("../models");

const acompCirurgicosService = {
  findOne: async (id) => {
    let status = null;
    let error = null;
    let data = {};

    try {
      const response = await AcompCirurgicos.findOne({
        where: { id },
        include: [
          {
            model: Pacientes,
            as: "paciente",
          },
          {
            model: Convenios,
            as: "convenio",
          },
          {
            model: Cirurgias,
            as: "cirurgia",
          },
          {
            model: Hospitais,
            as: "hospital",
          },
        ],
      });

      status = response ? 200 : 204;
      data = response ? response : "Procedimento Cirurgico não encontrada";
    } catch (e) {
      status = 500;
      error = e;
    } finally {
      return { data, status, error };
    }
  },
  findAll: async () => {
    let status = null;
    let error = null;
    let data = {};

    try {
      const response = await AcompCirurgicos.findAll({
        include: [
          {
            model: Pacientes,
            as: "paciente",
          },
          {
            model: Convenios,
            as: "convenio",
          },
          {
            model: Cirurgias,
            as: "cirurgia",
          },
          {
            model: Hospitais,
            as: "hospital",
          },
        ],
      });

      status = response ? 200 : 204;
      data = response
        ? response
        : "Nenhum procedimento cirurgico não encontrada";
    } catch (e) {
      status = 500;
      error = e;
    } finally {
      return { data, status, error };
    }
  },
  create: async (datas) => {
    let status = null;
    let error = null;
    let data = {};

    try {
      const response = await AcompCirurgicos.create(datas);

      status = response ? 201 : 400;
      data = response ? response : "Não foi possível criar";
    } catch (e) {
      status = 500;
      error = e;
    } finally {
      return { data, status, error };
    }
  },
  update: async (id, datas) => {
    let status = null;
    let error = null;
    let data = {};

    try {
      const response = await AcompCirurgicos.update(datas, {
        where: { id },
      });

      status = response == 1 ? 202 : 204;
      data = response == 1 ? response : "Item não encontrado";
    } catch (e) {
      status = 500;
      error = e;
    } finally {
      return { data, status, error };
    }
  },
  delete: async (id) => {
    let status = null;
    let error = null;
    let data = {};

    try {
      const response = await AcompCirurgicos.destroy({
        where: { id },
      });

      status = response == 1 ? 202 : 204;
      data = response == 1 ? "Item deletado com sucesso" : "Item não deletado";
    } catch (e) {
      status = 500;
      error = e;
    } finally {
      return { data, status, error };
    }
  },
};

module.exports = acompCirurgicosService;
