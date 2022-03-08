import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyA3g0qtfeQaUDzIvyPDzh0ACV3RftiGdMs",
  authDomain: "crud-14c69.firebaseapp.com",
  projectId: "crud-14c69",
  storageBucket: "crud-14c69.appspot.com",
  messagingSenderId: "168659400170",
  appId: "1:168659400170:web:ef4f462204edb28442ae93"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
