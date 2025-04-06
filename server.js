const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const customerRoutes = require("./routes/customers");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/supercrm", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/auth", authRoutes);
app.use("/api/customers", customerRoutes);

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
