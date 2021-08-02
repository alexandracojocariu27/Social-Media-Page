
let formUI = document.getElementById('form'); 
let usernameUI = document.getElementById('username');
let passwordUI = document.getElementById('password');
let passwordIcon = document.getElementById('revealPassword');
let buttonUI = document.getElementById('signInBtn');

let checkInputs = [false,false];

 
// Username
const usernameValidation = function() {
    if(usernameUI.value !== '') {
        usernameUI.classList.remove('is-invalid');
        checkInputs[0]  = true;
    } else {
        checkInputs[0]  = false;
        usernameUI.classList.add('is-invalid');
        document.getElementById('invalidFeedbackUsername'). innerText = "Enter username";
    }

    // enable button
    if(checkInputs.every((item,index) => item === true)) {
        buttonUI.disabled = false;
    } else {
        buttonUI.disabled = true;    
    }
     
}

usernameUI.addEventListener('change', usernameValidation);


// Password
const passwordValidation = function() {
    if(passwordUI.value !== '') {
        passwordUI.classList.remove('is-invalid');
        checkInputs[1]  = true;
    } else {
        checkInputs[1]  = false;
        passwordUI.classList.add('is-invalid');
        document.getElementById('invalidFeedbackPassword'). innerText = "Enter passsword";
    }

    // enable button
    if(checkInputs.every((item,index) => item === true)) {
        buttonUI.disabled = false;
    } else {
        buttonUI.disabled = true;
    }
  
}
 
passwordUI.addEventListener('change', passwordValidation);


// Reveal password
const revealPassword = function() {
    if(passwordIcon.classList.contains('fa-eye')) {
        passwordIcon.classList.remove('fa-eye');
        passwordIcon.classList.add('fa-eye-slash');
        passwordUI.type = 'text';
    } else {
        passwordIcon.classList.remove('fa-eye-slash');
        passwordIcon.classList.add('fa-eye');
        passwordUI.type = 'password';
    }
     
}


passwordIcon.addEventListener('click', revealPassword);


// Fetch

const clickButton = function() {
    let myUsername = usernameUI.value;
    let myPassword = passwordUI.value;
    fetch("https://sharo-me.herokuapp.com/api/users/login", {
        method:"post",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            username:myUsername,
            password:myPassword
                  
        })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        if(data === "User Login Ok!") {
            window.localStorage.setItem('loggedIn', 'true');
            window.localStorage.setItem('loggedInUsername', myUsername);
            window.location = "../SocialMediaPage/index.html";
        } else {
            document.getElementById('login-failed').innerText = `Account not foud. Sign up first`;
        }
    });
     
}

buttonUI.addEventListener('click', clickButton);

