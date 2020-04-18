/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /*


 */

 class Game {
  constructor(user,level,phrases) {
    this.user = user;
    this.level = level;
    this.phrases = phrases;
  }

  gameTest() {
    const testOutput = `testing the Game object: user is ${this.user.name},
                          level is ${this.level},
                         first phrase is ${this.phrases[0].text}`;
    return testOutput;
  }





 }