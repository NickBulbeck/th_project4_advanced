class Session {
  constructor() {
    this.user = this.initialiseUser();   // Derived from a determineUser method or similar, via the DOM input
    this.level = this.setUpLevel();  // Also derived via the DOM, from a setLevel method or similar
    this.availablePhrases = this.initialiseData();
    this.phrases = this.processSourceData(this.availablePhrases,this.level);
  }

  initialiseUser() {
    const user = new User("Nick",100); // Hard-code this in for now. ToDo: get it via the browser.
    return user;
  }

  setUpLevel() {
    return "intermediate"; // Hard-code this in for now. ToDo: get it via the browser.
  }

  initialiseData() {
    let phraseSourceData = null;
    const localStorageFound = localStorage.getItem('phraseHunterApp');
    if (localStorageFound) {
      const rawAppData = JSON.parse(localStorageFound);
      // console.log(rawAppData);
      phraseSourceData = rawAppData.phrases;
      localStorage.removeItem('phraseHunterApp');
      // console.log("Just cleared localStorage.");
    } else {
      phraseSourceData = data_js_sourceData;
      const newAppData = {
            users:[],
            highScore: 0,
            phrases: phraseSourceData
          };
      localStorage.setItem('phraseHunterApp',JSON.stringify(newAppData));
    }
    const phraseObjects = phraseSourceData.map(source => {
      const phraseObject = new Phrase(source.text,source.level);
      return phraseObject;
    });
    return phraseObjects;
  }

  processSourceData(array) {
    // console.log(array);
    const levelledArray = array.filter( (phrase) => {
            if (phrase.level === this.level) {
              return true;
            } else {
              return false;
            }
    });
    return levelledArray;
    // ToDo: return a random subset of this array
  }

//==============================================================
//    Get rid of these when you've finished testing!
//==============================================================
  // sessionTest() {
  //   const startButton = document.getElementById("btn__reset");
  //   startButton.addEventListener("click",this.foadyb,false);
  // }

  // foadyb(event) {
  //   event.target.style.backgroundColor = "salmon";
  //   console.log("Click event handler is still working...");
  //   const testPhrase = new Phrase("hello world");
  //   event.target.textContent += ` ${testPhrase.text}`;
  // }

}