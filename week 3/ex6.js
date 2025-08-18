const person = { 
    name: 'Bob', 
    address: { 
        city: 'Phnom Penh', 
        zip: 12345 
    }
};
const {name, address: {city}} = person;
console.log(`name = ${name}, city = ${city}`);