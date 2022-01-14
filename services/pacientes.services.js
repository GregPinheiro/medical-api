const {
  Pacientes,
  Medicos,
  Hospitais,
  MedicoHospitais,
  Convenios,
} = require("../models");

const PacientesServices = {
  findOne: async (id) => {
    let status = null;
    let error = null;
    let data = {};

    try {
      const response = await Pacientes.findOne({
        where: { id },
        include: [
          {
            model: Medicos,
            as: "medico",
            attributes: ["id", "nome", "especialidade", "CRO_CRM"],
            include: [
              {
                as: "hospitais",
                model: Hospitais,
                through: { model: MedicoHospitais },
                attributes: ["id", "nome", "unidade", "CNPJ"],
              },
            ],
          },
          {
            model: Convenios,
            as: "convenio",
            attributes: ["id", "nome", "plano", "acomodacao"],
            include: [
              {
                as: "hospitais",
                model: Hospitais,
                attributes: ["id", "nome", "unidade", "CNPJ"],
              },
            ],
          },
        ],
      });

      if (response) {
        status = 200;
        data = response;
      } else {
        status = 404;
        data = "Item não encontrado";
      }
    } catch (e) {
      status = 500;
      error = e;
    }

    return { data, status, error };
  },
  findAll: async () => {
    let status = null;
    let error = null;
    let data = {};

    try {
      const response = await Pacientes.findAll();

      status = response ? 200 : 204;
      data = response ? response : "Itens nao encontrados";
    } catch (e) {
      status = 500;
      error = e;
    }

    return { data, status, error };
  },
  create: async (datas) => {
    let status = null;
    let error = null;
    let data = {};

    try {
      const response = await Pacientes.create(datas);

      status = 201;
      data = response;
    } catch (e) {
      status = 500;
      error = e;
    }

    return { data, status, error };
  },
  update: async (id, datas) => {
    let status = null;
    let error = null;
    let data = {};

    try {
      const response = await Pacientes.update(datas, { where: { id } });

      if (response == 1) {
        status = 202;
        data = response;
      } else {
        status = 404;
        data = "Item não encontrado";
      }
    } catch (e) {
      status = 500;
      error = e;
    }

    return { data, status, error };
  },
  delete: async (id) => {
    let status = null;
    let error = null;
    let data = {};

    try {
      const response = await Pacientes.destroy({ where: { id } });

      if (response == 1) {
        status = 202;
        data = "Item deletado com sucesso";
      } else {
        status = 404;
        data = "item não encontrados";
      }
    } catch (e) {
      status = 500;
      error = e;
    }

    return { data, status, error };
  },
};

module.exports = PacientesServices;
