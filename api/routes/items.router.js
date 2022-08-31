const express = require('express');
const { searchItems, getItem, getItemDescription } = require('../services/item.services');

const router = express.Router();

const author = {
  name: 'Valentina',
  lastname: 'Guedez',
};

const categoriesItem = (filters) => {
  if (!filters) return [];
  const category = filters.find((s) => { return s.id === 'category'; });
  const categoryValues = category?.values?.length > 0 ? category.values[0] : [];
  const pathCategories = categoryValues?.path_from_root?.length > 0 ? categoryValues.path_from_root : [];
  const pathFromRoot = pathCategories.length > 0 ? pathCategories.map((s) => { return s.name; }) : [];
  return pathFromRoot || [];
};

router.get('/', async (req, res) => {
  const { q } = req.query;
  const response = await searchItems(q);
  const result = {
    author,
    categories: categoriesItem(response?.data?.filters),
    items: response?.data?.results?.map((item) => {
      return {
        id: item.id,
        title: item.title,
        price: {
          currency: item.currency_id,
          amount: item.price,
          decimals: 2,
        },
        picture: item.thumbnail,
        condition: item.condition,
        free_shipping: item.shipping.free_shipping,
        address: item.address.state_name,
      };
    }),
  };
  res.send(result);
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  let item;
  let itemDescription;
  await Promise.all([
    getItem(id),
    getItemDescription(id),
  ]).then((values) => {
    [item, itemDescription] = values;
  });
  const result = {
    author,
    item: {
      id: item.data.id,
      title: item.data.title,
      price: {
        currency: item.data.currency_id,
        amount: item.data.price,
        decimals: 2,
      },
      picture: item.data.pictures?.length > 0 && item.data.pictures[0].url,
      condition: item.data.condition,
      free_shipping: item.data.shipping?.free_shipping,
      sold_quantity: item.data.sold_quantity,
      description: itemDescription.data.plain_text,
    },
  };
  res.send(result);
});

module.exports = router;
