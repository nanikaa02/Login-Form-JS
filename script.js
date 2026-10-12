const name = document.getElementById("user");
const pass = document.getElementById("passcode");
console.log(name.value);
console.log(pass.value);
const form = document.getElementById("loginForm");
function login(event){
    event.preventDefault();    //page refresh rokna
    if(name.value===""){
        msg.textContent = "Please enter your username!";
    }
    else if(pass.value===""){
        msg.textContent = "Please enter password!";
    }
    else{
        msg.textContent = "Both fields are filled!";
    }
    console.log("Login button pressed!");
}
form.addEventListener("submit", login);
const msg = document.getElementById("message");