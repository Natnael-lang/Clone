const mongoose=require("mongoose");
const newSchema=new mongoose.Schema({
    name:String,
    _id:Number,
    section:{type:String,
        enum:["1","2","3"]}
})
const Identity=mongoose.model("Identity",newSchema);
module.exports=Identity;