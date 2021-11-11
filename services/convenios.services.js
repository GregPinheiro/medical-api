const { Convenios } = require("../models");

const ConveniosServices = {
  findOne: async (id) => {
    let status = null;
    let error = null;
    let data = {};

    try {
      const response = await Convenios.findOne({ where: { id } });

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
      const response = await Convenios.findAll();

      if (response) {
        status = 200;
        data = response;
      } else {
        status = 404;
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
      const response = await Convenios.create(datas);

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
      const response = await Convenios.update(datas, { where: { id } });

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
      const response = await Convenios.destroy({ where: { id } });

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

module.exports = ConveniosServices;
