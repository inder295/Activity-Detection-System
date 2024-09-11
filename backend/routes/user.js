const express=require("express");
const { deleteUser, getAllUsers } = require("../controllers/user");
const router=express.Router();

//deleting user
router.delete("/:id",deleteUser)

//get All users

router.get("/",getAllUsers)




module.exports=router;
