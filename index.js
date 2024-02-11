//for mastercard the first digit is 5 with 16 digits
//for visa card the first digit is 4 with 16 digits
//credit card must follow this pattern "5555-5555-5555-4444" for legibility
function validateCreditCard(cardNumber) {
    let CARD_LENGTH = 19;
    let creditCardRegex = /^\d{4}-\d{4}-\d{4}-\d{4}$/.test(cardNumber);
    if (cardNumber.length !== CARD_LENGTH) {
        return `card number must be 16 digits.`;
    }
    if ((isVisa(cardNumber) || isMasterCard(cardNumber)) && creditCardRegex) {
        console.log(`credit card is valid`);
    }
    else {
        console.log(`invalid credit card.`);
    }
}
function isVisa(cardNumber) {
    return cardNumber.startsWith("4");
}
function isMasterCard(cardNumber) {
    return cardNumber.startsWith("5");
}
//valid input
validateCreditCard("5555-5555-5555-4444");
console.log();
//invalid input
validateCreditCard("3555-5555-5555-4444");
console.log();
//invalid input
console.log(validateCreditCard("5555-5555-5555-444999"));