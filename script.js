
spendInput = document.getElementById("spendInput");
class Budget { 
    constructor () { //IT TAKES IN THE WEEK'S STARTING BUDGET balance
        this.amountSpent = 0; // Initialized to 0, because you haven't spent anytihng yet.
        this.balance = document.getElementById("budgetInput"); //this is the amount spent on an item; // "balance" WILL REPRESENT the amount of money available
        this.spendInput = document.getElementById("spendInput"); //this is the amount spent on an item   
    } // end object constructor

    spend(){ 
        if (this.balance.value > 0) { //if you have money available in your balance
            console.log(`************************************`);
            console.log(`available money: $${myBudget.balance.value}`);
            this.balance.value -= spendInput.value; //then decrease this.balance by (the amount spent)
            this.amountSpent += parseFloat(spendInput.value); //and increase this.amountSpent by (the amount spent) 
            console.log(`You just spent $${spendInput.value}` );
            console.log(`In total, you spent: $${myBudget.amountSpent}`);
            console.log(`available money: $${myBudget.balance.value}`);
        } else {
            console.log("You have no money, cannot spend");
            console.log(this.balance.value); 
        }
    }
} // end class Budget

let budgetInput = document.getElementById("budgetInput");
let myBudget = new Budget(); // <---a varible being assigned to a new object. the object is based off the class, defined above. Starting off with 5 monies