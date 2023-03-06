let signin = document.querySelector(".box.signin");
let signup = document.querySelector(".box.signup");
let user = document.getElementById("username")
let pass = document.getElementById("password")
let submit = document.querySelector(".box.signin .submit");
let BtnSign = document.querySelectorAll(".or-sign a");

BtnSign[0].onclick = ()=>{
  signin.style.display = "none";
  signup.style.display = "block";
}
BtnSign[1].onclick = ()=>{
  signup.style.display = "none";
  signin.style.display = "block";
}

submit.onclick = ()=>{
  if (user.value === "") {
    warningFunc("Pleas Enter Your Username")
    return false;
  }else if (pass.value === "") {
    warningFunc("Pleas Enter Your Password")
    return false;
  }
}

// function check Info 
let fullname = document.getElementById("fullname")
let username = document.getElementById("username2")
let email = document.getElementById("email")
let password = document.getElementById("inputpassword")
let rePassword = document.getElementById("repassword")
let torms = document.getElementById("Torms");
let submetUp = document.getElementById("submet-sign-up");
let warning = document.getElementById("warning")

submetUp.onclick = ()=>{
  let userEx = /^[A-Za-z][A-Za-z0-9]*$/ig;
  let regEx = /\w+@\w+.\w+/ig;
  if (fullname.value === "") {
    warningFunc("Pleas Enter Your Name")
    return false;
  }else if (username.value === "") {
    warningFunc("Pleas Enter Your Username")
    return false;
  }else if (userEx.test(username.value) === false) {
    warningFunc("Pleas Enter Your Username Without a Space")
    return false;
  }else if (email.value === "") {
    warningFunc("Pleas Enter Your Email")
    return false;
  }else if (regEx.test(email.value) === false) {
    warningFunc("Pleas Check The Email Structure")
    return false;
  }else if (password.value === "") {
    warningFunc("Pleas Enter Your Password")
    return false;
  }else if (rePassword.value === "") {
    warningFunc("Pleas Enter Your Re Password")
    return false;
  }else if(password.value !== rePassword.value){
    warningFunc("Password Does Not Match")
    return false;
  }else if (torms.checked === false) {
    warningFunc("Required You Must Agree To Terms Of User")
    return false ;
  }
}
function warningFunc(massage){
  warning.innerText = `${massage}`;
  warning.style.top = 0;
  setTimeout(() => {
    warning.style.top =  "-100%";
  }, 3000);
}

// show and hidd password 
function showPass(){
  let show = document.querySelectorAll(".show-pass .show");
  let hidd = document.querySelectorAll(".show-pass .hidd");
  let eye = document.querySelectorAll(".eye");
  eye.forEach((elm, i)=>{
    hidd[i].onclick = ()=>{
      elm.type = "text";
      hidd[i].style.display = "none";
      show[i].style.display = "block";
    }
    show[i].onclick = ()=>{
      elm.type = "password";
      show[i].style.display = "none";
      hidd[i].style.display = "block";
    }
  })
}showPass()
