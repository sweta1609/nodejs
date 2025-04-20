// const {sum}=require("./calculate/sum")
// const {calculatemultiply} = require("./calculate/multiply")
const {sum,calculatemultiply} = require("./calculate/index")
const data = require("./data.json")

var a =10;
var b = 20;
calculatemultiply(a,b)
sum(a,b)
console.log(data)