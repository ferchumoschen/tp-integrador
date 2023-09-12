const express = require ("express");
const app = express();
const http = require("https").createServer(app)
const PORT = 5000;

app.use(express.json());

http.listen(PORT,() =>{
    console.log('listening to ${PORT}');
})
