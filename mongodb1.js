const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/admin", {
}).then(() => {
  console.log("MongoDB connected");
}).catch((error) => {
  console.error("MongoDB connection error:", error);
});

const regSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const Collection = mongoose.model("infos", regSchema);
