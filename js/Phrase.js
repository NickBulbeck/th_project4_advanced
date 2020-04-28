/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
  constructor(text,level) {
    this.text = text;
    this.level = level;
  }

  addPhraseToDisplay() {
    const phraseUl = document.getElementById("phrase").firstElementChild;
    const buttonKeys = document.getElementById('qwerty').getElementsByTagName("button");
    for (let i=0; i< buttonKeys.length; i++) {
      buttonKeys[i].disabled = false;
      buttonKeys[i].classList = "key";
    }
    const lostHearts = document.querySelectorAll('.tried');
    console.log(`lostHearts: ${lostHearts.length}`);
    for (let i=0; i<lostHearts.length; i++) {
      console.log("Changing a heart back...");
      lostHearts[i].firstElementChild.src = "images/liveHeart.png";
      lostHearts[i].classList = "tries";
    }
    phraseUl.innerHTML = '';
    let html = "";
    for (let i=0; i<this.text.length; i++) {
      const x = this.text[i];
      if (x === " ") {
        html = `<li class = "space"> </li>`;
      } else {
        html = `<li class = "hide letter ${x}">${x}</li>`;
      }
      phraseUl.innerHTML += html;
    }
  }


  checkLetter(x) {
    let classes = ".hide.letter." + x;
    return (document.querySelectorAll(classes).length > 0);
  }

  showMatchedLetter(x) {
    let classes = ".hide.letter." + x;
    let matchedLetters = document.querySelectorAll(classes);
    if (this.level === "demo" || this.level === "easy") {
      for (let i=0; i<matchedLetters.length; i++) {
        matchedLetters[i].classList.remove("hide");
        matchedLetters[i].style.color = "inherit";
      }
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