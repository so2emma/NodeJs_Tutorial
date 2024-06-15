const path = require("path");
require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const port = 8080;

const app = express();

const feedRoutes = require("./routes/feed");

app.use(express.json()); // this is for application json
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static(path.join(__dirname, "images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/feed", feedRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({message: message});
})


const username = process.env.MONGODB_USERNAME;
const password = process.env.MONGODB_PASSWORD;
mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.nmziuhm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Connection failed"));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
