/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

/*
  Rubric:
  -- event-handler on the start button so that a new Game is created
  -- event-handlers added to the qwerty buttons so that handleInteraction() is called
  -- mind and dinnae dae anything when the spaces around the buttons are clicked - I've already sorted that.
  -- add ANOTHER event-handler so that a keystroke also calls handleInteraction(). 
  -- When the game is over, the board is reset back to the Start Game button, and clicking it repeats the process.
  -- Also I need to add my own styling. Not sure whether adding functionality will get Exceeds...

*/


const publicStaticVoidMainStringAaaaaargh = () => { // I am SOOOOO funny...

  const session = new Session();
  const user = session.user;
  const level = session.level;
  const phrases = session.phrases;

  const marvin = new StarshipHeartOfGold;

  const startButton = document.getElementById("btn__reset");
  const qwerty = document.getElementById('qwerty');
  let qwertyFlag = false;

  // document.addEventListener('keydown',function() {
  //   console.log("Letter pressed: " + event.keyCode);
  // });

  startButton.addEventListener('click',function() {
    const game = new Game(user,level,phrases);
    game.startGame();
    if (!qwertyFlag) {
      qwerty.addEventListener('click',function(event) {
        qwertyFlag = true;
        if (event.target.tagName === "BUTTON") {
          game.handleInteraction()
        }
      },false);
    }
    document.addEventListener('keydown',function() {
      console.log("Letter pressed: " + event.keyCode);
    });
  },false);

}

publicStaticVoidMainStringAaaaaargh();
