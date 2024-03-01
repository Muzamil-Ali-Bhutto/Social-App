const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
capttion:String,
image:{
    public_id:String,
    url:String,
},

owner :{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
},

createdAt:{
    type:Date,
    default: DataTransfer.now,
},

likes:[
    {
        
        type : mongoose.Schema.Types.ObjectId,
        ref:"user", 
       
    },
],

comment: [
    {
        user: {
           type : mongoose.Schema.Types.ObjectId,
           ref:"user", 
        },
        comment:{
            type: String,
            required: true,
        }
    },
],



});

module.exports = mongoose.model("post", postSchema);