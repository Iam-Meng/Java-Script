const user = {
    id: 1,
    username: "Alice",
    age: 25
}

const {username : name} = user;

console.log(`name = ${name}`);