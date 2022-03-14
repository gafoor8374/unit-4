const mongoose = require('mongoose');

const savingSchema = new mongoose.Schema({
account_number:{type:"Number",required:true},
balance:{type:"Number",required:true},
interestRate:{type:"Number",required:true},
createdAt:{type:"Date",required:true},
updatedAt:{type:"Date",required:true}
},{
    versionKey:false,
    timestamps:true
})

const Saving = mongoose.model("Saving", savingSchema);

module.exports =Saving;