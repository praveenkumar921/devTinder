const express = require("express");

const app = express();

app.use('/list', (req, res) => {
res.send("heelo from list")
})

app.listen(7777), () => {
    console.log("server started at 7777 port")
}