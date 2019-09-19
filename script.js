spendInput = document.getElementById("spendInput")
class Budget { 
    constructor () { //IT TAKES IN THE WEEK'S STARTING BUDGET balance
        this.amountSpent = 0; // Initialized to 0, because you haven't spent anytihng yet.
        this.entSpent = 0;
        this.foodSpent = 0;
        this.clothingSpent = 0;
        this.billsSpent = 0;

        this.budgetInput = document.getElementById("budgetInput"); 
        this.balance = budgetInput; //balance is just initialized as the budget input. Over time, the balance will reduce, but the original budget input remains the same
        this.spendInput = document.getElementById("spendInput"); //this is the amount spent on an item   

        //get the radio inputs
        this.entCheckbox = document.getElementById("entCheckbox");
        this.foodCheckbox = document.getElementById("foodCheckbox");
        this.clothingCheckbox = document.getElementById("clothingCheckbox");
        this.billsCheckbox = document.getElementById("billsCheckbox");
        this.submit = document.getElementById("submit");

        //initially disabling the button for spending
        this.submitButton = document.getElementById("submit"); //disables the button for adding expenses
        //this.submitButton.classList.toggle("gray");
        this.submitButton.disabled = true;

    } // end object constructor

    spend(){ 
        

       
        // get transaction history
        let transactionHistory = document.getElementById("transactionHistory");//get the transaction history output
        //transactionHistory.innerHTML = "";//reset
        //get ent output area
        let entOutput = document.getElementById("entOutput");


        this.balance.value -= this.spendInput.value; // decrease this.balance by (the amount spent)
        if (myBudget.balance.value < 0) { //if you DON'T have money available in your balance
           transactionHistory.innerHTML += ("<br>HOL' UP... YOU CAN'T AFFORD THAT"); //If their budget is consumed within the week, they must be notified that they cannot purchase additional items.
           //reset the balance
           this.balance.value = parseFloat(this.balance.value) + parseFloat(this.spendInput.value); //had to force both values to be floats, otherwise they would try concatinating 
        //    transactionHistory.innerHTML += (`<br> AVAILABLE MONEY: <b>$${this.balance.value}</b>`); //Displaying the user’s weekly budget which will be updated every time a new item is added to the list of purchased items
           console.log(this.balance.value);//track the remaining balance
           //this.budgetOutput.innerHTML += `Your Original Budget was: <span id="largeNumbers">$${this.balance.value}</span><br>`;
           this.balanceOutput.innerHTML += `Remaining Available Balance:  <span id="largeNumbers">$${Math.round(balanceOutput * 100) / 100}</span>`;
           //The code that makes the balance show up next to the beginning budget
           this.balanceOutput = document.getElementById("balanceOutput"); //get the h2 that will store the balance Output
           this.balanceOutput.innerHTML = `Remaining Available Balance: <span id="largeNumbers">$${Math.round(myBudget.balance.value * 100) / 100}</span>`; //output the beginning budget
           
        } else {
            this.amountSpent += parseFloat(spendInput.value); //and increase this.amountSpent by (the amount spent)

            if( entCheckbox.checked === true ) { //if it was entertainment
                transactionHistory.innerHTML += (`<br>You just spent <b>$${this.spendInput.value}</b> on Entertainment`);
                // transactionHistory.innerHTML += (`<br> In total, you spent: <b>$${myBudget.amountSpent}</b>`); //Must indicate to the user how much money has been spent
                this.entSpent += parseFloat(spendInput.value);
                //transactionHistory.innerHTML += (`<br> In the Entertainment catagory, you have spent: <b>$${myBudget.entSpent}</b>`); //log how much was spent in this catagory
                // transactionHistory.innerHTML += (`<br> AVAILABLE MONEY: <b>$${myBudget.balance.value}</b>`);
                console.log(this.balance.value);//track the remaining balance
                entOutput.innerHTML = (`Total Spent on Entertainment: <b>$${myBudget.entSpent}</b>`); //The user should be able to see how much money is being spent on each of the four categories.
                //MAKE A CHANGE TO CSS WIDTH OF A DIV.
                
                let entProgress = document.getElementById("entProgress");//get the progress bar
                entProgress.style.width = `${myBudget.entSpent}%`;

                //The code that makes the balance show up next to the beginning budget
                this.balanceOutput = document.getElementById("balanceOutput"); //get the h2 that will store the balance Output
                this.balanceOutput.innerHTML = `Remaining Available Balance: <span id="largeNumbers">$${Math.round(myBudget.balance.value * 100) / 100 }</span>`; //output the beginning budget
             
            } 
            
            if ( foodCheckbox.checked === true ) { //if it was food
                transactionHistory.innerHTML += (`<br>You just spent <b>$${this.spendInput.value}</b> on Food`);
                // transactionHistory.innerHTML += (`<br> In total, you spent: <b>$${myBudget.amountSpent}</b>`);
                this.foodSpent += parseFloat(spendInput.value);
                //transactionHistory.innerHTML += (`<br> In the Food catagory, you have spent: <b>$${myBudget.foodSpent}</b>`); //log how much was spent in this catagory
                // transactionHistory.innerHTML += (`<br>AVAILABLE MONEY: <b>$${myBudget.balance.value}</b>`);
                foodOutput.innerHTML = (`Total Spent on Food: <b>$${myBudget.foodSpent}</b>`); //The user should be able to see how much money is being spent on each of the four categories.
                //The code that makes the balance show up next to the beginning budget
                this.balanceOutput = document.getElementById("balanceOutput"); //get the h2 that will store the balance Output
                this.balanceOutput.innerHTML = `Remaining Available Balance: <span id="largeNumbers">$${Math.round(myBudget.balance.value * 100) / 100}</span>`; //output the beginning budget
            }
    
            if ( clothingCheckbox.checked === true ) { //if it was clothing
                transactionHistory.innerHTML += (`<br>You just spent <b>$${this.spendInput.value}</b> on Clothing`);
                // transactionHistory.innerHTML += (`<br> In total, you spent: <b>$${myBudget.amountSpent}</b>`);
                this.clothingSpent += parseFloat(spendInput.value);
                //transactionHistory.innerHTML += (`<br> In the Clothing catagory, you have spent: <b>$${myBudget.clothingSpent}</b>`); //log how much was spent in this catagory
                // transactionHistory.innerHTML += (`<br>AVAILABLE MONEY: <b>$${myBudget.balance.value}</b>`);
                clothingOutput.innerHTML = (`Total Spent on Clothing:<b>$${myBudget.clothingSpent}</b>`); //The user should be able to see how much money is being spent on each of the four categories.
                //The code that makes the balance show up next to the beginning budget
                this.balanceOutput = document.getElementById("balanceOutput"); //get the h2 that will store the balance Output
                this.balanceOutput.innerHTML = `Remaining Available Balance: <span id="largeNumbers">$${Math.round(myBudget.balance.value * 100) / 100}</span>`; //output the beginning budget
            }
    
            if ( billsCheckbox.checked === true ) { //if it was bills
                transactionHistory.innerHTML += (`<br>You just spent <b>$${this.spendInput.value}</b> on Bills`);
                // transactionHistory.innerHTML += (`<br> In total, you spent: <b>$${myBudget.amountSpent}</b>`);
                this.billsSpent += parseFloat(spendInput.value);
                //transactionHistory.innerHTML += (`<br> In the Bills catagory, you have spent: <b>$${myBudget.billsSpent}</b>`); //log how much was spent in this catagory
                // transactionHistory.innerHTML += (`<br>AVAILABLE MONEY: <b>$${myBudget.balance.value}</b>`);
                billsOutput.innerHTML = (`Total Spent on Bills: <b>$${myBudget.billsSpent}</b>`); //The user should be able to see how much money is being spent on each of the four categories.
                //The code that makes the balance show up next to the beginning budget
                this.balanceOutput = document.getElementById("balanceOutput"); //get the h2 that will store the balance Output
                this.balanceOutput.innerHTML = `Remaining Available Balance:<span id="largeNumbers">$${Math.round(myBudget.balance.value * 100) / 100}</span>`; //output the beginning budget
            }
        }
        spendInput.value = 0; //reset
        this.totalSpentOutput = document.getElementById("totalSpentOutput");
        this.totalSpentOutput.innerHTML = `Total Spent: <span id="largeNumbers">$${myBudget.amountSpent}</span>`;
        
    }


    saveBudget(){
        // saveBudgetButton = document.getElementsByClassName(".saveBudget").disabled = true;
        
        //when the saveBudget button is pressed, the budget entry area needs to disapear
        let budgetEntry = document.getElementById("budgetEntry");
        budgetEntry.classList.toggle("invisible");
        

        let spendArea = document.getElementById("spendArea");
        spendArea.classList.toggle("visible");

        let transactionHistoryArea = document.getElementById("transactionHistoryArea");
        transactionHistoryArea.classList.toggle("visible");

        this.budgetOutput = document.getElementById("budgetOutput"); //get the h2 that will store the budget output
        this.budgetOutput.innerHTML = `Your Original Budget was: <span id="largeNumbers">$${this.budgetInput.value}</span><br>`; //output the beginning budget      
    }
} // end class Budget

let budgetInput = document.getElementById("budgetInput");
let myBudget = new Budget(); // <---a varible being assigned to a new object. the object is based off the class, defined above. Starting off with 5 monies