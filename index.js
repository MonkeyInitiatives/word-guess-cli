var inquirer = require("inquirer");

var Word = require("./word.js");

var wordArray = ["Chungking Express", "There Will Be Blood", "The Godfather", "Space Jam", "Titanic"];
var theWord = {};
var guessesRemaining = 10;
var score = 0;
var previousGuesses=[];

function newGame(){
    guessesRemaining=10;
    previousGuesses=[];
    theWord = new Word(wordArray[Math.floor(Math.random() * wordArray.length)].toLowerCase());
    theWord.checkEveryLetter();
    gameLoop();
}

function gameLoop(){
    var number1 = numberOfLettersMissing();
    console.log("\n"+theWord.returnWord()+"\n");
    inquirer.prompt([
        {
            name: "guess",
            message: "Guess a letter!"
        }
        ]).then(function(answers) {

        theWord.checkEveryLetter(answers.guess.toLowerCase());
        console.log("\n"+theWord.returnWord());
        if(number1===numberOfLettersMissing()&&theWord.returnWord().indexOf(answers.guess)===-1&&!previousGuesses.includes(answers.guess)){
            updateGame("wrong");
        }
        else if(previousGuesses.includes(answers.guess)){
            updateGame("duplicate");
        }
        else{
            updateGame("correct");
        }
        previousGuesses.push(answers.guess);
    });
}

function updateGame(wasGuessed){
    if(wasGuessed==="correct"){
        console.log("\nCorrect!!");
    }
    else if(wasGuessed==="wrong"){
        console.log("\nWrong!!");
        guessesRemaining--;
        console.log("\n"+guessesRemaining+" guesses remaining!!");
    }
    else{
        console.log("\nYou guessed that already!!");
    }
    checkEndGame();
}

function checkEndGame(){
    if(guessesRemaining===0)
    {
        score--;
        console.log("\nYou Lost! You're score is " +score+ ". Next word!!");
        newGame();
    }
    else if(numberOfLettersMissing()===0){
        score++;
        console.log("\nYou got it right! You're score is " +score+ ". Next word!!");
        newGame();
    }
    else{
        gameLoop();
    }
}

function numberOfLettersMissing(){
    var lettersMissing = 0;
    for(var i = 0; i<theWord.letterArray.length; i++){
        if(!theWord.letterArray[i].wasGuessed){
            lettersMissing++;
        }
    }
    return lettersMissing;
}

newGame();