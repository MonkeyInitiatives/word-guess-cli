# word-guess-cli


### Overview

This is a simple node application that runs from the command line. A random movie title is chosen from an array and the user must type in letters to guess the movie title. If the player guesses the word correctly, they get a point. If a player guesses an incorrect letter, they lose a guess and keep playing until they run out of their 10 free guesses. If they fail to guess the word at that time, they lose a point. 

## How to run and play

The package.json file must be installed, which will install the node dependencies (inquirer). Then, the player invokes the game from the command-line as follows:

	* node index.js
	
From there, a random word is presented to the player. The player then types a letter and presses return. If the letter is in the word, it is displayed and the game continues. If the letter is not in the word, it is not displayed in the word, the number of guesses remaining for the user decreases, and if possible, the user enters in a new letter. Duplicate guesses are not counted, and all stats are reset when a new game starts and a new word is chosen randomly.
