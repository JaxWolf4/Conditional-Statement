var containerEle = document.body.querySelector(".container");
var num1 = Number(prompt("Input number 1"));
if(isNaN(num1)){
    containerEle.innerHTML= num1 + " Not a Number.";
    process.exit;}
var num2 = Number(prompt("Input number 2"));
if(isNaN(num2)){
    containerEle.innerHTML= num2 + " Not a number.";
    process.exit;}
var o = (prompt("Input the operator"));
if (o == '-'){
  containerEle.innerHTML=num1-num2;
}else if (o == '*'){
  containerEle.innerHTML=num1*num2;
}else if (o == '/'){
  containerEle.innerHTML=num1/num2;
}else if (o == '+'){
  containerEle.innerHTML=num1+num2;
}else{
document.write(o + " is not an operator.");
process.exit;}