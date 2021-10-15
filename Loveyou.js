var firebaseConfig = {
  apiKey: "AIzaSyAX_XOrt7TiokE2W1YDOPjZfZ55s3j-7z0",
  authDomain: "anasaki-chat.firebaseapp.com",
  databaseURL: "https://anasaki-chat-default-rtdb.firebaseio.com",
  projectId: "anasaki-chat",
  storageBucket: "anasaki-chat.appspot.com",
  messagingSenderId: "957858616703",
  appId: "1:957858616703:web:c341596501193aae82f64a",
  measurementId: "G-XZEWD5XNDR"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var name = localStorage.getItem("name");

function send(){
    var msg = document.getElementById('msg_text').value;
    if(msg != ""){
      firebase.database().ref("messages").push({
          msg : msg,
          sender : name

      }).then(function(){
          document.getElementById('msg_text').value = "";
      })
    }
}

firebase.database().ref("messages").on("child_added" , function(snapshot){
    var username = snapshot.val().sender;
    var msg = snapshot.val().msg;
    var html = "";
    if(username == name){
        html += "<div class='message_me' align='right'><p class='user'>" +username + "</p><p class='msg_me'>"+ msg +"</p></div>";
        document.getElementById("box_messages").innerHTML += html;

    }else{
      html += "<div class='message_user' align='left'><p class='user'>" +username + "</p><p class='msg_user'>"+ msg +"</p></div>";
      document.getElementById("box_messages").innerHTML += html;
    }

    var div_obj = document.getElementById("box_messages");
    div_obj.scrollTop = div_obj.scrollHeight;
});