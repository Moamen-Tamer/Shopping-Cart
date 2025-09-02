const prompt = require("prompt-sync")();

let taxRate = 0.15;

let cart = [50, 100, 25];

function isYes(input) {
    return ["y", "yes", "yeah", "yup"].includes(input);
}

function isNo(input) {
    return ["n", "no", "nope", "nah"].includes(input);
}

function calculatePrice (cart) {
    let price = cart.reduce((sum, price) => sum + price, 0);
    return priceBasedDiscount(price);
}

function calculateTax (cart, taxRate) {
    return calculatePrice(cart) * taxRate;
}

function calculateTaxedPrice (cart, taxRate) {
    return calculatePrice(cart) + calculateTax(cart, taxRate);
}

function changeTax () {
    let newRate = Number(prompt("The new tax is: "));
    
    if (isNaN(newRate) || newRate < 0 || newRate === taxRate) {
        console.log("invalid input ... old tax restored");
        return taxRate;
    }

    return newRate;
}

function discountTax () {
    let newRate = taxRate - 0.05;
    return newRate;
}

function moneyInfo() {
    console.log(`Price (without taxes): ${calculatePrice(cart)} $`);
    console.log(`Tax: ${calculateTax(cart, taxRate).toFixed(2)} $`);
    console.log(`Price (with taxes): ${calculateTaxedPrice(cart, taxRate).toFixed(2)} $`);
}

function moneyHistory() {
    console.log(`Price (with taxes): ${calculateTaxedPrice(cart, taxRate + 0.05).toFixed(2)} $   ---into--->   ${calculateTaxedPrice(cart, taxRate).toFixed(2)} $`);
}

function cartEdit (cart) {
    let answer = prompt("Do you need to edit your cart? ").toLowerCase();

    function cartEditHelper (cart) {
        if (isYes(answer)) {
            let action = prompt("add or remove: ").toLowerCase();

            if (action === "add") {
                let itemToAdd = Number(prompt("you need to add: "));
                cart.push(itemToAdd);
                console.log(`${itemToAdd} has been added to the cart.`);
            } else if (action === "remove") {
                let itemToRemove = Number(prompt("you need to remove: "));
                cart = cart.filter(nums => nums !== itemToRemove);
                console.log(`${itemToRemove} has been removed from the cart.`);
            } else {
                console.log("Invalid action. Please type 'add' or 'remove'.");
                return cartEditHelper(cart, answer);
            }
        } else if (isNo(answer)) {
            console.log("Thanks for using our function !");
            return cart;
        } else {
            console.log(`invalid input, please use "yes" or "no" ...`);
            return cartEdit(cart);
        }

        let repeatProcess = prompt("one more? ").toLowerCase();

        if (isYes(repeatProcess)) {
            return cartEditHelper(cart);
        } else if (isNo(repeatProcess)) {
            console.log("Thanks for using our function !");
            return cart;
        } else {
            console.log(`invalid input, end of function...`);
            return cart;
        }
    }

    return cartEditHelper(cart);
}

function discount (cart) {
    let answer = prompt("Do you have a discount coupon? ");

    function discountHelper (cart) {
        if (isYes(answer)) {
            let coupon = prompt("Enter you coupon: ");

            if (coupon.length === 7) {
                console.log("you got a 33% discount on your taxes")
                taxRate = discountTax();
                moneyHistory();
            } else {
                return "invalid coupon.";
            }

        } else if (isNo(answer)) {
            console.log("Thanks for using our function !");
            return cart;
        } else {
            console.log(`invalid input, please use "yes" or "no" ...`);
            return discountHelper();
        }
    }

    return discountHelper();
}

function priceBasedDiscount (price) {
    if (price >= 900) {
        let newPrice = price * 0.9;
        return newPrice;
    } else {
        return price
    }
}

function dash () {
    console.log(`-----------------------------`);
}

moneyInfo();
dash();

let total = calculateTaxedPrice(cart, taxRate);
console.log(`Price (with taxes): ${total} $`)
dash();

taxRate = changeTax();
console.log(`Tax: ${calculateTax(cart, taxRate)} $`);
console.log(`Price (with taxes): ${calculateTaxedPrice(cart, taxRate)} $`);
dash();

console.log(cart);
dash();``

cart = cartEdit(cart);
dash();

console.log(cart);
dash();

cart = discount(cart);
dash();


console.log("Thanks for using our program !");
