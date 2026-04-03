import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config({quiet:true})

const connect= async()=>{
    try {
        const DB= process.env.DATABASE
        mongoose.connect(DB)
        console.log("connected")

    
    
} 
catch (error) {
    console.log(error)
    console.log("not connected")
    
}}
export default connect
