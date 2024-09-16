const prompt = require('./node_modules/prompt-sync')();

let budget = parseFloat(prompt('What is your budget?'));
let expenses = [];
let choice = '';

function addExpense(amount, category){
    if(amount > budget){
        console.log("You don't have enough money");
    }
    expenses.push([amount, category]);
    budget -= amount;
    console.log();
}

// function calculateTotal(){
//     let totalExpense = 0;
//     for (let i = 0; i < expenses.length; i++){
//         totalExpense += expenses[i, 1];
//     }
//     console.log(totalExpense);
// }

function viewExpenses(){
    console.log(expenses);
    console.log();
}

function checkBudget(){
    console.log(budget);
    console.log();
}

function removeExpense(category){
    for (let i = 0; i < expenses.length; i++){
        if(expenses[i][1] == category){
            budget += expenses[i][0];
            expenses.splice(i,1);
        }
    }
    console.log();
}

function printMenu(){
    console.log('1. Add an Expense');
    console.log('2. View Total Expenses');
    console.log('3. Check Budget');
    console.log('4. Remove an Expense');
    console.log('5. Exit');
    choice = parseInt(prompt('What do you want to do?'));
    console.log();
    if(choice == 5){
        console.log("Thank you. Bye bye!");
    }
}

while(choice!=5){
    printMenu();
    if(choice == 1){
        let category = prompt("What category do you want to add an expense to?");
        let amount = parseFloat(prompt("How much do you want to add?"));
        addExpense(amount, category);
    }else if(choice == 2){
        viewExpenses();
    }else if(choice == 3){
        checkBudget();
    }else if(choice == 4){
        let c = prompt("What category do you want to remove an expense from?");
        removeExpense(c);
    }
}