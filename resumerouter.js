const express=require("express")
const router=express.Router()
const resumemodel=require("./resumemode")

router.post("/add",async(res,req)=>{
    let data=req.body
    let post=new resumemodel(data)
    res.json({
        status:"Success"
    })
    res.send("success")
})

router.get("/viewall",async(req,res)=>{
    let result=await resumemodel.find()
    .populate()
    .exec()
})

