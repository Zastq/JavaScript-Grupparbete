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
app.use(express.static(path.join("LoginForm")))


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


app.get("/menu.html/bookingSubmited", function(req, res){
    fs.readFile( "./myfilemenu.json", "utf8", (error, result) => {
     if (error) {
         console.log(error);    
         return;
     }
     const clientJson = JSON.parse(result);
     res.json(clientJson).end();
    }) 
 });


app.post('/menu.html/bookingSubmited', function (req, res) {
    fs.readFile( "./myfilemenu.json", "utf8", (error, result)=>{
        if (error) {
            console.log(error);
            return;
        }
        let newComment = req.body;

        const clientJson = JSON.parse(result);
        clientJson.push(newComment) // array.

        fs.writeFile("./myfilemenu.json", JSON.stringify(clientJson, replacer, 2),(error, result) =>{ // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#the_replacer_parameter
            if (error) {
                console.log(error);
                return;
            }
            res.json({}).end();
        })
    });
});


// Port
app.listen(port, () => {
    console.log(`Server running localhost: 3000`);
    });
