// console.log("hello world");

// const upp = require("upper-case");
// // console.log(upp);

// console.log(upp.upperCase("hello world"))

const express = require("express")
const app = express()

let obj = {
    firstName : "Arya",
    lastName : "Stark",
    age:16
}

const jsonObj = [{
    "userId": 1,
    "id": 2,
    "title": "quis ut nam facilis et officia qui",
    "completed": false
    },
    {
    "userId": 1,
    "id": 3,
    "title": "fugiat veniam minus",
    "completed": false
    },
    {
    "userId": 1,
    "id": 4,
    "title": "et porro tempora",
    "completed": true
    },
    {
    "userId": 1,
    "id": 5,
    "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
    "completed": false
    }]


//sending json response
app.get("/json", (req,res) => {
    // res.json(jsonObj)
    //get the name parameter
    //http://localhost:3000/json?name=Cersei
    const nameFromReq = req.query.name//name=Cersei
    //CERSEI
    //update json object.
    obj.firstName = nameFromReq
    //set my status
    res.status(201)
    res.json(obj)
})    

//catching first get request
app.get("/", ()=> {
    console.log("request catched");
})

//catching request and return simple response.
app.get("/start", (req, res)=>{
    res.send("hello start!")
})

//sending html content
app.get("/htmlContent", (req,res)=> {
    res.send("<h1>This is html content</h1>")
})

//sending html FILE
app.get("/htmlFile", (req,res)=> {
   
    res.sendFile(__dirname + "/index.html")
})



const port = 3000
app.listen(port, () => {
    console.log("server is up and listening on port: " + port);
})