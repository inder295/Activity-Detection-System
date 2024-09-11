const User=require("../models/user");

//deleting all users

 const deleteUser=async(req,res)=>{

    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(201).json("User has been deleted successfully");
    } catch (error) {
        res.status(500).json(error)
    }

}





//getting all users

 const getAllUsers=async (req,res)=>{

    console.log("all users")
    try {
        const users=await  User.find().sort({createdAt:-1});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json(error);
    }

}

module.exports={deleteUser,getAllUsers}