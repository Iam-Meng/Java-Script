let number = [5, 12, 8, 130, 44];

let cut = number.slice(1,4);

let result = number.filter(checkNumber);

console.log(result);

function checkNumber (number){
    return number > 10;
}