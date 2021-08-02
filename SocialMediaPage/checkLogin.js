
let isUserLogged = window.localStorage.getItem('loggedIn');


if(isUserLogged === null) {
    console.log('Redirect to login');
    window.location = "../Login/login.html";
}