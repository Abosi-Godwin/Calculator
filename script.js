//select the input and output display element
let input =   document.querySelector('.inputs');
let output =   document.querySelector('.outputs');

//selecting the functional and mathematics buttons
let clear = document.querySelector('.c');
let del = document.querySelector('.del');
let equal = document.querySelector('.equal');


//select the input button elements 
const inputValue = document.querySelectorAll(".input");

inputValue.forEach(e => {
 
 e.addEventListener("click", () => {
 input.textContent += e.value;
 })

});

//clear input field
clear.addEventListener("click", function () {
input.textContent ="";
output.textContent ="";
  
if(output.textContent === "") {
  input.style.fontSize = '45px';
}
else{
  input.style.fontSize = '18px';
}
});

//delete numbers 
del.addEventListener("click", () => {

input.textContent = (input.textContent).substring(0, (input.textContent).length-1);
output.textContent = '';
input.style.fontSize = '40px';
if (input.textContent.length === 0) {
  output.textContent = "";
}
});

//evaluate the arithmetic 
equal.addEventListener("click", function () {
  let theinput = eval(input.textContent);
  
  output.textContent = Math.trunc(theinput);
    
if(output.textContent === "") {
  input.style.fontSize = '45px';
}
else{
  input.style.fontSize = '18px';
}
})