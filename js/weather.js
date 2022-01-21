const API_KEY = "15f0218e8308af3e081e282be3afd88c";

function onGeoOk(position){
    // latitude 위도 longitude 경도
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    // console.log("you live in", lat, log);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        // console.log(data.name, data.weather[0].main);
        const weather = document.querySelector('#weather span:first-child');
        const city = document.querySelector('#weather span:last-child');
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

// fetch를 사용할 땐 두 단계를 거쳐야 한다. 먼저 올바른 url로 요청을 보내야 하고, 바로 뒤에오는 응답에 대해 json()을 해줘야 하는 것이다(axios는 json()과정을 자동으로 해주는 셈이다).
// res의 body에 담겨있을 것 같지만 그렇지 않았다. 이 body는 스트림이고, 데이터가 완전히 다 받아진 상태가 아닌것이다. 이 걸로는 날씨 데이터를 받아와 데이터를 뿌려줄 수가 없다. 그래서 res 객체의 json()이라는 메서드를 사용한다. json()은 Response 스트림을 가져와 스트림이 완료될때까지 읽는다. 그리고 다 읽은 body의 텍스트를 Promise형태로 반환한다.


function onGeoError(){
    alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)

// api? 다른 서버와 이야기 할 수 있는 방법
// https://openweathermap.org

