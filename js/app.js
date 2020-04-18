/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

 /*
  app.js starts a new Session. I think that's all we want to do here.
  Other than that it listens for an end of session.

  The start is where a Session begins, and that starts with login or a new
  user. Session creates a user and then starts a Game with that user. 

  Could have several Games in a Session, or several Phrases in a Game.

  Also, levels of difficult, timer, and score

  So: we need a Session class, and a User class.

  Session: creates a game, and a user. It also uses the data access object when creating a user. When the game finishes, it goes back to the session, which can start a new game or not, but which also saves the user data via the Data Access Object. Dependency injection could be interesting here. There's one part of the Data Access object that specifies where the data actually is (in this case, it's just local storage).

  session = new Session;
  session.getUsers;
  session.doLogin;
  session.get

  start a session.
  the session gets a user
  DECISION: does the session, or the app, start a game? I think the session does, because a session can have several games.

 */
 const user = new User("Nick",20);
 const phrase = new Phrase("Cwm fjord-bank glyphs vext quiz");
 const phrases = [phrase];
 const session = new Session;
 const game = new Game(user,"expert",phrases);
 console.log(phrase.phraseTest());
 console.log(user.userTest());
 console.log(session.sessionTest(user,"expert"));
 console.log(game.gameTest());


