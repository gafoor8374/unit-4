const express = require('express');

// below line will taken form documention of express-validation 
const { body, validationResult } = require('express-validator');

const User = require('../models/user.models');

const router = express.Router();

router.post("/",
body("first_name")
.trim()
.not()
.isEmpty()
.withMessage("First Name cannot be empty")
.isLength({ min: 4 })
.withMessage("First Name must be at least 4 characters"),

body("age")
    .not()
    .isEmpty()
    .withMessage("Age cannot be empty")
    .isNumeric()
    .withMessage("Age must be a number between 1 and 120")
    .custom((val) => {
      if (val < 1 || val > 100) {
        throw new Error("Incorrect age provided");
      }
      return true;
    }),

    body("pincode")
    .not()
    .isEmpty()
    .withMessage("Pincode cannot be empty")
    .isNumeric()
    .isLength({ min:6})
    .withMessage("pincode must should be 6 characters") ,

body("last_name") 
.not() 
.isEmpty()
.withMessage("last Name cannot be empty")
.isLength({ min: 3})
.withMessage("last Name must be at least 4 characters"),
body("email").isEmail().custom(async (value)=>{
    const user = await User.findOne({ email:value});
    if(user){
        throw new Error("Email is already taken")
    }
    return true;
}),
 body("gender")
 .not()
 .isEmpty()
 .withMessage("gender must  at least be")
 .isLength({min:4})
 .withMessage("gender must be at least 4 characters"), 
async (req, res) => {
    try {
        console.log(body("first_name"));

        //this part will copy the documentation from the express-validator
        const errors =validationResult(req);

        console.log(errors); 

        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
          }

        const user = await User.create(req.body);

        return res.status(201).send(user);
    }catch(err) {
        return res.status(500).send({message: err.message});
    }
}); 
module.exports = router;

