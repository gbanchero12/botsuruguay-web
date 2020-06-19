const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const fetch = require('node-fetch');
const content = require('./content');
var cors = require('cors')

server.use(bodyParser.json());

var corsOptions = {
    origin: 'http://botsuruguay.com',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

server.get("/blog", cors(corsOptions), (req, res) => {
    res.send(content.blog);
});


server.get("/bots", cors(corsOptions), (req, res) => {
    res.send(content.bots);
});

server.get("/features", cors(corsOptions), (req, res) => {
    res.send(content.features);
});

const local = false;


server.post("/", (req, res) => {

    var headers = {
        "Content-Type": "application/json"
    }
    var data = JSON.stringify(model);

    fetch(url, { method: 'POST', headers: headers, body: data })
        .then((res) => {
            return res.json()
        })
        .then((json) => {
            console.log(json);
            res.json(respuestaBasica(json.fulfillmentText));
        });
    
    });





    local ? server.listen(3001) : server.listen(process.env.PORT);
