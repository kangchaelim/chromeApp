const clock = document.querySelector('h2#clock');

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
     clock.innerText = `${hours}:${minutes}:${seconds}`;
    // clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

  // 1초를 기다리지 않고 website가 load되자마자 getClock()을 실행하게 하기
setInterval(getClock, 1000);


// 1을 01로 바꿔보자 -> padStart 이용
console.log("1".padStart(2, "0"));
// 01
console.log("12".padStart(2, "0"));
// 12
console.log("hello".padStart(20, "x"));
// xxxxxxxxxxxxxxxhello

