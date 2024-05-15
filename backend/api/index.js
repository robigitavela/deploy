const express = require("express");
const app = express();
app.get("/", (req, res) => res.send("ke ja bide rabotava"));
app.listen(10000, () => console.log("Listening on port 10000!"));
module.exports = app;
