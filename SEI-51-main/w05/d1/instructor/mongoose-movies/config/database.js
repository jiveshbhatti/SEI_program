const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/movies", {
  useNewUrlParser: true,
  UseUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("connected", function () {
  console.log(`connected to MongoDB at ${db.host}:${db.port}`);
});
