const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const fetch = require('node-fetch');
const content = require('./content');
var cors = require('cors');

server.use(bodyParser.json());
server.use(cors());
server.use(require('prerender-node'));


var corsOptions = {
    origin: 'https://botsuruguay.com'
  }

server.get("/blog", cors(), (req, res) => {
    res.setHeader('Content-Type','application/json');
    res.status(200);
    let body = content.blog;
    res.send(body);
});


server.get("/bots", cors() , (req, res) => {
    res.setHeader('Content-Type','application/json');
    res.status(200);
    let body = content.bots;
    res.send(body);
});

server.get("/features", cors() ,(req, res) => {
    res.setHeader('Content-Type','application/json');
    res.status(200);
    let body = content.features;
    res.send(body);
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
