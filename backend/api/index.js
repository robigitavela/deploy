const express = require("express");
const app = express();

app.get("/", (req, res) => {
	res.send(`This is an environment variable: ${process.env.TEST}`);
});

app.listen(9000, () => {
	console.log("Listening on port 9000");
});

module.exports = app;
