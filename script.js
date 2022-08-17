const operators = document.querySelectorAll(".operators");
const numbers = document.querySelectorAll(".numbers");
const display = document.querySelector(".display");

operators.forEach(operator => operator.addEventListener('click',show));
numbers.forEach(number =>  number.addEventListener('click',numChoice));

let flag = false;
let numberSelection = '';

function numChoice(e){
    if(flag == false){
        numberSelection = e.target.id;
        flag = true;
    }else {
       numberSelection = numberSelection + e.target.id;
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
    document.getElementById('decimal').disabled=false
} else{
        let secondNum = Number(display.textContent);
        numTwo = secondNum;
        currentSolution = operate(numOne,currentOperation,numTwo);
        numberSelection = '';
        document.getElementById('decimal').disabled=false;
        if(currentSolution !== null){
             numOne = Number(display.textContent);
             currentOperation = e.target.id;
             numTwo = null;
             currentSolution = null;
        }
    }
}

function period(){
    numberSelection += '.';
    if(numberSelection.includes('.')){
        document.getElementById('decimal').disabled=true;
    }
    display.textContent = numberSelection;
}

function erase(){
    numberSelection = numberSelection.slice(0,-1);
   display.textContent = numberSelection;
   
}

function roundTotal(number){
    return Math.round(number * 1000) / 1000;
}

function add (numOne,numTwo){
   return numOne + numTwo;
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
    if(currentOperation == '+'){
        let answer = add(numOne,numTwo);
        display.textContent = roundTotal(answer);
        return roundTotal(answer);
    } else if(currentOperation == '-'){
        let answer = subtract(numOne,numTwo);
        display.textContent = roundTotal(answer);
        return roundTotal(answer);
    } else if(currentOperation == '*'){
        let answer = multiply(numOne,numTwo);
        display.textContent = roundTotal(answer);
        return roundTotal(answer);
    } else if(currentOperation == '/'){
        let answer = divide(numOne,numTwo);
        if(numTwo === 0){
            return display.textContent = 'ERROR'
        }else{
        display.textContent = roundTotal(answer);
        return roundTotal(answer);
        }
    }
}

document.getElementById('equal').addEventListener('click', operate())
document.getElementById('clear').addEventListener('click', refresh)
document.getElementById('decimal').addEventListener('click',period)
document.getElementById('delete').addEventListener('click',erase)

function refresh(){
    window.location.reload(true)
} 

window.addEventListener('keydown',keyboardButtons)

function keyboardButtons(e){
   if(e.key >= '0' && e.key <= '9'){
    numberSelection += e.key;
    display.textContent = numberSelection;
   }if(e.key === '=' || e.keyCode === 'ENTER'){
    operate() ;
   }if(e.key === '.'){
    period(e.key);
   }if(e.key === 'Backspace'){
    erase(e);
   }
   if(e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/')
   { if(currentOperation === null){
    let firstNum = Number(display.textContent);
    display.innerHTML = '';
    currentOperation = e.key;
    numOne = firstNum;
    numberSelection = '';
    document.getElementById('decimal').disabled=false
} else{
        let secondNum = Number(display.textContent);
        numTwo = secondNum;
        currentSolution = operate(numOne,currentOperation,numTwo);
        numberSelection = '';
        document.getElementById('decimal').disabled=false;
        if(currentSolution !== null){
             numOne = Number(display.textContent);
             currentOperation = e.key;
             numTwo = null;
             currentSolution = null;
            }
     }
    }
}



// key . disable
// key "=" to work