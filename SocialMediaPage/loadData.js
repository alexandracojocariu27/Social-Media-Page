
let loggedInUsername = window.localStorage.getItem('loggedInUsername');
let parentContainer = document.getElementById('posts-wrapper');

// Create new post function
const createNewPost = function(author, date, text, picture) {
    let newPost = `<div class="post ">
    <div class="post-info">
        <img src="./img/profile-pic.jpg" alt="" class="post-info-pic">
        <div class="post-info-text">
            <p class="post-username">${author}</p>
            <p class="post-date-location">${new Date(date).getDate()}/${new Date(date).getMonth() + 1}/${new Date(date).getFullYear()}&nbsp;&nbsp;${new Date(date).getHours()}:${new Date(date).getMinutes()}</p>
        </div>
    </div>
    
    <div class="post-img-wrapper">
        <img src="${picture}" alt="" class="post-img">
    
    </div>
    
    <div class="post-text-wrapper">
        <p class="post-text">${text}</p>
    </div>
    
    <div class="post-icons-wrapper">
        <div class="icon-wrapper like-wrapper">
            <p class="icon-text">Like</p>
            <img src="./img/icon-like.png" alt="" class="post-icon">
        </div>
    
        <div class="icon-wrapper comment-wrapper">
            <p class="icon-text">Comment</p>
            <img src="./img/icon-comment.png" alt="" class="post-icon">
    
        </div>
    
        <div class="icon-wrapper share-wrapper">
            <p class="icon-text">Share</p>
            <img src="./img/icon-share1.png" alt="" class="post-icon">
    
        </div>
    </div>
    
    </div>`   

    parentContainer.insertAdjacentHTML("beforeend", newPost );
}


// Fetch for user data
if(loggedInUsername != null) {
    fetch("https://sharo-me.herokuapp.com/api/users/getUser", {
        method:"post",
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            username:loggedInUsername
                 
        }) 
    })
    .then(response => response.json())
    .then(userData => {
        window.localStorage.setItem('userId', userData.id);
        window.localStorage.setItem('author', `${userData.firstName} ${userData.lastName}`);
        document.querySelector('.user-name').innerText = `${userData.firstName} ${userData.lastName}`;

        // Fetch for posts
        let userID = window.localStorage.getItem('userId');
        
         
        
        return fetch("https://sharo-me.herokuapp.com/api/post/getAllForUserId", {
            method:"post",
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json"
            },
        
            body: JSON.stringify({
                userId: userID     
            })
        })
         
         
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
        if(JSON.stringify(data) !== '{}') {

            data.forEach((item,index) => {
                createNewPost(item.author, item.createdAt, item.postText, item.pictureLink);
            })
        }
    });
    
    

    
}