const mongoose = require("mongoose");
require("dotenv").config()
mongoose.set("strictQuery", false);

// Debug log to make sure the URI is being loaded correctly
mongoose.Promise = global.Promise;
console.log("MongoDB URI:", process.env.MONGODB_URI);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, err => {
  if (err) {
    console.error("MongoDB connection error:", err);
    process.exit(1);
  }
  console.log('Connected to MongoDB!');
});

module.exports = mongoose.connection;
