function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

let currentOp = -1;
let operand1;
 //function that display value
 function dis(val)
 {
    document.getElementById("result").value+=val;
    
 }

 function operate(op, operand2){
    let result;
    switch(op){
        case '+':
            result = add(operand1, operand2);
            break;
        case '-':
            result = subtract(operand1, operand2);
            break;
        case '*':
            result = multiply(operand1, operand2);
            break;
        case '/':
            result = divide(operand1, operand2);
            break;
        default:
            console.log('error');
    }
    currentOp = -1;
    return result;
}

 function setOp(op){
    operand1 = document.getElementById("result").value;
    if(op != -1){
        operand1 = operate(currentOp, val);
    }
    currentOp = op;
    console.log(operand1);
    console.log(currentOp);
    document.getElementById("result").value = op;
 }
 //function that evaluates the digit and return result
 function solve()
 {
     let prev = document.getElementById("result").value;
     let y = operate(currentOp, prev);
     document.getElementById("result").value = y
 }
   
 //function that clear the display
 function clr()
 {
     document.getElementById("result").value = "";
    currentOp = "";
    operand1 = "";
 }