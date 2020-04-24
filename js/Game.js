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


  getRandomPhrase() {
    //  Gets an array from this.phrases, puts it into this.activePhrase, then removes
    // the selected yin fae this.phrases.
  }



  startGame() { 
// This needs significant re-factoring: bits of it need leaving in the startGame method,
// others need pulling out altogether - the startButton - and others need putting into
// a new method that can be called repeatedly.
// Note that startGame should hide the screen overlay, call getRandomPhase to set activePhrase then call phrase.addPhraseToDisplay.
// If this method first clears the board and resets everything, it'll solve the problem of making the game immediately re-startable. So, if xyz divs exist, remove them. Like in appendPageLinks. Or better, just set the innerHTML to "". Also enable all the buttons and reset the heart images.
    const userName = this.user.name;
    const startButton = document.getElementById("btn__reset");
    const overlay = document.getElementById("overlay");
    const phraseUl = document.getElementById("phrase").firstElementChild;
    const welcome = document.querySelector('h2.header');
    const qwerty = document.getElementById('qwerty');
    const startingPhrase = this.phrases[0];
// This should go outside, in app.js. They're actually suggesting that Game be instantiated in here. This would help, because by creating a new Game instance, it would automatically refresh the array of phrases.
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

    /* Check both the pdf and the rubric on how, and whether, to change the style of a letter
     -- disables the clicked button
     -- calls checkLetter and if wrong, sets .wrong class to the letter and calls removeLife
     -- if yes checkLetter, adds .chosen to the letter and 
     key after the user has played, then calls showMatchedLetter and checkForWin; if yes win, gameOver
    */

    // used it successfully.

    /*  Official rules (for use in demo and easy modes):
        - Once a letter is clicked, it's disabled (note the .chosen and .wrong classes)
        - If checkLetter, ALL the matching letters are revealed
        - If !checkLetter, a heart is changed to a lost heart
        - The game ends when all hears are lost or all letters revealed
        - Also there must be a way of replaying cleanly when the game ends, by selecting Start Game.
    */
  }

  checkForWin() {
    // Check to see if a' the letters are matched.
  }

  removeLife() {
    // if phrase.checkLetter() returns false; increments this.missed and repalces a liveHeart with a lostHeart. also calls gameOver if it's the last heart.
  }

  gameOver() {
    // if phrase.checkLetter() returns false && a' the lives are awa'. Also displays a win or loss using the original start screen with the win or lose CSS class added.
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