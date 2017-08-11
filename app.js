var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');

var app = express();

//mongoose.connect('mongodb://localhost:27017/svgur_01');
//
//mongoose.connection.on('connected', ()=>{
//    console.log('db connected on 27017');
//});
//mongoose.connection.on('error', (err)=>{
//    if(err){
//        console.log('db error ' + err);
//    }
//});

var port = 8080;
var route = require('./routes/route');


app.use(cors());

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', route);

app.get('/', (req, res)=>{
    app.send('hello');
});


app.listen(port, ()=>{
   console.log('server started on port ' + port) 
});