const operators = document.querySelectorAll(".operators");
const numbers = document.querySelectorAll(".numbers");
const display = document.querySelector(".display");

operators.forEach(operator => operator.addEventListener('click', show));
numbers.forEach(number =>  number.addEventListener('click',numChoice));

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
let numTwo = null;
let currentOperation = null;
let currentSolution = null;

function show(e){
    if(currentOperation === null){
    let operation = e.target.id;
    let firstNum = Number(display.textContent);
    display.innerHTML = '';
    currentOperation = operation;
    numOne = firstNum;
    numberSelection = '';
} else{
        let secondNum = Number(numberSelection);
        display.textContent = secondNum;
        numTwo = secondNum;
        currentSolution = operate(numOne,currentOperation,numTwo);
        if(currentSolution !== null){
             currentOperation = null;
             numTwo = null;
             currentSolution = null;
        }
    }
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

function operate(numOne,currentOperation,numTwo){
    let answer='';
    if(currentOperation == '+'){
        let answer = add(numOne,numTwo);
        display.textContent = answer;
        return answer;
    } else if(currentOperation == '-'){
        let answer = subtract(numOne,numTwo);
        display.textContent = answer;
        return answer;
    } else if(currentOperation == '*'){
        let answer = multiply(numOne,numTwo);
        display.textContent = answer;
        return answer;
    } else if(currentOperation == '/'){
        let answer = divide(numOne,numTwo);
        display.textContent = answer;
        return answer;
    }
}

document.getElementById('equal').addEventListener('click', operate(numOne,currentOperation,numTwo))
document.getElementById('clear').addEventListener('click', refresh)

function refresh(){
    window.location.reload(true)
}

