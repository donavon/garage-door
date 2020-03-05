const functions = require('firebase-functions');
const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

admin.initializeApp();

exports.incrementCountOnOpen = functions.database.ref("/garage").onUpdate(({after}) => {
  const countRef = after.ref.parent.child('count');
  const newValue = after.val();

  return newValue
    ? countRef.transaction(count => count + 1)
    : null;
});

// const userCountRef = functions.database.ref("/userCount");
const userCountRef = admin.database().ref('/userCount');

exports.incrementCountOnNewUser = functions.auth.user().onCreate((user) => {
  return userCountRef.transaction(count => count + 1);
});
