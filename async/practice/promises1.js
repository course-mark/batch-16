/**
Exercise 1: Create a Simple Promise
Objective: Create and resolve a simple promise.

Write a function sayHello that returns a promise.
The promise should resolve with the message "Hello, World!" after 2 seconds.
Call the function and use .then() to log the message to the console. 
 */

// const sayHello = (ans) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(ans);
//     }, 1000);
//   });
// };
// sayHello("hello world!").then((message) => {
//   // console.log(message)
// });

// let play = () => {
//   return new Promise((resolve, reject) => {
//     const sucess = true;
//     if (sucess) {
//       resolve("This condition is true");
//     } else {
//       reject("This condition is failed");
//     }
//   });
// };
// play()
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((error) => {
//     console.error(error);
//   });


let object={
    name:"prabh",
    age:30,
    address:{
        city:"bangalore",
        pincode:560068
    }
}
const promiseObject = () => new Promise((resolve, reject)=>{
    resolve("object")
})

promiseObject().then(resolvedObject=>{
    console.log(resolvedObject)
})