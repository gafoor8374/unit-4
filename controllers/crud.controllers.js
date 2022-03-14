const post =(model)=>async(req,res)=>{
    const item =await model.create(req.body);

    return res.status(201).json({data:item});
}

const get =(model)=>async(req,res)=>{
    const item = await model.find().lean().exec();

    return res.status(201).json({data:item});
}

const update =(model)=>async(req,res)=>{
    const item = await model.findByIdAndUpdate(req.params.id,re.body,{new:true}).lean().exec();

    return res.status(201).json({data:item});
}

const dele = (model)=>async(req,res)=>{
    const item = await model.findByIdAndDelete(req.params.id)

    return res.status(201).json({data:item});
}

module.exports =(model)=>({
    post:post(model),
    get:get(model),
    update: update(model),
    dele: dele(model)
})