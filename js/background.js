const images = ["1.jpg", "2.jpg", "3.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// <img src=""></img> html에 추가하기
const bgImg = document.createElement('img');

// console.log(bgImg);

bgImg.src = `img/${chosenImage}`;
// 왜 ${} 이 안에 쓰지?


// 위에 까지 작성 시 document에 존재 하지 않음. javascript에만 존재.
document.body.appendChild(bgImg);