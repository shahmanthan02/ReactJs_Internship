/*Operators*/

// The Assignment Operator = assigns values
    // let x = 10;
    // x += 5;
    // console.log(x); 

// The Addition Operator + adds values
     // let x = 5;
    // let y = 10
    // let z = x+y;
    // console.log(z);

// The Multiplication Operator * multiplies values
    // let x = 5;
    // let y = 10
    // let z = x*y;
    // console.log(z);

// The Comparison Operator > compares values
    // let a = 5;
    // let b = 10;
    // let c= a>b;
    // console.log(c);

//Arithmatic Operator
    // let a = 3;
    // let c = (100+50)*a;
    // console.log(c);
    // let x = 5;
    // let y = 2;
    // let z = x % y;
    // console.log(z);
    // let x = 5;
    // // let z = x ** 2;
    // let z = Math.pow(x,2);
    // console.log(z);

// String Addition
    // let text1 = "Narendra";
    // let text2 = "Modi";
    // let text3 = text1 + " " + text2;
    // console.log(text3);
    // let text1 = "What a very ";
    // text1 += "nice day";
    // console.log(text1);

// DataTypes
    // // Numbers:
    // let length = 16;
    // let weight = 7.5;

    // // Strings:
    // let color = "Yellow";
    // let lastName = "Johnson";

    // // Booleans
    // let x = true;
    // let y = false;

    // // Object:
    // const person = {firstName:"John", lastName:"Doe"};

    // // Array object:
    // const cars = ["Saab", "Volvo", "BMW"];

    // // Date object:
    // const date = new Date("2022-03-25");

// //Functions
//     function myFunction(p1, p2) {
//         return p1 * p2;
//     }
//     let result=myFunction(20,5);
//     console.log(result);

//     // Create an Object
//         const person = {
//             name: "John",
//             age: 30,
//             city: "New York"
//         };
        
//     // Create an Array
//         const myArray = Object.values(person);
//         console.log(myArray);


//     const number = 5
//     let isPrime = true;
//  if (number > 1) {
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

    // Async
        // console.log('one');
        // console.log('two');
        // function hello(){
        //     console.log("Hello Gujarat");
        // }
        // setTimeout(hello,3000);
        // console.log('hey');
        // console.log('how');

    // callback
        // function sum(a,b){
        //     console.log(a+b);
        // }

        // function calc(a,b,sumcallback){
        //     sumcallback(a,b);
        // }
        // calc(2,5,sum);

// //CallbackHell
//         function getdata(dataId) {
//             return new Promise((resolve,reject) => {
//             setTimeout(() => {
//                 console.log('data',dataId);
//                 resolve('sucess');
//             }, 3000);
//         });
//     }
    
//     // promise chain
//     let p1 = getdata(1);
//     p1.then((res)=>{
//         console.log(res);
//         getdata(2).then((res)=>{
//             console.log(res);
//         });
//     });

    //     function getdata(dataId,getNextdata) {
            
    //         setTimeout(() => {
    //             if(getNextdata){
    //                 getNextdata();
    //             }
    //             console.log('data',dataId);
    //         }, 3000);
        
    // }


        // getdata(1,() => {
        //     getdata(2, ()=>{
        //         getdata(3,()=>{
        //             getdata(4);
        //         });
        //     });
        // });

//Promise
    // let promise = new Promise((resolve,reject)=>{
    //     console.log("I am a promise");
    //     // resolve(1234);
    //     reject("Some error");
    // });

//     function getdata(dataId,getNextdata) {
//         return new Promise((resolve,reject)=>{
//              setTimeout(() => {
//                 // console.log("data",dataId)
//                 //Data entered from suceesfully
//                 // resolve("sucessful");
//                 // Not send data
//                 reject("Error");
//                 if(getNextdata){
//                     getNextdata();
//                 }
//             }, 5000);
//     });
// }

    // const getPromise=()=>{
    //     return new Promise((resolve, reject) => {
    //         console.log("I am a promise");
    //         resolve("sucessful");
    //         // reject("Error");    
    //     });
    // };

    // let promise = getPromise();
    // promise.then((res)=>{
    //     console.log("promise fullfield",res);
    // });

    // promise.catch((err)=>{
    //     console.log("rejected",err);
    // });

// Chain Promise
    // function asyncFunc1() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             console.log("Some data1");
    //             resolve("success");
    //         }, 4000);
    //     });
    // }
    
    // function asyncFunc2() {
    //     return new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             console.log("Some data2");
    //             resolve("success");
    //         }, 4000);
    //     });
    // }

    // console.log("fetch the data1.....");
    // // let p1 = asyncFunc1();
    // asyncFunc1().then((res)=>{
    //     console.log(res);
    //     console.log("fetch the data2.....");
    //     let p2 = asyncFunc2();
    //     p2.then((res)=>{});
    // });

    // console.log("fetch the data2.....");
    // let p2 = asyncFunc2();
    // p1.then((res)=>{
    //     console.log(res);
    // });

//Async function
    // async function hello(){
    //     console.log('hello');
    // }

    // await keyword --> wait a promise all execution stop 
    // only use async function inside 

//     function api(){
//         return new Promise ((resolve,reject)=>{
//            setTimeout(() => {
//             console.log("wheather data");
//             resolve(200);
//            }, 2000);
//         })
//     }
// async function getwheatherdata(){
//     await api();//1 st
//     await api();//2 st
// }


        function getdata(dataId) {
            return new Promise((resolve,reject) => {
            setTimeout(() => {
                console.log('data',dataId);
                resolve('sucess');
            }, 3000);
        });
    }
    
    //async function
    async function getAllData() {
        await getdata(1);
        await getdata(2);
        await getdata(3);
    }