import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getDatabase ,ref , set } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-database.js";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
   apiKey: "AIzaSyDzuQMqCSk21coM76TukGRWnxr2_Tqf4tw",
   authDomain: "techx-project.firebaseapp.com",
   databaseURL: "https://techx-project-default-rtdb.firebaseio.com",
   projectId: "techx-project",
   storageBucket: "techx-project.appspot.com",
   messagingSenderId: "941951611823",
   appId: "1:941951611823:web:d7441a1f7a9610d5a8355a",
   measurementId: "G-BSE9VLMKCR"
};
//Initialize Firebase
let firebase= initializeApp(firebaseConfig);
const db = getDatabase();

const fileInput = document.querySelector('input');
// Listen for the change event so we can capture the file
fileInput.addEventListener('change',  (e) => {
    // Get a reference to the file
    const file = e.target.files[0];
    // Encode the file using the FileReader API
    const reader = new FileReader();
    reader.onloadend = () => {
    var endcode = reader.result;
   //  get data from localstorage
    var photo = localStorage.getItem('photoURL');
    var user = localStorage.getItem('Name');
    var uemail = localStorage.getItem('emailID');
    //create an object of image
   let post =
    {
      UserName:user,
      UserEmail:uemail,
      Image :endcode,
      Userpic:photo
   } 
   // set object into rtdb
   set(ref(db,user),{
      post
  });
    // Logs data:<type>;base64,wL2dvYWwgbW9yZ...
    };
    reader.readAsDataURL(file);
});