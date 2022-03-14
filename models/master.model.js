const mongoose = require('mongoose');

const masterSchema = new mongoose.Schema({
    balance:{type:"Number",required:true},
    createdAt:{type:"Date",required:true},
    updatedAt:{type:"Date",required:true},
},{
    versionKey:false,
    timestamps:true
})




const Master = mongoose.model("Master", masterSchema);

module.exports =Master;
// SavingsAccount