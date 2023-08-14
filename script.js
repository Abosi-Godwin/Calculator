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
 input.innerHTML += e.value;
 })

});

//clear input field
clear.addEventListener("click", function () {
input.innerHTML ="";
output.innerHTML ="";
  
if(output.innerHTML === "") {
  input.style.fontSize = '45px';
}
else{
  input.style.fontSize = '18px';
}
});

//delete numbers 
del.addEventListener("click", () => {

input.innerHTML = (input.innerHTML).substring(0, (input.innerHTML).length-1);
output.innerHTML = '';
input.style.fontSize = '40px';
if (input.innerHTML.length === 0) {
  output.innerHTML = "";
}
});

//evaluate the arithmetic 
equal.addEventListener("click", function () {
  let theinput = eval(input.innerHTML);
  
  output.innerHTML = Math.trunc(theinput);
    
if(output.innerHTML === "") {
  input.style.fontSize = '45px';
}
else{
  input.style.fontSize = '18px';
}
})