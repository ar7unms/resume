const express=require("express")
const router=express.Router()
const user=require("./usermodel")
const bcrypt =require("bcryptjs")

hashPasswordGenerator=async(password)=>{
    const salt=await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)

}

router.post("/signup",async(req,res)=>{
let {data} = {"data": req.body}
let password=data.password
const hashedPassword=await hashPasswordGenerator(password)
data.password=hashedPassword
let resume = new user(data)
let result= await resume.save()
res.json({
     status:"success"    
     })
    })


router.post("/signin",async(req,res)=>{
    let input=req.body
    let email=req.body.email
    let data=await user.findOne({"email":email})
    if(!data){
        res.json({
            status:"invalid user"
        })
    }
    console.log(data)
    let dbpassword=data.password
    let inputpassword=req.body.password
    const match= await bcrypt.compare(inputpassword,dbpassword)
    if(!match){
        res.json({
            status:"invalid password"
        })
    }
    res.json({
        status:"success"
     })
})  
module.exports=router