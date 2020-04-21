/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 /*
  

 */

const session = new Session();
// This retrieves the quote information either from data.js.
// In due course it'll also retrieve User and level from a wee interface (at the moment they're hard-coded).
const user = session.user;
const level = session.level;
const phrases = session.phrases;

const game = new Game(user,level,phrases);

game.start();
