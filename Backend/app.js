const express = require("express");
const connectDB = require("./ConnectDB/ConnectDB");
const notFound = require("./MiddleWare/notFound");
const errorHandler = require("./MiddleWare/errorHandler");
const UserRoute = require("./Router/Route");
const Pro = require("./Models/Mode");
const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: ["http://127.0.0.1:5173", "http://localhost:5173"],
    credentials: true,
  })
);

app.use(express.json());
app.use("/website", UserRoute);
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 8015;

const startApp = async () => {
  try {
    await connectDB(
      "mongodb+srv://govindsajeevGovind:GovindSajeevKumar@cluster0.vk9zxhk.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log("Connected to database");
    app.listen(port, () => {
      console.log("server running on port 8015");
    });
  } catch (error) {
    console.log(error);
  }
};

startApp();
