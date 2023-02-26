let email = document.getElementById("email");
let password = document.getElementById("password");
let loginBtn = document.getElementById("submitbutton");

loginBtn.addEventListener("click", (e)=>{
    e.preventDefault();
    if(email.value=="admin@bfc.com"&&password.value=="admin"){
        console.log("done");
        window.location.href= "./adminPage.html";    
    }else{
        alert("Enter Correct Credentials");
    }
});