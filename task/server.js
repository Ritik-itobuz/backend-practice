const http = require("http");
const port = 8000;
const path = require("path");
const fs = require("fs/promises");
const fsx = require("fs");
const  {parse}  = require("querystring")

const filePath = path.join(__dirname + "/db.json");
const data = JSON.parse(fsx.readFileSync(filePath, "utf-8"));

async function writeFormData(formData) {
  const dataFromFile = await fs.readFile("./data.txt", "utf8");
  const fileData = JSON.parse(dataFromFile)
  fileData.push(formData)
  await fs.writeFile("./data.txt", JSON.stringify(fileData));
}

http
  .createServer((req, res) => {
    try {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Headers", "*");
      let formData = "";
      req.on("data", (formDataPeices) => {
        formData = formDataPeices.toString();
      });
      req.on("end", () => {
        if (Object.keys(formData).length !== 0) {
          writeFormData(parse(formData))
        }
      });
      // const formData = [];
      // req.on("data", (formDataPieces) => {
      //   formData.push(formDataPieces);
      // });
      // req.on("end", () => {
        // console.log(Buffer.concat(formData).toString());

        // let formdata = Buffer.concat(formData).toString();

        // let getData = async () => {
          
        //   let presentData = await fs.writeFile("./data.txt", formData);
        //  let  formDataNew = formData + ";" + presentData;
        //   await fs.writeFile("./data.txt", formDataNew);
        //};
        //getData();
      //});
      
      res.end(JSON.stringify(data));
    } catch (err) {
      console.log(err);
    }
  })
  .listen(port, () => {
    console.log(`Listening to port ${port} `);
  });
