/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
  constructor(text,level) {
    this.text = text;
    this.level = level;
  }

  display(phraseUl) {
    // phraseUl.textContent = this.text;
    // "blub".forEach( letter => {
    //   console.log(letter);         This doesn't work...
    // })
    for (let i=0; i<this.text.length; i++) {
      const x = this.text[i];
      document.createElement('li');
      let html = "";
      if (x === " ") {
        html = `<li class = "space"> </li>`;
      } else {
        html = `<li class = "hide letter ${x}">${x}</li>`;
      }
      phraseUl.innerHTML += html;
    }
  }


//==============================================================
//    Get rid of these when you've finished testing!
//==============================================================
  phraseTest() {
    let testOutput = `Testing the Phrase object: ${this.text}`;
    const testGame = new Game("test user","basic",[this]);
    testOutput += `. testGame object, created within Phrase: ${testGame.phrases[0].text}`;
    return testOutput;
  }

 }