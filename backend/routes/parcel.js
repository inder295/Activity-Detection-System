const express=require("express");
const router=express.Router();
const {createParcel, getAllParcels, updateParcel, getOneParcel, getUsersParcel, deleteParcel}=require("../controllers/parcel");
const { verifyToken, verifyTokenAndAuthorization } = require("../middlewares/verifyToken");

//ADD PARCEL

router.post("/",createParcel)

//get all parcels
router.get("/",verifyTokenAndAuthorization,getAllParcels)

//update parcel
router.put("/:id",updateParcel)

//get one parcel
router.get("/find/:id",getOneParcel)

//get user parcels
router.get("/me",getUsersParcel)

//delete router
router.delete("/:id",deleteParcel)

module.exports=router;