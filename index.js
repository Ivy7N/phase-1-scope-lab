// Declare customerName in the global scope using var
var customerName = "bob";

// You can access customerName from anywhere in your code
console.log(customerName); // Output: "bob"

customerName = "bob";

function upperCaseCustomerName() {
    if(typeof customerName === "string") {
        customerName = customerName.toUpperCase();
    }
}

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer(newCustomer) {
    bestCustomer = newCustomer;
}

const leastFavoriteCustomer = "Peter"; 

function changeLeastFavoriteCustomer(newCustomer) {
    leastFavoriteCustomer = newCustomer;
}
