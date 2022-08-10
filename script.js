const operators = document.querySelectorAll(".operators");
const numbers = document.querySelectorAll(".numbers");
const display = document.querySelector(".display");
const equal = document.getElementById("=")

operators.forEach(operator => operator.addEventListener('click', show))
numbers.forEach(number =>  number.addEventListener('click',numChoice))

let flag = false;
let numberSelection;

function numChoice(e){
    if(flag == false){
        numberSelection = e.target.id;
        flag = true;
    }else {
       numberSelection = numberSelection  + e.target.id;
    }
    display.textContent = numberSelection;
    }

let numOne;
let numTwo;
let operation;
let formula = false;

function show(e){
    let operation = e.target.id;
    let numOne = numberSelection;
    if(formula == false){
        display.innerHTML='';
        formula = true;
    }else{
        let numTwo = numberSelection;
    }
    
    let numTwo = numberSelection;
    display.textContent='';
   
    operate(numOne,operation,numTwo);
}
  

function add (numOne,numTwo){
   return numOne  + numTwo;
}

function subtract(numOne,numTwo){
    return numOne - numTwo;
}

function multiply(numOne,numTwo){
    return numOne * numTwo;
}

function divide(numOne,numTwo){
    return numOne / numTwo;
}


// let x = a string and send that string through a loop and
//like the fibonacci seq for multiply
function operate(numOne, operation, numTwo){

    if(operation == '+'){
        let answerAdd = add(numOne,numTwo);
        display.textContent = answerAdd;
    } else if(operation == '-'){
        let answerSub = subtract(numOne,numTwo);
        display.textContent = answerSub;
    } else if(operation == '*'){
        let answerMulti = multiply(numOne,numTwo);
        display.textContent = answerMulti;
    } else if(operation == '/'){
        let answerDivide = divide(numOne,numTwo);
        display.textContent = answerDivide;
    }
}

document.getElementById('clear').addEventListener('click', refresh)
function refresh(){
    window.location.reload(true)
}

