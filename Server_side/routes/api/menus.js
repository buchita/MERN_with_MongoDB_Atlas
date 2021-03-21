const express = require('express');
const router = express.Router();

const Menu = require('../../models/Menu');


router.get('/', (req, res) => {
    Menu.find()
      .then(menus => res.json(menus))
      .catch(err => res.status(404).json({ nomenusfound: 'No Menus found' }));
  });


  router.get('/:id', (req, res) => {
    Menu.findById(req.params.id)
      .then(menu => res.json(menu))
      .catch(err => res.status(404).json({ nomenufound: 'No menu found' }));
  });

  module.exports = router;
