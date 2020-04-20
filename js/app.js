/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 /*


 */

const session = new Session();

const blub = () => {
  session.phrases.forEach(quote => {
    console.log(`${quote.text}: ${quote.level}`);
  }
)};

session.sessionTest();
blub();