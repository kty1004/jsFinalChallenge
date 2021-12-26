const toDoForm=document.getElementById("todo-form");
const toDoinput=toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list")
const TODOS="todos";
let todos= []; // 할 일을 담을 array


function resavetodos(){
    const Todos=JSON.stringify(todos)
    localStorage.removeItem(TODOS)
    localStorage.setItem(TODOS, Todos);
}


function savetodos(){
    const Todos=JSON.stringify(todos)
    localStorage.setItem(TODOS, Todos);

}

function deletetodo(event){
    const li= event.target.parentElement // li의 span에 내용물이 담겨 있음.
    todos=todos.filter((item) =>item.id!==parseInt(li.id))
    li.remove()
    resavetodos()
}

function painttodo(todoObj){
    const ul =document.querySelector("#todo-list");
    const li= document.createElement("li");
    const span= document.createElement("span");
    const button = document.createElement("button");
    button.innerText="❌"

    span.innerText=`${todoObj.text}`;
    li.id=todoObj.id
    
    ul.appendChild(li)
    li.appendChild(span);
    li.appendChild(button);
    
    savetodos()
    
    button.addEventListener("click", deletetodo)    
}

function ToDoList(event){
    event.preventDefault();
    const newtodo= toDoinput.value;
    toDoinput.value="";
    todoObj={id:Date.now(), text:newtodo}

    todos.push(todoObj);

    painttodo(todoObj) // 리스트 생성
    savetodos()
}

toDoForm.addEventListener("submit", ToDoList);

const savetodo=localStorage.getItem(TODOS);

function restoretodo(item){
    painttodo(item)
}


if (savetodo!==null){
    const parsedtodo =JSON.parse(savetodo); // 저장한 todoarray를 가져옴.
    parsedtodo.forEach(restoretodo)
    todos= parsedtodo
}