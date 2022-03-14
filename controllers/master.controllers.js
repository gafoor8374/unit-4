const express = require('express')

const router = express.Router();

const Master = require("../models/master.model")

// console.log(User)

const crudController = require("./crud.controllers");

router.post('/', crudController(Master).post);

router.get('/',crudController(Master).get);

router.patch('/:id',crudController(Master).update);

router.delete('/:id',crudController(Master).dele);

module.exports = router;