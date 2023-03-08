require("dotenv").config()
const express = require("express");

const app = express();

const PORT = process.env.PORT;


app.get("/",(req,res)=>{
   res.json({
	   msg:"This is my first dockerized node js application..."
   })
})

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})
