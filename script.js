function login(){
    var name = document.getElementById("input_name").value;
    localStorage.setItem("name" , name);
    window.location.replace("chat.html");


}

function loginwithfriend(){
    var name = document.getElementById("input_name").value;
    localStorage.setItem("name" , name);
    window.location.replace("pass.html");


}

setInterval(function(){
    var name = document.getElementById("input_name").value;
    if(name != ""){
        document.getElementById("btn_joinwithmainserver").disabled = false;
    }else{
        document.getElementById("btn_joinwithmainserver").disabled = true;
    }
},100)

