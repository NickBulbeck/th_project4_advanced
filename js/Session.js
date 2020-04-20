class Session {
  constructor() {
    this.user = null;   // Derived from a determineUser method or similar, via the DOM input
    this.level = null;  // Also derived via the DOM, from a setLevel method or similar
    this.phrases = this.initialiseData();
    // this.phrases = this.processSourceData();
  }

  sessionTest() {
    const startButton = document.getElementById("btn__reset");
    startButton.addEventListener("click",this.foadyb,false);
  }

  foadyb(event) {
    event.target.style.backgroundColor = "salmon";
    console.log("Click event handler is still working...");
    const testPhrase = new Phrase("hello world");
    event.target.textContent += ` ${testPhrase.text}`;
  }

  initialiseData() {
    let phraseSourceData = null;
    if (JSON.parse(localStorage.getItem('phraseHunterApp'))) {
      const rawAppData = JSON.parse(localStorage.getItem('phraseHunterApp'));
      phraseSourceData = rawAppData.phrases;
      localStorage.removeItem('phraseHunterApp');
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


}