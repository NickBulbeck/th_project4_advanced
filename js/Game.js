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
    this.playCounter = 0; 
    this.score = 0; 
    this.activePhrase = null;
    this.missed = 0;
  }

// Start reading the pdf at page 9.

  getRandomPhrase() {
    //  Gets an array from this.phrases, puts it into this.activePhrase, then removes
    // the selected yin fae this.phrases.
  }

// As of Wednesday: Need to refactor with a potentially larger array of quotes;
// Then a function that uses this.couter to get a random quote from the bigger list
// and then remove it so it doesn't come up again.
// Phrase has the search function; still to consider where the interaction goes wo
// removing letters from the phrase and changing the game state - score, lives, time 
// remaining etc, as well as uncovering the letters.

  startGame() { 
// This needs significant re-factoring: bits of it need leaving in the startGame method,
// others need pulling out altogether - the startButton - and others need putting into
// a new method that can be called repeatedly.
    const userName = this.user.name;
    const startButton = document.getElementById("btn__reset");
    const overlay = document.getElementById("overlay");
    const phraseUl = document.getElementById("phrase").firstElementChild;
    const welcome = document.querySelector('h2.header');
    const qwerty = document.getElementById('qwerty');
    const startingPhrase = this.phrases[0];
// This should go outside, in app.js. They're actually suggesting that Game be instantiated in here.
    startButton.addEventListener("click",function(event) {
      welcome.innerHTML = `<span style="text-transform:none">Welcome to </span> phrase hunter<span style="text-transform:none">, ${userName}!</span>`;
      overlay.style.display = "none";
      startingPhrase.addPhraseToDisplay(phraseUl);
    },false);
    this.counter = 1;
    qwerty.addEventListener('click',this.qwertyClick,false);
  }


// This needs picking apart and distributing among the official methods.
  qwertyClick(event) {
    if (event.target.tagName === "BUTTON") {
      const letter = event.target.textContent;
      /* get the current phrase; call the checkLetter method, which returns a boolean.
         if it's true, call the separate clearLetter method (in the game), which changes stuff
         based on the level.  
          This is  faffed about with using this.activePhrase

       */

    }
  }

  handleInteraction() {
    // contains most of what's in qwertyClick at the moment. It's a parent method that calls
    // the other three, as well as some Phrase methods. See Step 10 on page 23. They suggest 
    // setting up the event listener in app.js and passing a button into here rather than an
    // event. I'd rather handle an event in a function called "handle an event".

    // Check both the pdf and the rubric on how, and whether, to change the style of a letter
    // key after the user has played, based on whether they've used it and lost a life or 
    // used it successfully.
  }

  checkForWin() {
    // Check to see if a' the letters are matched.
  }

  removeLife() {
    // if phrase.checkLetter() returns false;
  }

  gameOver() {
    // if phrase.checkLetter() returns false && a' the lives are awa'
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