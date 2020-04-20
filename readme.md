======================
A) Create the phrases.
======================
The options:
1 Load them in from a "data.js" file
2 Load them in from localstorage if they exist, and a data.js file if not
3 Provide a facility to add extra ones if the person logs in as admin... this is extra.
  Go for option 2. This means that there must be a data.js file!

=================================
B) Extract the phrases from data.
=================================
The options:
1 Add in a load of phrase objects
2 Add in just the text, with the problem that it has no method for checking itself

This is done either the session, or within app.js. Because it's based on the user's preferences, it's best done by the Session object.

==========================
C) Create the correct Game
==========================

Again, this is done within either app.js or the Session class. I'm going to suggest creating the array of Phrase o