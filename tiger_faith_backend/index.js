const express = require("express");
const compression = require("compression");
require("dotenv").config();

const app = express();

app.use(compression());

app.get("/", (req, res) => {
  res.send("Tiger Faith Backend is running");
});


const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Backend listening on port ${PORT}`);
});
