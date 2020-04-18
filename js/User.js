class User {
  constructor(name,highScore) {
    this.name = name;
    this.highScore = highScore || 0;
  }

  userTest() {
    const testOutput = `testing the User object: name is ${this.name} (${this.highScore})`;
    return testOutput;    
  }

}