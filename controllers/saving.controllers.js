const express = require('express')

const router = express.Router();

const Saving = require("../models/saving.model")

// console.log(User)

const crudController = require("./crud.controllers");

router.post('/', crudController(Saving).post);

router.get('/',crudController(Saving).get);

router.patch('/:id',crudController(Saving).update);

router.delete('/:id',crudController(Saving).dele);

module.exports = router;