const $submitButton = document.getElementById("submit");
const $message = document.getElementById("message");
const $lives = document.getElementById("lives");

var guessNumber = math.round(Math.random()*100);
var lives = 10;
var message;

$submitButton.onclick = () => {
    let userInput = document.getElementById("number-input").nodeValue;
    lives--;
    if(userInput == guessNumber){
        location.href="./win.html";
    }
    else if(lives ==0){
        location.href="./lose.html";
    }
    else if(userInput > guessNumber){
        message = 'Oops !  Your guess is to high. You have ${lives} lives reamining';
    }
    else if(userInput < guessNumber){
        message = 'Oops !  Your guess is to low. You have ${lives} lives reamining';
    }
$message.style.display = "inherit";
$message.innerHTML = message;
$lives.innerHTML = lives;
};