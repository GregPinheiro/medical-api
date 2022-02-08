const {
  Reembolsos,
  Pacientes,
  Cirurgias,
  Medicos,
  Hospitais,
  Convenios,
  Fornecedores,
  ReembolsoStatus,
} = require("../models");

const reembolsosService = {
  findOne: async (id) => {
    let status = null;
    let error = null;
    let data = {};

    try {
      const response = await Reembolsos.findOne({
        where: { id },
        include: [
          {
            model: Pacientes,
            as: "paciente",
          },
          {
            model: Cirurgias,
            as: "cirurgia",
          },
          {
            model: Medicos,
            as: "medico",
          },
          {
            model: Hospitais,
            as: "hospital",
          },
          {
            model: Convenios,
            as: "convenio",
          },
          {
            model: Fornecedores,
            as: "fornecedor",
          },
          {
            model: ReembolsoStatus,
            as: "statusDetail",
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
      const response = await Reembolsos.findAll({
        include: [
          {
            model: Pacientes,
            as: "paciente",
          },
          {
            model: Cirurgias,
            as: "cirurgia",
          },
          {
            model: Medicos,
            as: "medico",
          },
          {
            model: Hospitais,
            as: "hospital",
          },
          {
            model: Convenios,
            as: "convenio",
          },
          {
            model: Fornecedores,
            as: "fornecedor",
          },
          {
            model: ReembolsoStatus,
            as: "statusDetail",
          },
        ],
      });

      status = response?.length > 0 ? 200 : 204;
      data = response?.length ? response : "Consulta não encontrada";
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
      const response = await Reembolsos.create(datas);

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
      const response = await Reembolsos.update(datas, {
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
      const response = await Reembolsos.destroy({
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

module.exports = reembolsosService;
