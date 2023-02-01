
function calculate(first_number, operator, second_number) {
    switch (operator) {
        case "+":
            return first_number + second_number
        case "-":
            return first_number - second_number
        case "*":
            return first_number * second_number
        case "/":
            return first_number / second_number
        default:
            console.log("Wrong!")
            break
    }
}
console.log("Hello")

var first_number = parseFloat(prompt("Enter a number:"));

var operator = prompt("Enter an operator:\n (+, -, *, /):");

var second_number = parseFloat(prompt("Enter another number:"));

var result = calculate(first_number, operator, second_number)
alert("Result: " + result);