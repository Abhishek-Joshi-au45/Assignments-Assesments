const Item = require('../models/item');
const { client } = require('../config/elasticsearch');

// Function to add an item to Elasticsearch
const addItemToElasticsearch = async (item) => {
  try {
    const response = await client.index({
      index: 'items',
      body: item,
    });
    console.log('Item added to Elasticsearch:', response);
  } catch (error) {
    console.error('Error adding item to Elasticsearch:', error);
  }
};

// Function to search for items in Elasticsearch
const searchItems = async (req, res) => {
  const searchTerm = req.query.search;

  try {
    const { body } = await client.search({
      index: 'items',
      body: {
        query: {
          match: {
            itemName: searchTerm,
          },
        },
      },
    });

    const items = body.hits.hits.map((hit) => hit._source);
    res.json({ items });
  } catch (error) {
    console.error('Error searching for items:', error);
    res.status(500).json({ error: 'An error occurred while searching for items' });
  }
};

module.exports = { addItemToElasticsearch, searchItems };
