const nodemailer=require("nodemailer");
const dotenv=require("dotenv");

dotenv.config();

function createTransporter(config){
    const transpoter=nodemailer.createTransport(config);
    return transpoter;
}

let configurations={
    service:"gmail",
    host:"smpt@gmail.com",
    port:587,
    requireTLS:true,
    auth:{
        user: process.env.EMAIL,
        pass:process.env.PASSWORD
    }
}

const sendMail=async(messageoption)=>{

    const transpoter=await createTransporter(configurations);
    await transpoter.verify();
    await transpoter.sendMail(messageoption,(err,info)=>{
        if(err){
            console.log(err);
        }
        console.log(info.response); 

    });

}

module.exports=sendMail;