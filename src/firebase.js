import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDdN8lMMGmHm8I2dCeMaQLbh-QISsSZJ8k",
  authDomain: "crud-react-83d33.firebaseapp.com",
  projectId: "crud-react-83d33",
  storageBucket: "crud-react-83d33.appspot.com",
  messagingSenderId: "995811015455",
  appId: "1:995811015455:web:b53c040a4002c359d0ce2a"
};
// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
