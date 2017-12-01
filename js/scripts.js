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


    $(document).ready(function(){
    $("#myModal").modal('show');
     });
    

  var amber;
  var black;
  var blue;
  var red;
  var yellow;
  var counter = 0;


   $(document).ready(function() {
        // Initial Variables
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
  // Each time the user clicks the crystal the counter goes up by 1.
      counter += 1;
          console.log("You clicked this crystal " + counter + " times!");

          $("#result").append(amber);

        });

        $('#blue').on("click", function() {
  // Each time the user clicks the crystal the counter goes up by 1.
      counter += 1;
          console.log("You clicked this crystal " + counter + " times!");

          $("#result").append(blue);

        });

        $('#red').on("click", function() {
  // Each time the user clicks the crystal the counter goes up by 1.
      counter += 1;
          console.log("You clicked this crystal " + counter + " times!");

          $("#result").append(red);

        });

        $('#black').on("click", function() {
  // Each time the user clicks the crystal the counter goes up by 1.
      counter += 1;
          console.log("You clicked this crystal " + counter + " times!");

          $("#result").append(black);

        });

        $('#yellow').on("click", function() {
  // Each time the user clicks the crystal the counter goes up by 1.
      counter += 1;
          console.log("You clicked this crystal " + counter + " times!");

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



      if (result === computerPick) {

        alert("You win!");
      }

      // Here we added an "else if" condition. If the user's counter ever exceeds the computerPick...
      else if (result >= computerPick) {

        // Then they are alerted with a loss.
        alert("You lose!!");
      }

            // // If your pick matched the computer's pick you let them know.
            // if (parseInt(result) === computerPick) {
            //   $("#result").text("Yep! You got it! Refresh the page to play again.");
            //   lockGame = true;
            // }
            // // If the numbers did not match. You also let them know
            // else {
            //   $("#result").text("Nope. Refresh the page to play again.");
            //   lockGame = true;
            // }
          }
        });
      });

//some effect to perfect it

var s = c.width = c.height = 1500
  , ctx = c.getContext( '2d' )

  , opts = {
    particles: 500,
    particleBaseSize: 4,
    particleAddedSize: 1,
    particleMaxSize: 5,
    particleBaseLight: 5,
    particleAddedLight: 30,
    particleBaseBaseAngSpeed: .001,
    particleAddedBaseAngSpeed: .001,
    particleBaseVariedAngSpeed: .0005,
    particleAddedVariedAngSpeed: .0005,
    sourceBaseSize: 3,
    sourceAddedSize: 3,
    sourceBaseAngSpeed: -.01,
    sourceVariedAngSpeed: .005,
    sourceBaseDist: 130,
    sourceVariedDist: 50,
    
    particleTemplateColor: 'hsla(hue,80%,light%,alp)',
    repaintColor: 'rgba(0,0,0,.1)',
    enableTrails: false
  }
  
  , util = {
    square: x => x*x,
    tau: 6.2831853071795864769252867665590057683943
  }
    
  , particles = []
  , source = new Source
  , tick = 0;

function Particle() {
  this.dist = ( Math.sqrt( Math.random() ) ) * s / 2;
  this.rad = Math.random() * util.tau;
  
  this.baseAngSpeed = opts.particleBaseBaseAngSpeed + opts.particleAddedBaseAngSpeed * Math.random();
  this.variedAngSpeed = opts.particleBaseVariedAngSpeed + opts.particleAddedVariedAngSpeed * Math.random();
  this.size = opts.particleBaseSize + opts.particleAddedSize * Math.random();
}
Particle.prototype.step = function() {
  var angSpeed = this.baseAngSpeed + this.variedAngSpeed * Math.sin( this.rad * 7 + tick / 100 );
  this.rad += angSpeed;
  
  var x = this.dist * Math.cos( this.rad )
    , y = this.dist * Math.sin( this.rad )
  
    , squareDist = util.square( x - source.x ) + util.square( y - source.y )
    , sizeProp = Math.pow( s, 1/2 ) / Math.pow( squareDist, 1/2 )
    , color = opts.particleTemplateColor
      .replace( 'hue', this.rad / util.tau * 360 + tick )
      .replace( 'light', opts.particleBaseLight + sizeProp * opts.particleAddedLight )
      .replace( 'alp', .8 );
  
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc( x, y, Math.min( this.size * sizeProp, opts.particleMaxSize ), 0, util.tau );
  ctx.fill();
}

function Source() {
  this.x = 0;
  this.y = 0;
  this.rad = Math.random() * util.tau;
}
Source.prototype.step = function() {
  
  if( !this.mouseControlled ) {
    var angSpeed = opts.sourceBaseAngSpeed + Math.sin( this.rad * 6 + tick / 100 ) * opts.sourceVariedAngSpeed;
    this.rad += angSpeed;

    var dist = opts.sourceBaseDist + Math.sin( this.rad * 5 + tick / 100 ) * opts.sourceVariedDist;

    this.x = dist * Math.cos( this.rad );
    this.y = dist * Math.sin( this.rad );
  }
  
  ctx.fillStyle = 'white';
  ctx.beginPath();
  ctx.arc( this.x, this.y, 1, 0, util.tau );
  ctx.fill();
}

function anim() {
  
  window.requestAnimationFrame( anim );
  
  ++tick;
  
  if( !opts.enableTrails )
    ctx.globalCompositeOperation = 'source-over';
  
  ctx.fillStyle = opts.repaintColor;
  ctx.fillRect( 0, 0, s, s );
  
  ctx.globalCompositeOperation = 'lighter';
  
  if( particles.length < opts.particles )
    particles.push( new Particle );
  
  ctx.translate( s/2, s/2 );
  
  source.step();
  
  particles.map( particle => particle.step() );
  ctx.translate( -s/2, -s/2 );
}

ctx.fillStyle = '#222';
ctx.fillRect( 0, 0, s, s );
anim();

c.addEventListener( 'mousemove', ( e ) => {
  
  var bbox = c.getBoundingClientRect();
  
  source.x = e.clientX - bbox.left - s/2;
  source.y = e.clientY - bbox.top - s/2;
  source.mouseControlled = true;
})
c.addEventListener( 'mouseleave', ( e ) => {
  
  var bbox = c.getBoundingClientRect();
  
  source.x = e.clientX - bbox.left - s/2;
  source.y = e.clientY - bbox.top - s/2;
  
  source.rad = Math.atan( source.y / source.x );
  if( source.x < 0 )
    source.rad += Math.PI;
  
  source.mouseControlled = false;
})
   
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
