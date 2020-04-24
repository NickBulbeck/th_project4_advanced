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
  // This retrieves the quote information either from data.js.
  // In due course it'll also retrieve User and level from a wee interface (at the moment they're hard-coded).
  const user = session.user;
  const level = session.level;
  const phrases = session.phrases;

  const game = new Game(user,level,phrases);

  game.startGame();

  const marvin = new StarshipHeartOfGold;
  marvin.test();

}

publicStaticVoidMainStringAaaaaargh();
