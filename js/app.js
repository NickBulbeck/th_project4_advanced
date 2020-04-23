/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


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

// I'm up to the start of Part II on page 13.