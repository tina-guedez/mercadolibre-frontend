// implementar todos los casos de uso - logica de negocio

const axios = require('axios');

const searchItems = async (query) => {
  const limit = 4;
  return axios.get(
    `https://api.mercadolibre.com/sites/MLA/search?q=:${query}&limit=${limit}`,
  );
};

const getItem = async (id) => { return axios.get(`https://api.mercadolibre.com/items/${id}`); };

const getItemDescription = async (id) => { return axios.get(`https://api.mercadolibre.com/items/${id}/description`); };

module.exports = { searchItems, getItem, getItemDescription };
