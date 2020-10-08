const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "api is running" });
});

app.listen(3000, () => {
  console.log("** Api is Running **");
});
