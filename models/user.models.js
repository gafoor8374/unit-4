const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName:{type: 'string', required: true},
    middleName:{type: 'string', required: true},
    lastName:{type: 'string', required: true},
    age:{type: 'number', required: true},
    email:{type: 'string', required: true,unique: true},
    address:{type: 'string', required: true},
    gender:{type: 'string', required: true},
    createdAt:{type: 'string', required:true},
    updatedAt:{type: 'string', required: true},
},{
versionKey:false,
timestamps:true
})

const User =mongoose.model('User',userSchema);

module.exports =User







