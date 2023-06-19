const express = require("express");
const connectDB = require("./database/db");
const pictureRoutes = require("./routes/pictureRoutes");
require("dotenv").config();

connectDB();

const app = express();

app.use(express.json());
app.use("/picture", pictureRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server running in port: ${PORT}!`);
});
