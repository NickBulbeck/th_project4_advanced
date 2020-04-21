/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 /*

 */
 class Game {
  static plays = {
    demo: 1,
    easy: 2,
    moderate: 3,
    hard: 4
  }

  constructor(user,level,phrases) {
    this.user = user;
    this.level = level;
    this.phrases = phrases;
    this.counter = 0; //  would be nice to make these
    this.score = 0;   //  two variables private
  }

// Start reading the pdf at page 6.

// Needs a "play" method, attached to the Start Game button

  start() {
    const userName = this.user.name;
    const startButton = document.getElementById("btn__reset");
    const overlay = document.getElementById("overlay");
    const phraseUl = document.getElementById("phrase").firstElementChild;
    const welcome = document.querySelector('h2.header');
    const qwerty = document.getElementById('qwerty');
    const startingPhrase = this.phrases[0];
    startButton.addEventListener("click",function(event) {
      welcome.innerHTML = `<span style="text-transform:none">Welcome to </span> phrase hunter<span style="text-transform:none">, ${userName}!</span>`;
      overlay.style.display = "none";
      startingPhrase.display(phraseUl);
    },false);
    this.counter = 1;
    qwerty.addEventListener('click',this.qwertyClick,false);
  }

  qwertyClick(event) {
    if (event.target.tagName === "BUTTON") {
      const letter = event.target.textContent;
      // get the current phrase; call the checkLetter method, which returns a boolean.
      // if it's true, call the separate clearLetter method (in the game), which changes stuff
      // based on the level.
    }
    

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