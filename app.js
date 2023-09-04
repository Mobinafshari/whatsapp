import express from "express";



//create express app
const app = express();

app.get("/test",(req,res)=>{
    res.status(205).send("hello this is a test")
})

export default app;