// login button event
const loginButton = document.getElementById("login-btn");

loginButton.addEventListener("click",function(){
    // console.log("login button clicked");
    document.getElementById("login-area").style.display = "none";
    document.getElementById("transaction-area").style.display = "block";
})
