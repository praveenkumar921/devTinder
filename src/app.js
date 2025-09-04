const express = require("express");

const app = express();

app.get('/user', (req, res, next) => {
    // res.send("Handling user 1");
    next()
},
(req, res) => {
    res.send("Handling user 2")
},
(req, res) => {
    res.send("Handling user 3")
})


app.listen(7777), () => {
    console.log("server started at 7777 port")
}