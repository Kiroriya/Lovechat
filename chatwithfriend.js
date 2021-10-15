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

  function send(){
    var msg = document.getElementById('image_text').value;
    if(msg != ""){
      firebase.database().ref("messages").push({
          msg : msg,
          sender : name

      }).then(function(){
          document.getElementById('image_text').value = "";
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