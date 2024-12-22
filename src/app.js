const connectDB = require("./config/database");
const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());

const taskRouter = require("./routes/taskRoutes");
const userRoutes = require("./routes/userRoutes");

app.use("/task", taskRouter);
app.use("/auth", userRoutes);

connectDB()
  .then(() => {
    console.log("Database Connection Successfull....!");
    app.listen(PORT, () => {
      console.log("Server is successfully listening on port 5000...!");
    });
  })
  .catch((err) => {
    console.log("Database Connection UnSuccessfull....!");
  });
