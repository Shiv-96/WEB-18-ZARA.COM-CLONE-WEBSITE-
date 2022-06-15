var form = document.querySelector("#form");
form.addEventListener("submit", createAcc);
var dataArr = JSON.parse(localStorage.getItem("SignupData")) || [];
function createAcc(event){
    event.preventDefault();
    // alert("hi")
    var data = {
        name: form.name.value,
        email: form.email.value,
        password: form.password.value,
        mobile_no: form.mob.value,
    }
    dataArr.push(data)
    // console.log(dataArr);
    for(var i = 0; i < dataArr.length-1; i++){
        if(dataArr[i].email == dataArr[dataArr.length-1].email){
            alert("Account already exist")
            dataArr.splice(dataArr.length-1,1)
        }
    }
    localStorage.setItem("SignupData", JSON.stringify(dataArr))
}