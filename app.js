// login button event
const loginButton = document.getElementById("login-btn");

loginButton.addEventListener("click",function(){
    // console.log("login button clicked");
    document.getElementById("login-area").style.display = "none";
    document.getElementById("transaction-area").style.display = "block";
})

// diposit button event
const dipositBtn = document.getElementById("deposit-btn");

dipositBtn.addEventListener("click", function(){
    const dipositAmount = parseFloat(document.getElementById("deposit-amt").value);
    const currentDeposit = parseFloat(document.getElementById("curr-deposit").innerHTML);
    const totalBalance = parseFloat(document.getElementById("total-balance").innerHTML);
    document.getElementById("curr-deposit").innerHTML = dipositAmount + currentDeposit;
    document.getElementById("total-balance").innerHTML = dipositAmount + totalBalance;
    document.getElementById("deposit-amt").value = "";
})