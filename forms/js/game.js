// this is for my truths and lie game 

//global variable
let fname = ""

function greet() {
    let greetPara = document.getElementById("greet");

    // get values from the form 
    fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let age = document.getElementById("age").value;

    greetPara.innerHTML = "Greetings " + fname + " " + lname + " you are " + age + " years old yahoo";
}

function trivia() {
    fname = document.getElementById("fname").value;

    //get handle to the result paragrpah
    let triviaAnswer = document.getElementById("trivia-answer");

    //get result of selected trivia answer (gives true or false)
    let chocolateSelected = document.getElementById("chocolate").checked;
    let tunaSelected = document.getElementById("tuna").checked;
    let honeySelected = document.getElementById("honey").checked;

    if (chocolateSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. heheheha";
    } else if (tunaSelected) {
        triviaAnswer.innerHTML = fname + ", you are wrong. heheheha";
    } else {
        triviaAnswer.innerHTML = fname + ", hip hip hooray!";
    }
}

function onelie() {
    fname = document.getElementById("fname").value;

    let oneSelected = document.getElementById("1").checked;
    let twoSelected = document.getElementById("2").checked;
    let threeSelected = document.getElementById("3").checked;

    if (oneSelected) {
        lieans.innerHTML = "hooray! youuu got it right"
    } else {
        lieans.innerHTML = fname + "isnt very splendid at this game"
    }
}

function twotruth() {
    fname = document.getElementById("fname").value;

    let fourSelected = document.getElementById("4").checked;
    let fiveSelected = document.getElementById("5").checked;
    let sixSelected = document.getElementById("6").checked;

    if (fourSelected && sixSelected) {
        truthans.innerHTML = "hooray! youuu got it right"
    } else {
        truthans.innerHTML = fname + "isnt very splendid at this game"
    }
}