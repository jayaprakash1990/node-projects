const express = require('express')
const app = express()

exports.getWeatherReport = function(req,res){
    const name = req.params.city;
    app.get('https://api.openweathermap.org/data/2.5/forecast?q=chennai&appid=0049058f942c6a1', function (request, response) {
        res.send(response);
      })
}

exports.getDetail = function(req,res){
    res.send("Please enter the valid url to get forecast details:  http://localhost:3000/forecast?city=<city>");
}