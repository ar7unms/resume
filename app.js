const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const userrouter=require("./userrouter")
//const resumerouter=require("./postrouter")

const app=express()

app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://msarjun077:Arjun2000@cluster0.nmwlgoz.mongodb.net/resumedb?retryWrites=true&w=majority",
{
    useNewUrlParser:true
})
app.use("/api/user",userrouter)
app.use("/api/resume",resumemodel)


app.listen(3007,()=>{
    console.log("server running")
})

