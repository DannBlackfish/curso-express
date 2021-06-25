const express = require('express');
const app = express();

app.get('/', function(req, res, next) {
    res.send("hello world")
})

const server = app.listen(3000, function() {
    console.log(`Listening http://localhost:${server.address().port}`)
});
