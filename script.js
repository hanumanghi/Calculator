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
  // numberSele = string so figure out how to splice before and after operate
  //might have to store operator under different function
    }


function show(e){
    display.innerHTML = "";
    let numOne = numberSelection;
    let operation = e.target.id;
    console.log(numOne);
    console.log(operation);
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
   
for(let i = 0; i < operation.length; i++)
  {  if(operation == '+'){
        let answerAdd = add(x,y);
        console.log(answerAdd);
    } else if(operation == '-'){
        let answerSub = subtract(x,y);
        console.log(answerSub);
    } else if(operation == '*'){
        let answerMulti = multiply(x,y);
        console.log(answerMulti);
    } else if(operation == '/'){
        let answerDivide = divide(x,y);
        console.log(answerDivide);
    }
    }
}
document.getElementById('clear').addEventListener('click', refresh)
function refresh(){
    window.location.reload(true)
}

