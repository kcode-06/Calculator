const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    // - add listener that listens to key stroke
    // - check if the keys / what is inputted is a Number
    // - return if not number and alert a message
 
   if(isNaN(display)){
   return alert("No letters or special characters allowed?");
   }
  display.value = eval(display);
}

function errorHandler() {
   return alert("No letters or special characters allowed?"); 
}


display.addEventListener("keydown", function (event) {

    if (!event.code.toLowerCase().includes("digit")) {
       clearDisplay()
    }

 
});