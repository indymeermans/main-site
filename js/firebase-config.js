var config = {
    apiKey: "AIzaSyANJGgbo5PUiSNBmC5SgcnxcQWmh0jfCcw",
    authDomain: "portfolio-30e0d.firebaseapp.com",
    databaseURL: "https://portfolio-30e0d.firebaseio.com",
    projectId: "portfolio-30e0d",
    storageBucket: "portfolio-30e0d.appspot.com",
    messagingSenderId: "389757088427",
    appId: "1:389757088427:web:37a74bd21c576a53"
  };
    // Initialize Firebase
firebase.initializeApp(config);
const db = firebase.firestore();
  // Enable offline capabilities
firebase.firestore().enablePersistence()
.then(function() {
    // Initialize Cloud Firestore through firebase
    var db = firebase.firestore();
})
.catch(function(err) {
    if (err.code == 'failed-precondition') {
        // Multiple tabs open, persistence can only be enabled in one tab at a a time.

    } else if (err.code == 'unimplemented') {
        // The current browser does not support all of the
        // features required to enable persistence
        // ...
    }
});


