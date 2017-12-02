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

  var wins = 0 ;
  var losses = 0 ;


  $(document).ready(function() {
        // Initial Variables
        var counter = 0;
        var computerPick =Math.floor(Math.random() * (121-19)+19);        
        $('#computerPick').text(computerPick);
        var amber = Math.floor(Math.random() * (13 - 1) + (1));
        var black = Math.floor(Math.random() * (13 - 1) + (1));
        var blue = Math.floor(Math.random() * (13 - 1) + (1));
        var red = Math.floor(Math.random() * (13 - 1) + (1));
        var yellow = Math.floor(Math.random() * (13 - 1) + (1));

        // We log the computer's pick to console to make it easier to troubleshoot
        console.log("Computer Pick: " + computerPick);

         // We then reveal the computer's pick in the html
         // and consolo log all the values of Jewels
         $('#computer-pick').text(computerPick);
         //$('#amber').html(amber);
         console.log("Amber: " + amber);
         //$('#result').html(black);
         console.log("Black: " + black);
         //$('#result').html(blue);
         console.log("Blue: " + blue);
         //$('#result').html(yellow);
         console.log("Red: " + red);
         //$('#result').html(red);
         console.log("Yellow: " + yellow);

//onclick functions
         // Each time the user clicks the crystal the counter goes up by 1.

         $("#amber").click(function () {
          userSum(amber);
          console.log(amber);
          counter += 1;

        });

         $("#blue").click(function () {
          userSum(blue);
          console.log(blue);


        });

         $("#red").click(function () {

          userSum(red);
          console.log(red);


        });
         $("#black").click(function () {
          userSum(black);


          console.log(black);


        });
         $("#yellow").click(function () {

          userSum(yellow);

          console.log(yellow);


        });
         function reset() {

          var computerPick =Math.floor(Math.random() * (121-19)+19);
          $('#computerPick').text(computerPick);
          var amber = Math.floor(Math.random() * (13 - 1) + (1));
          var black = Math.floor(Math.random() * (13 - 1) + (1));
          var blue = Math.floor(Math.random() * (13 - 1) + (1));
          var red = Math.floor(Math.random() * (13 - 1) + (1));
          var yellow = Math.floor(Math.random() * (13 - 1) + (1));
          counter = 0;
          $("#result").html(counter);
        }


        function userSum (crystalNumber) {
          counter += crystalNumber;

          $("#result").html(counter);

          if (counter>computerPick){
            $('#doh')[0].play();
            $('#loseModal').modal('show')

            losses++;
            $('#losses').html(losses);

            reset();

          } else if (counter == computerPick)
          {

            // Then they are alerted with a loss.
            $('#winModal').modal('show');
            $('#smart')[0].play();
            wins++;
            $('#wins').html(wins);

            reset();
          }


        }

      if (result === computerPick) {

        $('#winModal').modal('show');
        $('#smart')[0].play();
      }

      // Here we added an "else if" condition. If the user's counter ever exceeds the computerPick...
      else if (result >= computerPick) {

        // Then they are alerted with a loss.
        $('#doh')[0].play();
        $('#loseModal').modal('show');
      }


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

