const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send(`This is an environment variable: ${process.env.TEST}`);
});

res.listen(10000, () => {
	console.log("Listening on port 10000");
});

module.exports = app;
