// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCL-k0v-j1A45nprnc5o6O2xB-iKv8Po6I",
    authDomain: "sg-news-4b70f.firebaseapp.com",
    databaseURL: "https://sg-news-4b70f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "sg-news-4b70f",
    storageBucket: "sg-news-4b70f.appspot.com",
    messagingSenderId: "827232380384",
    appId: "1:827232380384:web:7e8ab952533f5c802f3785"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // Initialize variables
  const auth = firebase.auth()
  const database = firebase.database()