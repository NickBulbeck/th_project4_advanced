/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
  constructor(text,level) {
    this.text = text;
    this.level = level;
  }

  addPhraseToDisplay(parentNode) {
    for (let i=0; i<this.text.length; i++) {
      const x = this.text[i];
      // document.createElement('li');
      let html = "";
      if (x === " ") {
        html = `<li class = "space"> </li>`;
      } else {
        html = `<li class = "hide letter ${x}">${x}</li>`;
      }
      parentNode.innerHTML += html;
    }
  }

  checkLetter(x) {
/*    this checks the phrase for x. NOW: crucial design decision. I'll read through what They think, but:
//    Since the displayed elements are not a collection based on the phrase, we can mutate this.text 
//    without affecting the game's display. Thus, finding the letter and then splicing it out of the array
//    would be a thing, so it's not found next time. At this point, we can distinguish between levels:
//    demo and easy: remove them all
//    intermediate: remove one but flag that there's more
//    hard: just remove one
//    This implies returning not just a single boolean, but an object with two booleans.
*/   }

  showMatchedLetter() {
    // reveals letters that match the chosen letter. Can do this by selecting letters iwth a class of
    // x. Seems to me that we don't need both these methods; when we find yin with a class of x, we
    // can say that checkLetter is true, and we can remove that class when we reveal it as well.
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