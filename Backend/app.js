const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bookroute=require("../Backend/route/book.route")
const Userroute=require('./route/user.route')
const cors=require('cors');





dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 4000;
const mongoURI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    process.exit(1); // Exit process with failure
  });


  app.use("/book",bookroute);
  app.use("/user",Userroute)


app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
