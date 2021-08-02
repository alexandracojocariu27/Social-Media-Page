let postText = document.getElementById('postText');
let postLink = document.getElementById('postLink'); 
let postButton = document.getElementById('postButton');
let inputsStatus = [false,false];

const checkText = function() {
    if(postText.value ===" ") {
        inputsStatus[0] = false;
    } else {
        inputsStatus[0] = true;     
    } 
    
    if(inputsStatus.every((item,index) => item === false)) {
        postButton.disabled = true;
    } else {
        postButton.disabled = false;
    }

    console.log(inputsStatus);
}

postText.addEventListener('change', checkText);


const checkImg = function() {
    if(postLink.value ===" ") {
        inputsStatus[1] = false;
    } else {
        inputsStatus[1] = true;     
    } 
    
    if(inputsStatus.every((item,index) => item === false)) {
        postButton.disabled = true;
    } else {
        postButton.disabled = false;
    }

    console.log(inputsStatus);
}

postLink.addEventListener('change', checkImg);



const addPost = function() {
    let postAuthor = window.localStorage.getItem('author');
    let postUserId = window.localStorage.getItem('userId');
    let postTimeStamp = new Date().getTime();
    let postTextValue = postText.value;
    let postLinkValue = postLink.value;

    fetch('https://sharo-me.herokuapp.com/api/post/create', {
        method:"post",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            userId:postUserId,                
            postText:postTextValue,       
            pictureLink:postLinkValue,    
            author:postAuthor,            
            timeStamp:postTimeStamp      
        })
    })
    .then(response => response.text())
    .then(data => {
        console.log(data);
        if(data === "Post Added!") {
            window.location = "../SocialMediaPage/index.html";
        } else if(data === "User Doesn't Exist") {
            window.localStorage.removeItem('userId');
            window.location = "../Login/login.html";
        } else if(data === "Creating Post Failed") {
            window.location.reload();
        }
    })
}

postButton.addEventListener('click', addPost);

// console.log(new Date().getTime());