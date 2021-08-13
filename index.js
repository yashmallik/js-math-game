let prob  = document.getElementById("prob");
var ques = document.getElementById("ques");
ques.innerHTML = randques();
let userValue = document.querySelector(".input2");
userValue.focus();
let myform = document.querySelector(".myform");
let afterMatch = document.querySelector(".afterMatch");
let sayResult = document.querySelector(".sayResult");
let rematchBtn = document.querySelector(".rematchBtn")
let progressBar = document.querySelector(".progress-bar")
var usercal;
var calculation;
let score = 0;
let mist = 3;

function randques(){
    let dig1 = Math.floor(Math.random()*10);
    let dig2 = Math.floor(Math.random()*10);
    let operatorArray = ["+","-","X"];
    let operator = Math.floor(Math.random()* operatorArray.length)
    let call = (operatorArray[operator]);
    if(call=="X"){
        usercal = dig1+'*'+dig2
        calculation = dig1+call+dig2;
    } else {
        usercal = dig1+call+dig2;
        calculation = dig1+call+dig2;
    } 
    return calculation
}

myform.addEventListener("submit", getAnswer)
function getAnswer(e){
    e.preventDefault();
    let answer = window.eval(usercal);
    let userAnswer = userValue.value
    if(answer == userAnswer){
        score++;
        progressBar.style.transform = `scaleX(${score/10})`
        if(score == 10){
            prob.style.filter= "blur(2px)";
            afterMatch.style.visibility = "visible";
            sayResult.innerHTML = "Great champ";
            rematchBtn.focus();
            score = 0;
            mist = 0;
        }
    }
    else{
        mist--;
        if(mist <= 0){
            prob.style.filter= "blur(4px)";
            afterMatch.style.visibility = "visible";
            sayResult.innerHTML = "Try again";
            rematchBtn.focus();
            score = 0;
            mist = 3;
        }
    }
    document.querySelector(".score").innerHTML = score
    document.querySelector(".attempts").innerHTML = mist
    ques.innerHTML = randques()
    userValue.value = ""
}


function reset() {
    prob.style.filter= "blur(0px)";
    afterMatch.style.visibility = "hidden";
    progressBar.style.transform = `scaleX(${0})`
    score = 0;
    mist = 3;
    userValue.focus();
    document.querySelector(".score").innerHTML = score;
    document.querySelector(".attempts").innerHTML = mist
    
}
