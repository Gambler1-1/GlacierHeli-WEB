
//APP.JS
require('dotenv').config()
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const cors = require('cors')
app.use(express.json())
app.use(cors({ credentials: true, origin: '*', methods: "GET,HEAD,PUT,PATCH,POST,DELETE", }));
app.use(cookieParser())

//ROUTES IMPORT
const blogs = require("./routes/blogRoute");
const users = require("./routes/userRoute");
// app.use("/", (req,res)=>{
// res.json({msg:"HOME PAGE"})
// })

app.use("/api/v1", users)
app.use("/api/v1", blogs)

const connectDatabase = require("./config/database")

if(process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'))
    })
}
//CONNECT TO DATABASE
const PORT = process.env.PORT || 6000;
const start = async()=>{
    
    await connectDatabase()

    app.listen(PORT,()=>{
        console.log(`Server is working on http://localhost:${PORT}`)
    })
}
start()