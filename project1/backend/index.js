const express=require("express");
const mongoose=require("mongoose");
const Identity=require("./model/closeModel.js")
const app=express();
const urip="QrUuvniWha4kfLAS";
const uri="mongodb+srv://natnaelmessay477:QrUuvniWha4kfLAS@cluster0.t9ackly.mongodb.net/loc"
mongoose.connect(uri).then(()=>{
    console.log("db connected")
}).catch((err)=>{
    console.log(err)
})
async function j(){
    const use =Identity.create([{"_id": 205,
    "name": "natn",
    "section": "1",
    "__v": 0
  },{"_id": 206,
  "name": "natn",
  "section": "2",
  "__v": 0},{"_id": 207,
  "name": "nat",
  "section": "3",
  "__v": 0
  },{"_id": 208,
  "name": "natn",
  "section": "3",
  "__v": 0
  }
  ])
}

//use.save();
/*async function j(){
    let n=await Identity.findOne({name:"natn"})
    console.log(n)
    n.section="87"
    

    await n.save()
}*/
j()


app.get("/user",(req,res)=>{
    res.json({name:"natnael"})
})




app.listen(3000,()=>{
    console.log("server listen")
})