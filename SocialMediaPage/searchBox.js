
let searchInput = document.querySelector('.search-input');
let searchIcon = document.querySelector('.search-fav');


const searchCheck = function() {
    let text = searchInput.value.toLowerCase();
    
    let pageElements = document.querySelectorAll('p');
     
    
    pageElements.forEach((item,index) => {
        let pageText = item.innerText.toLowerCase();
        if(pageText.includes(text) && searchInput.value !== "") {
            item.style.backgroundColor = '#B1E6FF';
            item.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
             
        } else {
            item.style.backgroundColor = null;
        }
    })   
}


searchIcon.addEventListener('click', searchCheck);
searchInput.addEventListener('change', searchCheck);


// Scroll back to Top
const scrollToTop = function() {
    window.scrollTo(0, 0);
     
}

window.addEventListener('unload', scrollToTop);

 
 