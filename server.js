const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const note = require("./src/router/note");
const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use("/", note);
dotenv.config();

// const uri = process.env.URI
const uri = "mongodb+srv://yuanquan7266:3DEuAJMlSZgVurfi@cluster0.ecgq0sq.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
    try {
        await mongoose.connect(uri);
        console.log("Connected to MongoDB")
    } catch (error) {
        console.error(error);
    }
}

connect();

app.listen(process.env.PORT, () => {
    console.log("Server started on port 5000");
})
