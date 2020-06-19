const express = require('express');
const bodyParser = require('body-parser');
const server = express();
const fetch = require('node-fetch');
const content = require('./content');

server.use(bodyParser.json());


server.get("/blog", (req, res) => {
    res.send(content.blog);
});


server.get("/bots", (req, res) => {
    res.send(content.bots);
});

server.get("/features", (req, res) => {
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
