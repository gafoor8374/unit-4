const express = require('express')

const router = express.Router();

const Fixed = require("../models/fixed.model")

// console.log(Fixed)

const crudController = require("./crud.controllers");

router.post('/', crudController(Fixed).post);

router.get('/',crudController(Fixed).get);

router.patch('/:id',crudController(Fixed).update);

router.delete('/:id',crudController(Fixed).dele);

module.exports = router;