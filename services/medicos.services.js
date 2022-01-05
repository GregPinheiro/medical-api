const { Medicos, Hospitais, MedicoHospitais } = require("../models");

const MedicosServices = {
  findOne: async (id) => {
    let status = null;
    let error = null;
    let data = {};

    try {
      const response = await Medicos.findOne({
        where: { id },
        include: [
          {
            as: "hospitais",
            model: Hospitais,
            through: { model: MedicoHospitais },
            attributes: ["id", "nome", "unidade", "CNPJ"],
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
      const response = await Medicos.findAll();

      if (response.length > 0) {
        status = 200;
        data = response;
      } else {
        status = 204;
        data = "Itens não encontrados";
      }
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
      const response = await Medicos.create(datas);

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
      const response = await Medicos.update(datas, { where: { id } });

      if (response == 1) {
        status = 202;
        data = response;
      } else {
        status = 204;
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
      const response = await Medicos.destroy({ where: { id } });

      if (response == 1) {
        status = 202;
        data = "Item deletado com sucesso";
      } else {
        status = 204;
        data = "item não encontrados";
      }
    } catch (e) {
      status = 500;
      error = e;
    }

    return { data, status, error };
  },
  setHospitais: async (medicoId, datas) => {
    let status = null;
    let error = null;
    let data = [];

    try {
      for (const item in datas) {
        data = [
          ...data,
          { medicoId: Number(medicoId), hospitalId: Number(datas[item]) },
        ];
      }

      await MedicoHospitais.destroy({
        where: { medicoId },
      });

      await MedicoHospitais.bulkCreate(data);

      status = 201;
    } catch (e) {
      status = 500;
      error = e;
    }

    return { data, status, error };
  },
};

module.exports = MedicosServices;
