function joinwithfriend(){
    var pass = document.getElementById("input_password").value;
    localStorage.setItem("pass" , pass);
    if(pass == "22022562"){
        window.location.replace("Loveyou.html");
    }else if(pass == "29072546"){
        window.location.replace("chatwithfriend.html");
    }else if(pass == "29072003"){
        window.location.replace("newlovechat.html");
    }else{

    }


}


setInterval(function(){
    var pass = document.getElementById("input_password").value;
    if(pass != ""){
        document.getElementById("btn_joinwithfriend").disabled = false;
    }else{
        document.getElementById("btn_joinwithfriend").disabled = true;
    }
},100)
