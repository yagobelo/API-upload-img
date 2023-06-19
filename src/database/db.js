const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect(process.env.URI_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Database MongoDB connected!");
    })
    .catch((error) => {
      console.log("Error to connect in database: " + error);
    });
};

module.exports = connectDB;
