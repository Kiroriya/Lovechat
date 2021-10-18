var firebaseConfig = {
    apiKey: "AIzaSyAWMTGyI6jUhBaQMsC1sOi8IoIjmHkPgus",
    authDomain: "lovechat-c7af4.firebaseapp.com",
    databaseURL: "https://lovechat-c7af4-default-rtdb.firebaseio.com",
    projectId: "lovechat-c7af4",
    storageBucket: "lovechat-c7af4.appspot.com",
    messagingSenderId: "318754307333",
    appId: "1:318754307333:web:fa5b2be6d205c16a258b6c",
    measurementId: "G-XZEWD5XNDR"
  };

 firebaseConfig.initializeApp(firebaseConfig);

   const auth = firebase.auth();

   function signup(){

     var email = document.getElementById("email");
     var password = document.getElementById("password");

     const promise = auth.createEmailwithUserAndPassword(email.value, password.value);
     promise.catch(e => alert(e.message));

     alert("Signed In")

   }