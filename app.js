const express = require("express");
const app = express();

const COLOR = process.env.COLOR || "unknown";

app.get("/", (req, res) => {
  res.send(`Hello from ${COLOR} v2!`);
});

app.listen(3000, () => {
  console.log(`Server running on ${COLOR}`);
});
