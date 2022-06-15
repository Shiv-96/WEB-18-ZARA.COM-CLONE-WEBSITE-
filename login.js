document.querySelector("button").addEventListener("click", goToSignup);

function goToSignup(){
    window.location.href="signup.html"
}
var form = document.querySelector("#form")
form.addEventListener("submit", login);

var myData = JSON.parse(localStorage.getItem("SignupData"))
function login(event){
    event.preventDefault();
    data = {
        email: form.email.value,
        password: form.password.value,
    }
    var value = false;
    for(var i = 0; i < myData.length; i++){
        if(data.email == "" || data.password == ""){
            value = false;
        }
        else if(myData[i].email == data.email && myData[i].password == data.password){
            value = true;
            break;
        }
    }
    if(value == true){
        alert("login Succesfull")
        window.location.reload()
        window.location.href="index.html"
        
    }
    else{
        alert("Invalid credential")
        window.location.reload()
    }
}