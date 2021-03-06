const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const fetch = require('node-fetch');
const content = require('./content');
var cors = require('cors');
const prerender = require('prerender-node');

server.use(bodyParser.json());
server.use(cors());
server.use(prerender).set('prerenderToken', 'HIPPHB7tYds41GKF2c7t');

const local = false;

var corsOptions = {
    origin: 'https://botsuruguay.com'
  }

server.get("/blog", cors(corsOptions), (req, res) => {
    res.setHeader('Content-Type','application/json');
    res.status(200);
    let body = content.blog;
    res.send(body);
});


server.get("/bots", cors(corsOptions) , (req, res) => {
    res.setHeader('Content-Type','application/json');
    res.status(200);
    let body = content.bots;
    res.send(body);
});

server.get("/features", cors(corsOptions) ,(req, res) => {
    res.setHeader('Content-Type','application/json');
    res.status(200);
    let body = content.features;
    res.send(body);
});




/*server.post("/", (req, res) => {

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
    
    });*/





    local ? server.listen(3001) : server.listen(process.env.PORT);
