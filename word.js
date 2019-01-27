var Letters = require("./letters");

function Word(theWord){
    this.letterArray = [];
    for(var i = 0; i<theWord.length; i++){
        this.letterArray.push(new Letters(theWord.charAt(i)));
    }
    this.returnWord = function(){
        var theString = "";
        for(var i = 0; i<this.letterArray.length; i++){
            theString = theString+this.letterArray[i].returnLetter();
        }
        return theString;
    }
    this.checkEveryLetter = function(theLetter){
        for(var i = 0; i<this.letterArray.length; i++){
            this.letterArray[i].checkLetter(theLetter);
        }
    }
}
module.exports = Word;