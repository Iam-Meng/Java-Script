const arr1 = [1,2,3];
const arr2 = [4,5,6];

const array = [...arr1,...arr2];

console.log(array);

const a = {x: 1, y: 2};
const b = {y: 3, z: 4};

const merge = {...a,...b};

console.log(merge);