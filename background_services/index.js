const express=require("express");
const app=express();
const mongoose=require("mongoose");
const dotenv=require("dotenv");
const cron=require("node-cron");
const { sendWelcomeEmail } = require("./EmailService/WelcomeEmail");
const { SendParcelPendingEmail } = require("./EmailService/PendingParcel");
const { sendParcelDeliveredEmail } = require("./EmailService/DeliveredParcel");

dotenv.config();

const DB=process.env.DB;
mongoose.connect(DB).then(()=>{
    console.log("Db connection is successfull")
}).catch((e)=>{
    console.log(e)
})

//task scheduler

const run=()=>{
    cron.schedule('* * * * * *', () => {
       sendWelcomeEmail();
       SendParcelPendingEmail();
       sendParcelDeliveredEmail();
      });
}

run();




const PORT=process.env.PORT;


app.listen(PORT,()=>{
    console.log(`Background services are running on port ${PORT}`);
})