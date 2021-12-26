const divLogin= document.querySelector("#login");
const loginForm =document.querySelector("#login-form");
const loginput= loginForm.querySelector("input");
const loginButton= loginForm.querySelector("form button");
const CLASSNAME_HIDDEN= 'hidden';
const h1 = divLogin.querySelector("h1");
const USERNAME="username";

const username = loginput.value;

function onLoginBtnsubmit(event){
    event.preventDefault();
    
    h1.classList.remove(CLASSNAME_HIDDEN);
    h1.innerText=`hello ${username}`;
    loginForm.classList.add(CLASSNAME_HIDDEN);

    localStorage.setItem(USERNAME, username);
    
}


loginForm.addEventListener("submit", onLoginBtnsubmit);


const save_userName= localStorage.getItem(USERNAME);

function relogin(event){
    event.preventDefault()
    console.log("hello");
}


if (save_userName===null) {
    loginForm.classList.remove(CLASSNAME_HIDDEN);

} else{ //storage가 비어있지 않을 때.
    
    loginForm.classList.add(CLASSNAME_HIDDEN);
    const reLonInButton = document.createElement("input");
    reLonInButton.value="re-login"
    reLonInButton.type="submit"
    loginForm.appendChild(reLonInButton);

    //reLonInButton.addEventListener("submit", relogin)

    h1.classList.remove(CLASSNAME_HIDDEN);
    h1.innerText=`hello ${save_userName}`;
}