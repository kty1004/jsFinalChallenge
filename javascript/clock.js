const clock =document.querySelector("h1#clock");

function getClock(){
    const date= new Date();
    const hour=String(date.getHours()).padStart("2","0");
    const minute=String(date.getMinutes()).padStart("2","0");
    const second=String(date.getSeconds()).padStart("2","0");
    clock.innerText= `${hour}:${minute}:${second}`;
}

getClock() // setInterval을 쓰면 1000있다가 실행되기 때문에 바로 실행될 수 있게 한다.
setInterval(getClock, 1000);

