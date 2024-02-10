const mongoose =require("mongoose")
const resumeSchema=new mongoose.Schema(
    {
        userid:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"resume"
        },
        post:{
            type:String,
            required:true,
        },
        postdate:{
            type:Date,
            default:Date.now
        }

    }
)
module.exports=mongoose.model("post",resumeSchema)
