const express=require("express")
const router=express.Router()
const resumemodel=require("./resumemodel")

router.post("/add",async(req,res)=>{
    let data=req.body
    let post=new resumemodel(data)
    let result=await post.save()
    res.json({
        status:"Success"
    })
    res.send("success")
})

router.get("/viewall",async(req,res)=>{
   let result=await resumemodel.find()
    .populate("userid","name email gender")
    .exec()
    res.json(result)
})

module.exports=router
