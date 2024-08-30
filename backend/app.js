import express from "express";
import {config} from "dotenv";
import cors from "cors";
import {sendEmail} from "./utils/sendEmail.js"

const app = express();
const router = express.Router();

config({path:"./config.env"});

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["POST"],
    credentials:true
}))

// This will Parse Your Data in json
app.use(express.json());
// This will be used for the verification that the data is in the form of int or string etc.
app.use(express.urlencoded({extended:true}));

router.post("/send/mail" , async(req,res,next)=>{
const {name,email,message} = req.body;
if(!name || !email || !message){
    return next(res.status(400).json({
        success:false, 
        message:"Please Fulfil Your Form"
    }))
}
try {
    await sendEmail({
        email:"ahmadowais41@gmail.com",
        subject:"GYM WEBSITE CONTACT",
        message,
        userEmail:email,

    });
    res.status(200).json({
        success:true,
        message:"Message Send Successfully!"
    })
} catch (error) {
    res.status(500).json({
        success:false,
        message:"Internal Server Error"
    })
}

})

app.use(router)

app.listen(process.env.PORT , ()=>{
    console.log(`Server is Listening on Port ${process.env.PORT} `)
})