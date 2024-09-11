const Parcel=require("../models/Parcel")

//create a parcel
 const createParcel=async (req,res)=>{

     const newParcel= Parcel(req.body);
    try {
        const parcel=await newParcel.save();
        res.status(201).json(parcel);


    } catch (error) {
        res.status(500).json(error); 
        
    }
}

//get all parcels

 const getAllParcels=async (req,res)=>{
    
    try {
        const parcel=await Parcel.find().sort({createAt:-1});
        res.status(200).json(parcel)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}

//update the parcel

 const updateParcel=async (req,res)=>{

    try {
        const parcel=await Parcel.findById(req.params.id)
        res.status(201).json(parcel); 
    } catch (error) {
        res.status(500).json(error)
    }
}

//get one parcel

 const getOneParcel=async(req,res)=>{
    try {
        const parcel=await Parcel.findById(req.params.id);
        res.status(200).json(parcel);
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}

//get users parcel

 const getUsersParcel=async (req,res)=>{
    try {
        const parcel=await Parcel.find({senderemail:req.body.email}).sort({createdAt:-1})
        res.status(200).json(parcel);

    } catch (error) {

        res.status(500).json(error);
    }
}

//delete a parcel

 const deleteParcel=async (req,res)=>{

    try {
        await Parcel.findByIdAndDelete(req.params.id);
        res.status(201).json("parcel deleted sucessfully");
    } catch (error) {
        res.status(500).json(error)
        
    }
}

module.exports={createParcel,getAllParcels,updateParcel,getOneParcel,getUsersParcel,deleteParcel};