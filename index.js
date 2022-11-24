const promise = new Promise((resolve, reject) => {  
        resolve('Promise is resolved successfully.');  
        reject('Promise is rejected');  
});
promise.then(
    (result) => { 
       console.log(result);
    },
    (error) => { 
       console.log(error);
    }
);



