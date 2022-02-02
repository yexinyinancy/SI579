/*
* Excercise 1
*
*/



/*
* Then write a function that changes the text and the color inside the div
*
*/
document.getElementById("color-block").onclick = changeColor;   
var currentColor = "#F08080";
function changeColor(){
    //Write a condition determine what color it should be changed to
    if(currentColor == "#F08080"){
        //change the background color using JS
        document.getElementById("color-block").style.background = "#1E90FF";
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").innerHTML = "#1E90FF";
        currentColor = "#1E90FF"
    }
    else{
        //change the background color using JS
        document.getElementById("color-block").style.background = "#F08080";
        //Change the text of the color using the span id color-name
        document.getElementById("color-name").innerHTML = "#F08080";
        currentColor = "#F08080"
    }
}


/*
* For excercise 2, you need to write an event handler for the button id "convertbtn"
* on mouse click. For best practice use addEventListener.
*
*/


/*
* Then write a function that calculates Fahrenheit to Celsius and display it on the webpage
*
*/


document.getElementById("convertbtn").onclick = convertTemp;   
function convertTemp(){
    //Calculate the temperature here
    var F = document.getElementById('f-input').value;
    var C = ((F - 32) / 1.8).toFixed(3);
    //Send the calculated temperature to HTML
    document.getElementById("c-output").innerHTML = C;
}


