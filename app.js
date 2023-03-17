//APP.JS
require('dotenv').config()

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const cors = require('cors')
app.use(express.json())
app.use(cors({ credentials: true, origin: 'http://localhost:3000', methods: "GET,HEAD,PUT,PATCH,POST,DELETE", }));
app.use(cookieParser())

//ROUTES IMPORT
const blogs = require("./routes/blogRoute");
const users = require("./routes/userRoute");
const tours = require("./routes/tourRoute");


app.use("/api/v1", users)
app.use("/api/v1", blogs)
app.use("/api/v1/tours", tours)

const connectDatabase = require("./config/database")


//CONNECT TO DATABASE
const PORT = process.env.PORT || 6000;
const start = async()=>{
    
    await connectDatabase()

    app.listen(PORT,()=>{
        console.log(`Server is working on http://localhost:${PORT}`)

    })
}

start()