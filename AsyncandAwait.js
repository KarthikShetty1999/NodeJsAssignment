const fs = require('fs')
fs.writeFile("./newFile.js", "Hello", ()=>{
    console.log("file has been written");
})

async function message(){

    let firstMessage = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Welocome to Everyone");
            reject("Error")
        },2000)
    })

    let secondMessage = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Thank you");
            reject("Error")
        },4000)
    })

    let greeting1 = await firstMessage;
    console.log(greeting1);
    let greeting2 = await secondMessage;
    console.log(greeting2);
    return [greeting1,greeting2]
}
message()