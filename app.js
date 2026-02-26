const express=require('express');

const bodyParser=require('body-parser');
const feedRoutes=require('./router/feed');
const mongoose = require('mongoose');


const app=express();

app.use(bodyParser.json());
app.use('/feed',feedRoutes);

mongoose.connect('mongodb+srv://omartkwa123_db_user:GjnhLxohDbe19QCC@cluster0.jrrvtjf.mongodb.net/messages?appName=Cluster0');
app.listen(8080);