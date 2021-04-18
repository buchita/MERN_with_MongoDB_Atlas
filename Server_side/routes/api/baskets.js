const express = require('express');
const router = express.Router();

const Basket = require('../../models/basket');


router.get('/basket', (req, res) => {
    Basket.find()
      .then(baskets => res.json(baskets))
      .catch(err => res.status(404).json({ nomenusfound: 'No items in the basket' }));
  });


  router.post('/basket/add', (req, res) => {
    const name = req.body.name;
    const quantity = Number(req.body.quantity);
    const price = Number(req.body.price);
  
    const newItem = new Item({
      name,
      quantity,
      price
    });
  
    newItem.save()
    .then(() => res.json('Item added!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

  module.exports = router;
