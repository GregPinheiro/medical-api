const { Hospitais, Convenios, HospitalConvenios } = require("../models");

const HospitaisServices = {
  findOne: async (id) => {
    let status = null;
    let error = null;
    let data = {};

    try {
      const response = await Hospitais.findOne({
        where: { id },
        include: [
          {
            as: "convenios",
            model: Convenios,
            attributes: ["id", "nome", "plano", "acomodacao"],
          },
        ],
      });

      if (response) {
        status = 200;
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
  findAll: async () => {
    let status = null;
    let error = null;
    let data = {};

    try {
      const response = await Hospitais.findAll();

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
      const response = await Hospitais.create(datas);

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
      const response = await Hospitais.update(datas, { where: { id } });

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
      const response = await Hospitais.destroy({ where: { id } });

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
  setConvenios: async (hospitalId, datas) => {
    let status = null;
    let error = null;
    let data = [];

    try {
      for (const item in datas) {
        data = [
          ...data,
          { hospitalId: Number(hospitalId), convenioId: Number(datas[item]) },
        ];
      }

      await HospitalConvenios.destroy({
        where: { hospitalId },
      });

      await HospitalConvenios.bulkCreate(data);

      status = 201;
    } catch (e) {
      status = 500;
      error = e;
    } finally {
      return { data, status, error };
    }
  },
};

module.exports = HospitaisServices;
