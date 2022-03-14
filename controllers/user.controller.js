const express = require('express')

const router = express.Router();

const User = require("../models/user.models")

// console.log(User)

const crudController = require("./crud.controllers");

router.post('/', crudController(User).post);

router.get('/',crudController(User).get);

router.patch('/:id',crudController(User).update);

router.delete('/:id',crudController(User).dele);

module.exports = router;