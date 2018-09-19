// JavaScript source code



"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

var RequestBody;



var JsonRequest = require('request');
JsonRequest('https://www.albertahealthservices.ca/webapps/VoiceAppDev/ahs-alexa-news-dev/audioPOC/response-json.json', function (error, response, body) {
  requestbody = body;
});



restService.use(
  bodyParser.urlencoded({
      extended: true
  })
);

restService.use(bodyParser.json());


restService.post("/TipOfDay", function(req, res) {
  return res.json({RequestBody});
});

restService.listen(process.env.PORT || 8000, function () {
    console.log("Server up and listening");
});
