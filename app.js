var express = require('express');
const mongoose = require('mongoose');
var app = express();
const path = require('path');
const port = process.env.PORT || 3000;
//const dbUri = 'mongodb://localhost:27017/Products'; // MongoDB URI
const dbUri = "mongodb+srv://Lohit:lohit123@cluster0.e6rjy.mongodb.net/Products?retryWrites=true&w=majority"

app.use(express.static(__dirname + '/'));

mongoose.connect(dbUri, {
    useNewUrlParser: true
})
const con = mongoose.connection;
con.on('open', () => {
    console.log('Connected...!')
})

app.use(express.json());


const productsRouter = require(__dirname + '/routes/products');
app.use('/products', productsRouter);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/home.html'));
});
app.listen(port, function () {
    console.log('Example app listening on port 3000!');
});
