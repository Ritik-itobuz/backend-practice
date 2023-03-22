const express = require("express");
const app = express();
const data  = require('./db.json');

app.get('/',(req,res)=>
{
res.send(JSON.stringify(data));
res.end();
})
app.get('/currency/:symbol', (req,res)=>
{
    const {symbol} = req.params;
    res.send(data.USD);
    res.end();
})

.listen(2000,()=>
{
    console.log("Server running on localhost:2000")
})