
let num1 = +prompt('Enter your first number?');
let num2 = +prompt('Enter your second number?');
let operater = prompt('Plz select operater (+ - * /');
let calculate = 0;


if(operater === '+') {
    calculate = num1 + num2
}else if (operater === "-") {
   calculate = num1 - num2
}else if(operater === '*') {
   calculate = num1 * num2
}else if(operater === "/") {
   calculate = num1 / num2
}else {
    document.write('Plz Enter your correct operater')
}
document.write("Result " + calculate)