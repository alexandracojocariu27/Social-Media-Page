
let firstNameUI = document.getElementById('firstName');
let  lastNameUI = document.getElementById('lastName');
let usernameUI = document.getElementById('userName'); 
let emailUI = document.getElementById('email');
let passwordUI = document.getElementById('password');
let passwordIcon = document.getElementById('revealPassword');
let buttonUI = document.getElementById('signInBtn');

let checkInputs = [false,false,false,false,false];

// First Name
const firstNameValidation = function() {
    if(firstNameUI.value.length >= 2) {
        firstNameUI.classList.remove('is-invalid'); 
        document.getElementById('invalidFeedbackFirstName').innerText = '';
        firstNameUI.classList.add('is-valid');
        checkInputs[0] = true;
    } else {
        firstNameUI.classList.remove('is-valid');  
        firstNameUI.classList.add('is-invalid');
        document.getElementById('invalidFeedbackFirstName').innerText = 'Min 2 characters'; 
        checkInputs[0] = false;
    }

    if(checkInputs.every((item,index) => item === true)) {
        buttonUI.disabled = false;
    } else {
        buttonUI.disabled = true;
    }
}

firstNameUI.addEventListener('keyup', firstNameValidation);

// Last Name
const lastNameValidation = function() {
    if( lastNameUI.value.length >= 2) {
         lastNameUI.classList.remove('is-invalid'); 
        document.getElementById('invalidFeedbackFirstName').innerText = '';
         lastNameUI.classList.add('is-valid');
        checkInputs[1] = true;
    } else {
         lastNameUI.classList.remove('is-valid');  
         lastNameUI.classList.add('is-invalid');
        document.getElementById('invalidFeedbackFirstLastName').innerText = 'Min 2 characters'; 
        checkInputs[1] = false;
    }

    if(checkInputs.every((item,index) => item === true)) {
        buttonUI.disabled = false;
    } else {
        buttonUI.disabled = true;
    }
}

lastNameUI.addEventListener('keyup', lastNameValidation);

// UserName
const usernameValidation = function() {
    if (usernameUI.value.length >= 2) {
        checkInputs[2] = true;
        usernameUI.classList.remove('is-invalid');
        usernameUI.classList.add('is-valid');    
         
    } else {
        checkInputs[2] = false;
        usernameUI.classList.remove('is-valid');
        usernameUI.classList.add('is-invalid');
        document.getElementById('invalidFeedbackUserName').innerText = 'Min 2 characters';
    }

    if(checkInputs.every((item,index) => item === true)) {
        buttonUI.disabled = false;
    } else {
        buttonUI.disabled = true;
    }
}


usernameUI.addEventListener('keyup', usernameValidation);

// Email
const emailValidation = function() {
    if(validator.isEmail(emailUI.value) === true) {
        emailUI.classList.remove('is-invalid'); 
        document.getElementById('invalidFeedbackEmail').innerText = '';
        emailUI.classList.add('is-valid');
        document.getElementById('validFeedbackEmail').innerText = 'Looks good!';
        checkInputs[3] = true;
    } else {
        emailUI.classList.remove('is-valid');
        document.getElementById('validFeedbackEmail').innerText = ''
        emailUI.classList.add('is-invalid'); 
        document.getElementById('invalidFeedbackEmail').innerText = 'Enter a valid email adress';
        checkInputs[3] = false;
    }

    if(checkInputs.every((item,index) => item === true)) {
        buttonUI.disabled = false;
    } else {
        buttonUI.disabled = true;
    }
}

emailUI.addEventListener('keyup', emailValidation);


// Password
const passwordValidation = function() {
    if(validator.isStrongPassword(passwordUI.value,  
        {minLength: null, 
        minLowercase: 1, 
        minUppercase: null, 
        minNumbers: null, 
        minSymbols: null}) === true) {
        document.getElementById('lowercase').style.color = 'green';    
    } else {
        document.getElementById('lowercase').style.color = 'black';    
    }
    
    if(validator.isStrongPassword(passwordUI.value,  
        {minLength: null, 
        minLowercase: null, 
        minUppercase: 1, 
        minNumbers: null, 
        minSymbols: null}) === true) {
        document.getElementById('uppercase').style.color = 'green';    
    } else {
        document.getElementById('uppercase').style.color = 'black'; 
    }
    
    if(validator.isStrongPassword(passwordUI.value,  
        {minLength: null, 
        minLowercase: null, 
        minUppercase: null, 
        minNumbers: 1, 
        minSymbols: null}) === true) {
        document.getElementById('number').style.color = 'green';    
    } else {
        document.getElementById('number').style.color = 'black'; 
    }

    if(validator.isStrongPassword(passwordUI.value,  
        {minLength: null, 
        minLowercase: null, 
        minUppercase: null, 
        minNumbers: null, 
        minSymbols: 1}) === true) {
        document.getElementById('symbol').style.color = 'green';    
    } else {
        document.getElementById('symbol').style.color = 'black'; 
    }
    
    if(validator.isStrongPassword(passwordUI.value,  
        {minLength: 8, 
        minLowercase: null, 
        minUppercase: null, 
        minNumbers: null, 
        minSymbols: null}) === true) {
        document.getElementById('length').style.color = 'green';    
    } else {
        document.getElementById('length').style.color = 'black'; 
    }

    if(validator.isStrongPassword(passwordUI.value,  
        {minLength: 8, 
        minLowercase: 1, 
        minUppercase: 1, 
        minNumbers: 1, 
        minSymbols: 1}) === true) {
            if(validator.isStrongPassword(passwordUI.value,  
            {returnScore: true, 
            pointsPerUnique: 1, 
            pointsPerRepeat: 0.5, 
            pointsForContainingLower: 10, 
            pointsForContainingUpper: 10, 
            pointsForContainingNumber: 10, 
            pointsForContainingSymbol: 10}) < 50 ) {

            passwordUI.classList.remove('is-invalid'); 
            document.getElementById('invalidFeedbackPassword').innerText = '';
            passwordUI.classList.add('is-valid');
            document.getElementById('validFeedbackPassword').innerText = 'Password is WEAK';
            document.getElementById('validFeedbackPassword').style.color = '#D3AB14';
            checkInputs[4] = true;
            } else if(validator.isStrongPassword (passwordUI.value,  
            {returnScore: true, 
            pointsPerUnique: 1, 
            pointsPerRepeat: 0.5, 
            pointsForContainingLower: 10, 
            pointsForContainingUpper: 10, 
            pointsForContainingNumber: 10, 
            pointsForContainingSymbol: 10}) >= 50 ) {
            passwordUI.classList.remove('is-invalid'); 
            document.getElementById('invalidFeedbackPassword').innerText = '';
            passwordUI.classList.add('is-valid');
            document.getElementById('validFeedbackPassword').innerText = 'Password is STRONG';
            checkInputs[4] = true;    
        }   
         
    } else { 
        passwordUI.classList.remove('is-valid');
        document.getElementById('validFeedbackPassword').innerText = ''
        passwordUI.classList.add('is-invalid');
        checkInputs[4] = false; 
    }

   console.log(checkInputs);
    if(checkInputs.every((item,index) => item === true)) {
        buttonUI.disabled = false;

    } else {
        buttonUI.disabled = true;
    }
}
 
 
 
passwordUI.addEventListener('keyup', passwordValidation);

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

// Button

const clickButton = function() {
    let myEmail = emailUI.value;
    let myPassword = passwordUI.value;
    let myUsername = usernameUI.value;
    let myfirstName = firstNameUI.value;
    let mylastName = lastNameUI.value;
    // API
    fetch("https://sharo-me.herokuapp.com/api/users/register", {
        method:"post",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            username:myUsername,
            password:myPassword,
            email:myEmail,
            firstName:myfirstName,     
            lastName:mylastName     
        })
    }) 
    .then((response) => response.text())
    .then((data) =>  {
        if(data === "User Added!") {
            window.location = "../Login/login.html";
        } else {
            alert('Email already registered');
        }
    });
}
 
buttonUI.addEventListener('click', clickButton);