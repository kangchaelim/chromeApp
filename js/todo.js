const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');
const todoInput = document.querySelector('#todo-form input');

const todos = [];

function saveTodos(){
    // setItem(newTodo, 로컬저장소 키 이름);
    localStorage.setItem('todos', todos);
};


function deleteTodo(event){
    // 어떤 버튼이 눌렸는 지 찾기 위해
    // console.log(event.target.parentElement);
    const li = event.target.parentElement;
    // const li 아래에 있는데 상관 없는 건가?
    li.remove();
};

function todayTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener('click', deleteTodo);
    // li 내부에 span, button 만들어주기
    li.appendChild(span);
    li.appendChild(button);   
    // ul 내부에 li 만들어주기
    todoList.appendChild(li);
}


function handleTodoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    // console.log(newTodo, todoInput.value);
    // todos 배열에 newTodo 추가하기
    todos.push(newTodo);
    todayTodo(newTodo);
    saveTodos();
};

todoForm.addEventListener('submit', handleTodoSubmit);


