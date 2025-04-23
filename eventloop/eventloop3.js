const fs = require("fs");

setImmediate(()=>console.log("setImmediate"));
setTimeout(()=>console.log("1st timer"),0)
Promise.resolve("Promise").then(console.log)
fs.readFile("./file.txt","utf8",()=>{
    setTimeout(()=>console.log("1 timer"),0);
    process.nextTick(()=>console.log("process nexttick 1"))
    setImmediate(()=>console.log("2nd setImmediate"));
    console.log("file reading cb")
})
 
process.nextTick(()=>console.log("process nexttick 2"))
console.log("last line of the file")
// last line of the file
// process nexttick 2
// Promise
// 1st Timer
// setImmediate
// file reading cb
// process nexttick 1
// 2nd setimmediate
// 1 timer 


// [HERE INNER CIRCLE IS REFRRED TO process next tick and promise queue]
// so in callstack first it will execute console log then event loop will check call stack is empty and ca;; back queue have some callbacks
// then it will check process next tick and print process nextick 2 and then it will check promise and print Promise 
// then it will check timer phase and print 1st timer and then again inner circle process next tick and promise it will find them empty and go to poll phase 
// where we have fs readfile which is still getting executed so it will again check promise and process next tick
// then again check check phase where it finds setImmediate and print setImmediate in console again it checks inner circle finds nothing and goes to close where there is no socket to close 
// again it checks inner circle and finds nothing it goes to timer phase finds nothing and again inner circle then checks poll phase where fs file read is completed
// so prints file reasing cb but this callback also have some asynchronous  function to execute  which goes in call back  queue according to its phase
// now again event loop check inner circle finds nothing and in check phase we have setiimediat it console logs that 
// again check inner circle and yhen close phase and again check inner circle and then then timer phase where it have timer and prints 1 timer 
// checks inner circle again and goes to poll phase where it finds nothing to execute and waits there