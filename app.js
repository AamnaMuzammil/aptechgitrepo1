import express from "express"
import connect from "./Config/dbconfig.js";
const app = express()

app.use(express.json())

connect()
app.get('/',(req,res)=>{
    res.send("welcome to node js proj")
})
app.get('product',(req,res)=>{
    res.send("welcome to node js proj")
})
export default app;