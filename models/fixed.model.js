const mongoose=require('mongoose');

const fixedSchema = new mongoose.Schema({
    account_number:{type:Number,required:true,unique:true},
    balance:{type:Number,required:true},
    interestRate:{type:Number,required:true},
    startDate:{type:Date,required:true},
    maturityDate:{type:"Date",required:true},
    createdAt:{type:"Date",required:true},
    updatedAt:{type:"Date",required:true}
},{
    versionKey:false,
    timestamps:true
})

const Fixed = mongoose.model("Fixed", fixedSchema);

module.exports =Fixed;





// FixedAccount

// account_number ( required and should be unique)
// balance ( required )
// interestRate ( required )
// startDate ( required )
// maturityDate (required )
// createdAt (required)
// updatedAt (required)