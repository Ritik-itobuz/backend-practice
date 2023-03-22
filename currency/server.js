const http = require("http");
const express = require("express");
// const data = require("./db.txt");
const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./db.txt", "utf8"));

const app = express();
console.log(app);
let country;
app.get("/", (req, res) => {

  res.send(JSON.stringify(data));
 res.end();
});
app.get("/currency/:country", (req, res) => {
    // const {country} = req.params;
    // console.log(symbol);
    const route = req.url;
    country = route.split("/")[2].trim().toUpperCase().toString();
    // console.log(country);
    // for (let i=0; i<data.length; i++){
    //     console.log(data);
    // }
    // console.log(data);x
    //     if(country==='USD')
    //     {
    //         res.send(JSON.stringify(data.USD));
    //     }
    //     if(country==='AED')
    //     {
    //         res.send(JSON.stringify(data.AED));
    //     }
    //     if(country==='INR')
    //     {
    //         res.send(JSON.stringify(data.INR));
    //     }

    //    else{
    // // res.send("hello");
    // res.send(JSON.stringify(data))
    // }
    res.send(data.country);
  })

  .listen(4000, () => {
    console.log("hello");
  });
