const fs = require("fs");
const https=require("https");
console.log("Hello world")

var a = 10786968;
var b =20986;


// fs.readFileSync("./file.txt","utf8")
// console.log("op")
https.get("https://dummyjson.com/rpoduct/1",(res)=>{
    console.log("fetched data successfully")
})

setTimeout(()=>{
 console.log("setTimeout called for 5 seconds");
},5000)

fs.readFile("./file.txt","utf8",(err,data)=>{
    console.log("File data:",data);
})

function multiplyFn(x,y){
    const result = a *b;
    return result;

}

var c =multiplyFn(a,b);
console.log(c)