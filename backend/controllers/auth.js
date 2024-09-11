const CryptoJs=require('crypto-js');
const jwt=require('jsonwebtoken');
const User=require("../models/user")
const dotenv=require("dotenv");

dotenv.config(); 

 const registerUser= async(req,res)=>{

    const newUser=User({
        fullname:req.body.fullname,
        email:req.body.email,
        age:req.body.age,
        address:req.body.address,
        country:req.body.country,
        password:CryptoJs.AES.encrypt(
            req.body.password,
            process.env.PASS
        ).toString()
    })
    
        
    try {
        const user= await newUser.save();
        res.status(201).json(user)
    } catch (error) {
        res.status(500).json(error)
    }


}

 const loginUser=async (req,res)=>{

    try {

        const user=await User.findOne({email:req.body.email})
        if(!user){
            res.status(401).json("You have not registered");
        }
        const hashedPassword=CryptoJs.AES.decrypt(
            user.password,
            process.env.PASS
        )
        const oriiginalPassword=hashedPassword.toString(CryptoJs.enc.Utf8)

        if(oriiginalPassword!==req.body.password){
            return res.status(500).json("Wrong Password")
        }

        const {password,...info}=user._doc;

        const accesstoken=jwt.sign(
            {id:user._id,role:user.role},
            process.env.JWT_SEC,
            {expiresIn:"10d"}
        )

        res.status(200).json({...info,accesstoken});

    } catch (error) {
        res.status(500).json(error)
        
    }

}

module.exports={registerUser,loginUser};