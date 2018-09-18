// JavaScript source code



"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const restService = express();

restService.use(
  bodyParser.urlencoded({
      extended: true
  })
);

restService.use(bodyParser.json());


restService.post("/echo", function (req, res) {
    
 
    return res.json({
        "google": {
            "richResponse": {
                "items": [
                  {
                      "simpleResponse": {
                          "textToSpeech": "From Alberta health Services tip of the day"
                      }
                  },
                  {
                      "mediaResponse": {
                          "mediaType": "AUDIO",
                          "mediaObjects": [
                            {
                                "name": "Alberta Health Services Wellness Tips",
                                "description": "playing",
                                "largeImage": {
                                    "url": "https://capsconnections.ualberta.ca/caplet/Media/Logo?orgId=79&size=Large",
                                    "accessibilityText": "..."
                                },
                                "contentUrl": "https://ahamms01.https.internapcdn.net/ahamms01/Content/AHS_Website/alexa/alexa-fs-less-than-zen.mp3"
                            }
                          ]
                      }
                  }
                ],
                "suggestions": [
                  {
                      "title": "chips"
                  }
                ]
            }
        }
    });
});

restService.listen(process.env.PORT || 8000, function () {
    console.log("Server up and listening");
});
