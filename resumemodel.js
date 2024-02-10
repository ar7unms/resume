const mongoose =require("mongoose")
const resumeSchema=mongoose.Schema(
    {
        userid:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"blog"
        },
        post:{
            type:String,
            required:true
        },
        postdate:{
            type:Date,
            default:Date.now
        }

    }
)
exports=mongoose.model("post",resumeSchema)
