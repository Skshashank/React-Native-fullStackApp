const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const connectDB = require("./config/db");

//DOTENV config
dotenv.config();

// MONGODB connection
connectDB();

//REST OBJECT
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//Routes
app.use("/api/v1/auth", require("./routes/userRoutes"));

//PORT
const PORT = process.env.PORT || 8080;

//listen

app.listen(PORT, () => {
  console.log(`Server is Running at ${PORT}`.bgGreen.white);
});
