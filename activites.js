const fs = require("fs");
const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(express.static(path.join(__dirname,)))

app.get("/Aktiviteter.html/activitySubmited", function(request, response){
    fs.readFile( "./myfile.json", "utf8", (error, result)=>{
     if (error) {
         console.log(error);
         return;
     }
     const clientJson = JSON.parse(result);
     response.json(clientJson).end();
    }) 
 });

 function replacer(key, value){
    if (typeof value === "string"){

        return value.replaceAll("<","&lt;").replaceAll(">", "&gt;")
    }
    return value;
}

app.post('/Aktiviteter.html/activitySubmited', function (request, response) {
    fs.readFile( "./myfile.json", "utf8", (error, result)=>{
        if (error) {
            console.log(error);
            return;
        }
        let newComment = request.body;

        const clientJson = JSON.parse(result);
        clientJson.push(newComment) // array.

        fs.writeFile("./myfile.json", JSON.stringify(clientJson, replacer, 2),(error, result) =>{ // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_replacer_parameter
            if (error) {
                console.log(error);
                return;
            }
            response.json({}).end();
        })
    });
});

app.listen(port, () => {
    console.log(`Server running at localhost: ${port}`);
    });