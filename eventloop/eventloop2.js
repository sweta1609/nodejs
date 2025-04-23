const fs = require("fs");

const a = 100;
setImmediate(()=>console.log("setImmediate"));
Promise.resolve("Promise").then(console.log)
fs.readFile("./file.txt","utf8",()=>{
    console.log("file reading cb");
})
setTimeout(()=>console.log("timer expired"),0);
process.nextTick(()=>console.log("process nexttick"))
function printA(){
    console.log("a=",a);
}
printA()
console.log("last line of the file")

// a= 100
// last line of the file
// process nextticke
// resolve promise
// timer expired
// setImmediate
// file ceading cb