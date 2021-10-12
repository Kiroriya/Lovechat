

function createwithfriend(){
    var pass = document.getElementById("input_pass").value;
    localStorage.setItem("pass" , pass);
    window.location.replace("chatwithfriend.html");


}

function joinwithfriend(){
    var pass = document.getElementById("input_pass").value;
    localStorage.setItem("pass" , pass);
    window.location.replace("chatwithfriend.html");


}


setInterval(function(){
    var pass = document.getElementById("input_pass").value;
    if(pass != ""){
        document.getElementById("btn_createpasswithyourfriend").disabled = false;
    }else{
        document.getElementById("btn_createpasswithyourfriend").disabled = true;
    }
},100)

setInterval(function(){
    var pass = document.getElementById("input_pass").value;
    if(pass != ""){
        document.getElementById("btn_passwithyourfriend").disabled = false;
    }else{
        document.getElementById("btn_passwithyourfriend").disabled = true;
    }
},100)