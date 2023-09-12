import MongoClient
import ServerApiVersion


const express = require ("express");
const app = express();
const http = require("https").createServer(app)
const PORT = 5000;

/*const { MongoClient, ServerApiVersion } = require ('mongodb');
const uri = "";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion})
client.connect(err => {
    const collection = client.db("x").collection("products");

    console.log("conectado")
    client.close();
} )
*/

app.use(express.json());

http.listen(PORT,() =>{
    console.log('listening to ${PORT}');
})

app.get("/burgers", async (req,res) =>{
    
    let result = {'junior':1500,'big mac':2000,'mac pollo':1800}
    
    /*let { limit = 5, offset = 0 } = req.params;
    console.log(limit);
    try{
        let result = await collection.find({}).skip(parseInt(offset)).limit(parseInt(limit)).toArray();
        console.log(result);
        res.json({burgers: result});
    }catch(error){
        console.log("error");
        let response = {'status':500,'message':"Error de conexión."}
        */
        res.json({burgers:result})
    }        
)

/*app.get("/burgers/:id", async (req,res) =>{

    let { id = 0 } = req.params;
    console.log(id);
    let result = {'junior':1500}
    res.json({burger: result});
})
*/