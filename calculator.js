
function calculate(first_number, operator, second_number) {
    if (operator == "+") {
        return first_number + second_number
    }
    else if (operator == "-") {
        return first_number - second_number
    }
    else if (operator == "*") {
        return first_number * second_number
    }
    else if (operator == "/") {
        return first_number / second_number
    }
    else {
        alert("The operator you enter is not valid")
    }      
}

console.log("Hello")

var first_number = parseFloat(prompt("Enter the first number: "));

var operator = prompt("Enter an operator:\n (+, -, *, /):");

var second_number = parseFloat(prompt("Enter the second number: "));

var answer = calculate(first_number, operator, second_number)
alert("Result: " + answer);