const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting')

const USERNAME_KEY = 'username';
// 변수명이 오류일때 콘솔창에서 변수명 오류라고 알려줌 오타 찾기 쉬우라고

function onLoginSubmit(event){
    event.preventDefault();
    const username = loginInput.value;
    loginForm.classList.add('hidden'); 
    paintGreetings(username);
    localStorage.setItem(USERNAME_KEY, username);
}

function paintGreetings(username){
    greeting.innerText = `hello ${username}`;
    greeting.classList.remove('hidden');
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null){
    loginForm.classList.remove('hidden');
    loginForm.addEventListener('submit', onLoginSubmit);
}else {
   paintGreetings(savedUsername);
}

