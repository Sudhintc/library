const express = require('express');

const app = express();

app.get('/',function(req,res){
    res.send("hello worldssxsxas");
});

app.listen(5000);