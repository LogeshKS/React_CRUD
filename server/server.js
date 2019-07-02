const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const dbConfig = require('./dbConfig');
const PORT=4000;
const routes = require('./Routes/route');

mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.DB, {useNewUrlParser:true}).then(
    ()=>{console.log('Database Connected')},
    err => {console.log('Cannot able to connect to Database'+ err)}
);

app.use(cors);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use("/user",routes);

app.listen(PORT, function(){
    console.log("server is running on Port:",PORT);
})
