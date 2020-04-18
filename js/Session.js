class Session {
  constructor() {
    this.user = null;
    this.level = "default";
  }

  sessionTest(user,level) {
    this.user = user;
    if (level) {
      this.level = level;
    }
    const testOutput = `Testing the Session class: user name is ${this.user.name}, level is ${this.level}`;
    return testOutput;
  }

}