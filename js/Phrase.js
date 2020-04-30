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
    for (let i=0; i<lostHearts.length; i++) {
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
    let hideLetterX = ".hide.letter." + x;
    const hiddenXs = document.querySelectorAll(hideLetterX);
// Now, get the array of letters that have a class of selected and x...
    let xTriedAlready = ".selected." + x;
    const alreadyTriedXs = document.querySelectorAll(xTriedAlready);
    return (hiddenXs.length + alreadyTriedXs.length > 0);
  }

  showMatchedLetter(x) {
    let classes = ".hide.letter." + x;
    let matchedLetters = document.querySelectorAll(classes);
    if (this.level === "demo" || this.level === "easy") {
      for (let i=0; i<matchedLetters.length; i++) {
        matchedLetters[i].classList.remove("hide");
        matchedLetters[i].classList.add("selected");
        matchedLetters[i].style.color = "inherit";
      }
    }

  }

 }