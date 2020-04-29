/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
  constructor(text,level) {
    this.text = text;
    this.level = level;
    this.lettersGuessed = "";
  }

  addPhraseToDisplay() {
    const phraseUl = document.getElementById("phrase").firstElementChild;
    const buttonKeys = document.getElementById('qwerty').getElementsByTagName("button");
    for (let i=0; i< buttonKeys.length; i++) {
      buttonKeys[i].disabled = false;
      buttonKeys[i].classList = "key";
    }
    const lostHearts = document.querySelectorAll('.tried');
    // console.log(`lostHearts: ${lostHearts.length}`);
    for (let i=0; i<lostHearts.length; i++) {
      // console.log("Changing a heart back...");
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
/*  What do I need here?
    The problem is that this is an indirect check. It was written for the click event, which only ever fires if the letter hasn't been selected. It now needs to handle the keydown event, which never gets disabled. 
    At the moment, it checks for hidden letters in the phrase - if li with hide.letter.t
    exists, send back true: the letter checks. What then happens is the "hide" class is
    removed. If the button weren't disabled, checkLetter would keep removing lives.
    This can't be checked again with a button click because the button is disabled. But the keypress is not, so repeated keypresses come round this loop repeatedly, and the second time onwards, they don't find a hidden letter in the phrase. So it comes back false, and keeps removing a life.
    Everything else that happens in handleInteraction is idempotent - it's only removeLife that's not. So I just need to get this to return true if:
      There are no x letters to reveal AND no x letters have been selected.
*/
    this.lettersGuessed += x;
    let hideLetterX = ".hide.letter." + x;
    const hiddenXs = document.querySelectorAll(hideLetterX);
    return (hiddenXs.length > 0);
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