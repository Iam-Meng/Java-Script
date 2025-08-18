const arr=[1,2,3];
const newArr=[0,...arr,4,5];
console.log(newArr);
const [first,second,...rest]=newArr;
console.log(`first=${first},second=${second},rest=${rest}`);