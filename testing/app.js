const express = require("express");
const app = express()
const port = 3000

app.use('/', express.static(__dirname + '/'));

app.listen(3000, () => {
    console.log("Test app running on localhost:3000");
});