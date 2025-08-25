let expenses =  [120, 75, 300, 50];
expenses.forEach(expense => console.log(`Expense recorded: $${expense}`));
console.log(`Total expenses: $${total(expenses)}`);

function total(expenses){
    let sum = 0;
    for( let i = 0; i<expenses.length; i++){
        sum+=expenses[i];
    }
    return sum;
}