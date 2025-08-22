function kammkaro(data,ms){
    return new Promise((resolve, reject) => {
        setTimeout( ()=>{
            if (!data){
                reject(new Error("No data provided!"));
            }else{
                resolve(`data ${data}`);
            }
        },ms)
    });
}

kammkaro("kaam ho gya thik hai",3000)
.then(result=>console.log(result))
.catch(err =>console.log("error",err.message));


const fs = require(`fs`).promises;

Promise.all([
    fs.readFile(`file1.txt`,`utf-8`),
    fs.readFile(`file2.txt`,`utf-8`),
])
.then(([data1,data2])=>{
    console.log('file1',data1);
    console.log('file2',data2);
})
.catch(err => console.log('error',err.message));