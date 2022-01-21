const todoForm = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');
const todoInput = document.querySelector('#todo-form input');


let todos = [];
// const todos = [];
// if(savedTodos !== null){ ~ 이 부분까지 했을 때 문제점
// application이 시작될 때 todos array는 항상 비어있기 때문에 newTodo 추가하고 새로고침 시 localstorage 값 부분이 계속 새로 바뀜
// newTodo를 작성하고 from을 submit 할 때 마다 newTodo를 todos array(빈 array)에 그냥 push 하게 됨



// 중복되는 이름은 가급적 통일
const TODOS_KEY = "todos";

function saveTodos(){
    // setItem(newTodo, 로컬저장소  키 이름);
    // localStorage.setItem('todos', todos);
    // javascript object나 array나 어떤 것이든 string으로 바꿔주는 기능
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
};


function deleteTodo(event){
    // 어떤 버튼이 눌렸는 지 찾기 위해
    // console.log(event.target.parentElement);
    const li = event.target.parentElement;
    // const li 아래에 있는데 상관 없는 건가?
    // console.log(li.id);
    li.remove();
    // todos = todos.filter((todo) => todo.id !== li.id)
    // 이 대로 하면 안지워짐
    // 왜냐? li.id 는 string임 
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    // todos.id 값을 newTodoObj에서 만들어서 알 수 있는건가?
    saveTodos();
};  

function paintTodo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;
     
    const span = document.createElement("span");
    span.innerText = newTodo.text;
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
    
    // 화면에 적힌 newTodo에 해당되는 x버튼을 눌렀을 때 localstorage에서도 삭제하기 위해 object(키와 값을 갖는)으로 설정해주기 id를 만들 경우 같은 이름이어도 누구를 삭제시키는 지 정확히 할 수 있음
    const newTodoObj = {
        text : newTodo,
        id : Date.now(), //id를 랜덤으로 계속 다르게 부여 가능
    };
    todos.push(newTodoObj);
    paintTodo(newTodoObj);
    saveTodos();
};

todoForm.addEventListener('submit', handleTodoSubmit);

// todos 저장하기 새로고침해도 안사라지게
const savedTodos = localStorage.getItem(TODOS_KEY);


// console.log(savedTodos);

// function sayHello(item){
//     console.log('this is the turn of', item);
// }
// 간단하게 줄일 수 있음

if(savedTodos !== null) {
    const parsedTodos = JSON.parse(savedTodos);
    // parse 메소드는 string 객체를 json 객체로 변환시켜준다
    // console.log(parsedTodos);
    // array라서 forEach 쓸 수 있음
    // forEach()는 function을 실행하게 해주는데 array에 있는 각각의 item에 대해서 실행시켜줌!
    // parsedTodos.forEach((item) => console.log('this is the turn of', item));

    // 우리가 원하는 것 parsedTodos array 내부의 item들을 가지고 그 item을 화면에 나타내기
    // 다행스럽게도 이미 item을 화면에 그려주는 paintTodo function을 가지고 있음
    todos = parsedTodos; // 새로고침해도 localstorage에서 이전 것들을 지우지 않게 하기 위해
    parsedTodos.forEach(paintTodo);
}



// Filter 쓰는 방법
// function sexyFilter(item){return item !== 3}
// [1,2,3,4,5].filter(sexyFilter)
// (4) [1,2,4,5]

// const arr = ["pizza", "banana", "tomato"]
// function sexyFilter(food){return food !== "banana"}
// arr.filter(sexyfilter)
// (2) ["pizza", "tomato"]

// const arr = [1245, 5600, 34, 7891, 12, 500]
// function sexyFilter(potato){return potato <=1000}
// arr.filter(sexyFilter)
// (3) [1245, 5600, 7891]

// const arr = [1,2,3,4]
// arr.filter(item => item > 2)
// (2) [3,4]
// arr
// (4) [1,2,3,4]
// newArr
// (2) [3,4]

// filter가 기존 arr 배열을 바꾸진 않음!
