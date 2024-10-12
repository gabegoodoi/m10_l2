
// Exploring Conditional Statements and Loops


// Task 1: Implement a conditional statement to check if a user is logged in.

let isLoggedIn = true;


// Task 2: If they are logged in, loop over the 'cart' array below and log the list of available products to the user. 

let cart = ['laptop', 'keyboard', 'mouse', 'monitor']

if (isLoggedIn) {
    for (const product in cart) {
        console.log("Cart Item", Number(product) + 1 + ":", cart[product])
    }
} else { // If they are not logged in, tell the user they will need to log in before they can view their cart.
    console.log("Log in to view cart.")
}


// Exploring Functions in JavaScript

// Task 1: Create a function to handle deposits into a bank account. Essentially, adding money to your bank account.

let accountBalance = 100;

function deposit(moolah) {
    accountBalance += moolah;
    return console.log('Deposit successful. Your new balance is:', "$" + accountBalance + "\nYou deposited: $" + moolah);
}

// Task 2: Implement a function to handle withdrawals from a bank account. Essentially, taking money out of your bank account.

function withdrawal(moolah) {
    accountBalance -= moolah;
    return console.log('Withdrawal successful. Your new balance is:', "$" + accountBalance + "\nYou withdrew: $" + moolah);
}

// Task 3: Develop a function to check the current balance of the account. Lastly, show much much money you have left.

function checkBalance(account) {
    return console.log("Your account balance is:", "$" + account)
}

checkBalance(accountBalance)
deposit(30)
withdrawal(80)
checkBalance(accountBalance)