const { Fornecedores } = require("../models");

const FornecedoresServices = {
  findOne: async (id) => {
    let status = null;
    let error = null;
    let data = {};

    try {
      const response = await Fornecedores.findOne({ where: { id } });

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
      const response = await Fornecedores.findAll();

      if (response.length > 0) {
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
      const response = await Fornecedores.create(datas);

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
      const response = await Fornecedores.update(datas, { where: { id } });

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
      const response = await Fornecedores.destroy({ where: { id } });

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

module.exports = FornecedoresServices;
