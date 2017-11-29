// Pseudocode of the Game
// Generate random number for guesser to reach
// give generic number for each jewels
// create a divition for adding number by clicking jewels
// displat total score for jewels
// Alert user if they won the game 
// alert user if the lose the game
// reset random numbers to guesser
// reset after game over total score 
// create reset game Button
// create instruct button to teach how to play
// put some animations to buttons
// make some sound for each jewel seperately


var randomNumberToBeGuessed = "";
var amber;
var black;
var blue;
var red;
var yellow;


 $(document).ready(function() {
      // Initial Variables
      var yourPick = 0;
      var computerPick = Math.floor(Math.random() * 40) + 10;
      var amber = Math.floor(Math.random() * 10) + 2;
      var black = Math.floor(Math.random() * 10) + 3;
      var blue = Math.floor(Math.random() * 10) + 4;
      var red = Math.floor(Math.random() * 20) - 1;
      var yellow = Math.floor(Math.random() * 30) - 2;

      var lockGame = false;
      // We log the computer's pick to console to make it easier to troubleshoot
      console.log("Computer Pick: " + computerPick);

       // We then reveal the computer's pick in the html
       //and consolo log all the values of Jewels
        $('#computer-pick').text(computerPick);
        $('#amber').html(amber);
        console.log("Amber: " + amber);
        $('#result').html(black);
        console.log("Black: " + black);
        $('#result').html(blue);
        console.log("Blue: " + blue);
        $('#result').html(yellow);
        console.log("Red: " + red);
        $('#result').html(red);
        console.log("Yellow: " + yellow);

      
      $('#amber').on("click", function() {

        console.log(this);

        $("#result").append(amber);

      });

      $('#blue').on("click", function() {

        console.log(this);

        $("#result").append(blue);

      });

      $('#red').on("click", function() {

        console.log(this);

        $("#result").append(red);

      });

      $('#black').on("click", function() {

        console.log(this);

        $("#result").append(black);

      });

      $('#yellow').on("click", function() {

        console.log(this);

        $("#result").append(yellow);

      });


      // Here we create the on click event that gets the user"s pick
      	$("button").on("click", function() {
        // Here this lockGame line prevents the user from changing the option after the game is done.
        if (lockGame !== true) {
          // We get the value associated with the button the user picked from here
          yourPick = $(this).attr("value");
          console.log("Your Pick: " + yourPick);
         
		// $("#amber").on("click", function() {
		//   $("#amber").text(result);
		// });
		// console.log()
		// $("#black").on("click", function() {
		//   $("#black").text(result);
		// });
		// console.log()
		// $("#blue").on("click", function() {
		//   $("#blue").text(result);
		// });
		// console.log()
		// $("#red").on("click", function() {
		//   $("#red").text(result);
		// });
		// console.log()
		// $("#yellow").on("click", function() {
		//   $("#yellow").text(result);
		// });
		// console.log()


          // If your pick matched the computer's pick you let them know.
          if (parseInt(yourPick) === computerPick) {
            $("#result").text("Yep! You got it! Refresh the page to play again.");
            lockGame = true;
          }
          // If the numbers did not match. You also let them know
          else {
            $("#result").text("Nope. Refresh the page to play again.");
            lockGame = true;
          }
        }
      });
    });


 
// //Hangman codes

// var words = ["napa", "san francisco", "walnut creek" , "sunnyvale" , "palo alto" , "stanford" , "san jose" , "redwood city"];
// var randomWord = "";
// var lives;
// var winCounter;
// var guesses;
// var indexChecker;
// var gamesWon = 0;
// var donutBite = 0;

// // ***PICKS A RANDOM WORD FROM ARRAY***
// function generateRandomWord() {
//     randomWord = words[Math.floor(Math.random() * (words.length))];
// }
// // ***ADD UNDERSCORES BASED ON WORD LENGTH***
// function addSpaces(randomWord) {
//     for (var i = 0; i < randomWord.length; i++) {
//         if (randomWord[i] != " ") {
//             $("<span class='letters'>").text("_ ").appendTo("#chalk");
//         } else {
//             $("<span class='letters'>").html('&nbsp&nbsp&nbsp;').appendTo("#chalk");
//             winCounter++;
//         }
//     }
// }
// // ***CHECKS FOR MATCH AND PUSHES INDEX INTO AN ARRAY***
// function guessMatch(userGuess) {
//     for (k = 0; k < randomWord.length; k++) {
//         if (randomWord[k] == userGuess) {
//             indexChecker.push(k);
//             winCounter++;
//         }
//     }
// }
// // ***CHANGES UNDERSCORES TO GUESSED LETTERS***
// function appearLetters(indexChecker, userGuess) {
//     var donutParam = (donutBite * (-172))
//     if (indexChecker.length > 0) {
//         for (j = 0; j < indexChecker.length; j++) {
//             $($('.letters')[indexChecker[j]]).text(userGuess.toUpperCase());
//         }
//     } else {
//         lives--;
//         donutBite++;
//         reduceDonut(donutParam);
//         $("#guessed").append(" " + userGuess.toUpperCase());
//         $("#lives").text(lives);
//     }
// }
// // ***CHECK FOR WIN OR LOSE CONDITION***
// function winOrLose(winCounter, lives) {
//     if (winCounter == randomWord.length) {
//         $('.theWord').text(randomWord.toUpperCase());
//         $('#winModal').modal('show');
//         gamesWon++;
//         $('#smart')[0].play();
//         newGame();
//     } else if (lives === 0) {
//         $('.theWord').text(randomWord.toUpperCase());
//         $('#doh')[0].play();
//         $('#loseModal').modal('show');
//         newGame();
//     }
// }
// // ***TRACKING TOTAL WINS***
// function winTracker() {
//     $("#gamesWon").text(gamesWon);
// }

// // ***STARTS NEW GAME***
// function newGame() {
//     resetText();
//     generateRandomWord();
//     addSpaces(randomWord);
//     winTracker();
// }
// // ***RESET TEXT***
// function resetText() {
//     lives = 9;
//     winCounter = 0;
//     guesses = [];
//     indexChecker = [];
//     donutBite = 1;
//     $("#lives").text(lives);
//     $('#chalk').text("");
//     $("#guessed").text('Your guesses:');
//     $("#donut").css("background-position", "0, 0");
// }
// // ***COMMENTING HERE TO MATCH EVERYTHING ELSE***
// function applyClickHandlers() {
//     $('.reset').click(function() {
//         newGame();
//     });
// }
// // ***MOVES SPRITE IMAGE FOR DONUT BITES***
// function reduceDonut(lives) {
//     $("#donut").css("background-position", lives + "px");
// }
// // ***CHECKS IF KEYPRESS IS A LETTER ON CHROME AND STUPID FIREFOX(OTHER METHODS ON FIREFOX REGISTERED FUNCTION KEYS)***
// function checkLetter(event) {
//     var userGuess = event.key.toLowerCase();
//     if ($("#loseModal").css("display") !== "block" && $("#winModal").css("display") !== "block") {
//         if ((event.which >= 65 && event.which <= 90) || ((event.which >= 97 && event.which <= 122)) && (guesses.indexOf(userGuess) == -1)) { 
//             guesses.push(userGuess);
//             guessMatch(userGuess);
//             appearLetters(indexChecker, userGuess);
//         }
//         winOrLose(winCounter, lives);
//         indexChecker = [];
//     }
// }
// $(document).ready(function() {
//     applyClickHandlers();
//     newGame();
//     // ***ON KEY PRESS***
//     $(document).keypress(function(event) {
//         checkLetter(event);
//     });
// });

// // auto load pop up menu

//     // $(window).load(function(){        
//     //   $('#instruct').modal('show');
//     // }); 



// // Gets Link for Theme Song
//       var audioElement = document.createElement("audio");
//       audioElement.setAttribute("sound/TheSimpsons.mp3");

//       // Theme Button
//       $(".theme-button").on("click", function() {
//       	audioElement.play();
//       });

//       $(".pause-button").on("click", function() {
//       	audioElement.pause();
//       }); 
