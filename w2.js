const { realpath } = require("fs");
const { removeAllListeners } = require("process");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ex 1

// function printHeart(){
//     console.log("<3");
// }

// printHeart();

// Ex 2

// function rant(message){
//     for(let i = 0; i < 3; i++){
//         console.log(message.toUpperCase());
//     }
// }

// readline.question('Enter a message to rant: ', (msg) => {
//     rant(msg);
//     readline.close();
// });

// Ex 3

// function isSnakeEyes(a, b) {
//   return a == 1 && b == 1 ? true : false;
// }

// readline.question("Enter first number: ", (first) => {
//   readline.question("Enter second number: ", (second) => {
//     if (isSnakeEyes(first,second)) {
//       console.log("Snake Eyes!");
//     } else {
//       console.log("Not Snake Eyes!");
//     }
//     readline.close();
//   });
// });

// Ex 4

// function multiply(a,b){
//     return a*b;
// }

// readline.question("Enter the first number: ", (first) =>{
//     readline.question("Enter the second number: ", (second) => {
//         console.log(multiply(first,second));
//     })
// });

// Ex 5

// function isShortsWeather(temp){
//     temp >= 35 ? console.log("True") : console.log("False");
// }

// readline.question("Enter the temperature: ", (num) =>{
//     isShortsWeather(num);
// });

// Ex 6

// function lastElement(arr) {
//     if (arr.length === 0) {
//         return null;
//     }
//     return arr[arr.length - 1];
// }

// readline.question("How many element? ", (element) => {
//     readline.question("Enter array elements separated by spaces: ", (input) => {
//         let arr = input.split(" ");
//         console.log(lastElement(arr));
//         readline.close();
//     });
// });

// Ex 7

// function sumArray(arr){
//     let sum = 0;
//     for(let i = 0; i<arr.length; i++){
//         sum += Number(arr[i]);
//     }
//     return sum;
// }

// readline.question("How many element? ", (element) => {
//   readline.question("Enter array: ", (input) => {
//     let arr = input.split(" ");
//     console.log(sumArray(arr));
//     readline.close();
//   });
// });

// Ex 8

// let week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
// function returnDay(number){
//     if(number<1 && number>7){
//         return null;
//     }else{
//         return week[number -1];
//     }
// }

// readline.question("Enter Number(1-7): ", (number) =>{
//     console.log(returnDay(number))
// })

// Ex 9

// function greet(name){
//     let greet = "Greetings " + name + "!";
//     return greet; 
// }
// readline.question("Enter name: ", name =>{
//     console.log(greet(name));
// })

// Ex 10

function square(number){
    return number*number
}
readline.question("Enter number: ", number=>{
    console.log(square(number));
})
