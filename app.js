const express = require("express");
const app = express();

const COLOR = process.env.COLOR || "unknown";

if (process.env.CRASH === "true") {
  console.log("Intentional crash!");
  process.exit(1);
}

app.get("/", (req, res) => {
  res.send(`Hello from ${COLOR} v3!`);
});

app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(3000, () => {
  console.log(`Server running on ${COLOR}`);
});
