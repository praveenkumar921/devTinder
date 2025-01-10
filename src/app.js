const express = require("express");

const app = express();

app.get('/user', (req, res) => {
    res.send({ firstName: "praveen", lastName: "kumar" })
})

app.post('/user', (req, res) => {
    res.send( "post data successfully to DB!")
})

app.delete('/user', (req, res) => {
    res.send( "delete data successfully to DB!")
})

app.use('/list', (req, res) => {
    res.send("heelo from list")
})

app.listen(7777), () => {
    console.log("server started at 7777 port")
}