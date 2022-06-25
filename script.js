let firstNumber = prompt("Enter your first number");
let operator = prompt("choose your operator below; \n enter + to add \n enter - to subtract \n enter * to multiply \n enter / to divide");
let secondNumber = prompt("Enter your second number");
let result;
function numberValid(){
    if(isNaN(firstNumber) && isNaN(secondNumber)){
    alert ("Both numbers entered(" + firstNumber + " and " + secondNumber +") are either not a number or valid number format");
} else if (isNaN(firstNumber)){
    alert ("The first number entered(" + firstNumber +") is not a number or valid number format");
} else if(isNaN(secondNumber)){
    alert ("The second number entered(" + secondNumber +") is not a number or valid number format");
} else {
    return true;
}
};
numberValid();
function output(a, b, sign){
    if(sign === '+'){
        result = Number(a) + Number(b);
    } else if(sign === '-'){
        result = Number(a) - Number(b);
    } else if(sign === '*'){
        result = Number(a) * Number(b);
    } else if (sign === '/'){
            result = Number(a) / Number(b);
    } else {
        alert("Oops!!! Kindly start again and enter correct operator(+,-,*,/)");
    }
}
function isValid(c){
    if(c && numberValid){
    alert("Your result is " + result);

}
}
output (firstNumber, secondNumber, operator);
isValid(result);

const button = document.getElementById("root");
const click = document.getElementsByClassName("click")[0];
click.addEventListener('click', ()=>{
    firstNumber = prompt("Enter your first number");
    operator = prompt("choose your operator below; \n enter + to add \n enter - to subtract \n enter * to multiply \n enter / to divide");
    secondNumber = prompt("Enter your second number");
function numberValid(){
    if(isNaN(firstNumber) && isNaN(secondNumber)){
    alert ("Both numbers entered(" + firstNumber + " and " + secondNumber +") are either not a number or valid number format");
} else if (isNaN(firstNumber)){
    alert ("The first number entered(" + firstNumber +") is not a number or valid number format");
} else if(isNaN(secondNumber)){
    alert ("The second number entered(" + secondNumber +") is not a number or valid number format");
} else {
    return true;
}
};
numberValid();
function output(a, b, sign){
    if(sign === '+'){
        result = Number(a) + Number(b);
    } else if(sign === '-'){
        result = Number(a) - Number(b);
    } else if(sign === '*'){
        result = Number(a) * Number(b);
    } else if (sign === '/'){
            result = Number(a) / Number(b);
    } else{
        alert("Oops!!! Kindly start again and enter correct operator(+,-,*,/)");
    }
}
function isValid(c){
    if(c){
    alert("Your result is " + result);

}
}
output (firstNumber, secondNumber, operator);
isValid(result);
})