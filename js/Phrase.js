/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
  constructor(text,level) {
    this.text = text;
    this.level = level;
  }

  phraseTest() {
    let testOutput = `Testing the Phrase object: ${this.text}`;
    const testGame = new Game("test user","basic",[this]);
    testOutput += `. testGame object, created within Phrase: ${testGame.phrases[0].text}`;
    return testOutput;
  }



 }