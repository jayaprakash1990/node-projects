const express = require('express');
const bodyParser = require('body-parser');
const app = express();
 
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

const routes = require('./routes/route');
app.use(routes);

app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.send(err.message);
  });


app.listen(3000, () => console.log(`Weather app listening on port 3000`))

