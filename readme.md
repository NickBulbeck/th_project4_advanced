THIS NOW CHANGED TO PROJECT4_ADVANCED.

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
C) Saturday ToDo
==========================
1 Change the key styling to "chosen" and "wrong"          DONE
2 Slack re the problem of event handler firing twice...   
