const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors({
  origin:['http://localhost:8080'],
   methods:['GET','POST','PUT','DELETE'],
   credentials: true // enable set cookie
}))

//Middlewares
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes
app.use('/',require('./app/routes'));

// set port, listen for requests
app.set('puerto', process.env.PORT || 8080);
app.listen(app.get('puerto'), () => {
  console.log('Server listening on port '+ app.get('puerto'));
});