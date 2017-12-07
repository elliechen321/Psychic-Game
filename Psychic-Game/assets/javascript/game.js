var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "_"];

    // Creating variables to hold the number of wins, losses, and ties. They start at 0.
    var wins = 0;
    var losses = 0;
    var guesses = 9;
    var guessesleft = 9;
    var guessedletters = [];
    var lettertoguess = null;

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      console.log(computerGuess);


    var updateGuessesLeft = function() {

      document.querySelector("#guessLeft").innerHTML = "Guesses left: " + guessesleft;
    }

    var updateLetterToGuess = function() {

      this.lettertoguess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
    }

    var updateGuessesSoFar = function () {
      document.querySelector("#let").innerHTML = "Your guesses so far:" + guessedletters.join(', ');
    }

    var reset = function () {

      totalGuesses = 9;
      guessesleft = 9;
      guessedletters = [];

      updateLetterToGuess();
      updateGuessesLeft();
      updateGuessesSoFar();
    }

    updateLetterToGuess();
    updateGuessesLeft();


document.onkeyup = function(event) {

    guessesleft--;

  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

  guessedletters.push(userGuess);
  updateGuessesLeft();
  updateGuessesSoFar();
      

      if (guessesleft > 0) {     

      if (userGuess === lettertoguess) {
        
          wins++;
          document.querySelector("#wins").innerHTML = "Wins: " + wins;
          reset();
      }

    }

      else if (guessesleft === 0){

        losses++;
        document.querySelector("#losses").innerHTML = "Losses: " + losses;
        reset(); }

      }

        
        

    
    
