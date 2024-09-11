const mongoose=require("mongoose");

const ParcelSchema=mongoose.Schema({

    from:{type:String,require:true},
    to:{type:String,require:true},
    sendername:{type:String,require:true},
    recipientname:{type:String,require:true},
    senderemial:{type:String,require:true},
    recipientemail:{type:Number,require:true}, 
    weight:{type:Number,require:true},
    cost:{type:Number,require:true},
    weight:{type:Number,require:true},
    note:{type:String},
    feedback:{type:String},
    status:{type:Number,default:0},

},{
    timestamp:true
})

module.exports=mongoose.model("Parcel",ParcelSchema)