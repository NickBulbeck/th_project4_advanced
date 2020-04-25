/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /*

 */
 class Game {
  static plays = {
    demo: 1,
    easy: 2,
    intermediate: 3,
    hard: 4
  }

  constructor(user,level,phrases) {
    this.user = user;
    this.level = level;
    this.phrases = phrases;
    this.playCounter = 0; 
    this.score = 0; 
    this.activePhrase = null;
    this.missed = 0;
  }

  getRandomPhrase() {
    const index = Math.floor(Math.random() * this.phrases.length);
    const phrase = this.phrases[index];
    this.phrases.splice(index,1);
    return phrase;
  }

  startGame() { 
// Note that startGame should hide the screen overlay, call getRandomPhase to set activePhrase then call phrase.addPhraseToDisplay.
// If this method first clears the board and resets everything, it'll solve the problem of making the game immediately re-startable. So, if xyz divs exist, remove them. Like in appendPageLinks. Or better, just set the innerHTML to "". Also enable all the buttons and reset the heart images.
    const overlay = document.getElementById("overlay");
    overlay.style.display = "none";
    const welcome = document.querySelector('h2.header');
    welcome.innerHTML = `<span style="text-transform:none">Welcome to </span> phrase hunter<span style="text-transform:none">, ${this.user.name}!</span>`;
    this.play();
  }

  play() {
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase.addPhraseToDisplay();
    this.playCounter++;
  }

  handleInteraction() {
    const letter = event.target.textContent;
    if (!this.activePhrase.checkLetter(letter)) {
      this.removeLife();
      if (this.level === "demo" || this.level === "easy") {
        event.target.disabled = true;
        event.target.classList.add("wrong");
      }
      return null;
    }
    this.activePhrase.showMatchedLetter(letter);
    if (this.level === "demo" || this.level === "easy") {
      event.target.disabled = true;
      event.target.classList.add("chosen");
    }
    if (this.checkForWin()) {
      overlay.style.display = "";
      overlay.classList.add("win");
    }
  }

  checkForWin() {
    // Check to see if a' the letters are matched.
    if (document.querySelectorAll(".hide.letter").length === 0) {
      return true;
    } else {
      return false;
    }
  }

  removeLife() {
    const liveHearts = document.querySelectorAll(".tries");
    const heart = liveHearts[0];
    heart.firstElementChild.src = "images/lostHeart.png";
    heart.classList = ".tried";
    this.missed++;
    if (this.missed === 5) {
      this.gameOver();
    } 
  }

  gameOver() {
    const overlay = document.getElementById("overlay");
    overlay.style.display = "";
    overlay.classList.add("lose");
  }



//==============================================================
//    Get rid of these when you've finished testing!
//==============================================================
  gameTest() {
    const testOutput = `testing the Game object: user is ${this.user.name},
                        level is ${this.level},
                        first phrase is ${this.phrases[0].text},
                        and plays is ${Game.plays[this.level]}`;
    return testOutput;
  }

 }