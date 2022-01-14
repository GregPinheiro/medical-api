const { Consultas, Pacientes, Medicos, Hospitais } = require("../models");

const consultasService = {
  findOne: async (id) => {
    let status = null;
    let error = null;
    let data = {};

    try {
      const response = await Consultas.findOne({
        where: { id },
        include: [
          {
            model: Pacientes,
            as: "paciente",
          },
          {
            model: Medicos,
            as: "medico",
          },
          {
            model: Hospitais,
            as: "hospital",
          },
        ],
      });

      status = response ? 200 : 204;
      data = response ? response : "Consulta não encontrada";
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
      const response = await Consultas.findAll({
        include: [
          {
            model: Pacientes,
            as: "paciente",
          },
          {
            model: Medicos,
            as: "medico",
          },
          {
            model: Hospitais,
            as: "hospital",
          },
        ],
      });

      status = response ? 200 : 204;
      data = response ? response : "Consulta não encontrada";
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
      const response = await Consultas.create(datas);

      status = response ? 201 : 400;
      data = response ? response : "Não foi possível criar ";
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
      const response = await Consultas.update(datas, {
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
      const response = await Consultas.destroy({
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

module.exports = consultasService;
