const operators = document.querySelectorAll(".operators");
const numbers = document.querySelectorAll(".numbers");
const display = document.querySelector(".display");

operators.forEach(operator => operator.addEventListener('click',operate));
numbers.forEach(number =>  number.addEventListener('click',show))

function show(e){
    let numberSelection  = e.target.id;
    
    display.textContent = numberSelection;
}
function add (x,y){
   return x + y;
}

function subtract(x,y){
    return x - y;
}

function multiply(x,y){
    return x * y;
}

function divide(x,y){
    return x / y;
}

// let x = a string and send that string through a loop and
//like the fibonacci seq for multiply
function operate(e){
    let operation = e.target.id;
    let x = 12;
    let y = 4;
    
    if(operation == '+'){
        let answer = add(x,y);
        console.log(answer);
    } else if(operation == '-'){
        let answer = subtract(x,y);
        console.log(answer);
    } else if(operation == '*'){
        let answer = multiply(x,y);
        console.log(answer);
    } else if(operation == '/'){
        let answer = divide(x,y);
        console.log(answer);
    }
}
