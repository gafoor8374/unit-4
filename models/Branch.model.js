const mongoose = require('mongoose');

const branchSchema = new mongoose.Schema({
    name:{type: 'string',required:true},
    address:{type: 'string',required:true},
    IFSC:{type: 'string',required:true},
    MICR:{type: 'string',required:true},
    createdAt:{type: 'string',required:true},
    updatedAt:{type: 'string',required:true},
},{
    versionKey:false,
    timestamps:{type: 'string',required:true},
})

const Branch = mongoose.model("Branch", branchSchema);

module.exports =Branch;


