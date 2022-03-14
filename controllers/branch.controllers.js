const express = require('express')

const router = express.Router();

const Branch = require("../models/Branch.model")

// console.log(User)

const crudController = require("./crud.controllers");

router.post('/', crudController(Branch).post);

router.get('/',crudController(Branch).get);

router.patch('/:id',crudController(Branch).update);

router.delete('/:id',crudController(Branch).dele);

module.exports = router;