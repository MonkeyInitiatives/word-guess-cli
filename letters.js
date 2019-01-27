function Letters(letter){
    this.character = letter;
    this.wasGuessed = false;
    this.returnLetter = function(){
        if(this.wasGuessed){
            return this.character+" ";
        }
        else{
            return "_ ";
        }
    };
    this.checkLetter = function(letterCheck){
        if(this.character===letterCheck || this.character===" "){
            this.wasGuessed = true;
        }
    }
}
module.exports = Letters;