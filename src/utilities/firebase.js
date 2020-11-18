import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBWhifmKelcmWZU5mcED_Wy8oYaQRT4jBQ",
    authDomain: "vue-full-course-5e6f7.firebaseapp.com",
    databaseURL: "https://vue-full-course-5e6f7.firebaseio.com",
    projectId: "vue-full-course-5e6f7",
    storageBucket: "vue-full-course-5e6f7.appspot.com",
    messagingSenderId: "200599153238",
    appId: "1:200599153238:web:ad88c7ff5747d036f9e9f7"
  };

  firebase.initializeApp(firebaseConfig);


  export default firebase;