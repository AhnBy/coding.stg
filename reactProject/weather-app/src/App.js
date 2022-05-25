import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

//1. 앱이 실행되자마자 현재 위치 기반의 날씨가 보인다.
//2. 도시, 섭씨온도, 화씨온도, 날씨상태
//3. 5개의 버튼이 있다. (1개는 현재위치, 4개 다른 도시)
//4. 도시버튼을 클릭할때 마다 도시별 날씨가 나온다.
//5. 현재위치 버튼을 누르면 다시 현재위치 기반의 날씨가 나온다.
//6. 데이터를 들고오는 동안 로딩 스피너가 돈다.

function App() {

  const getCurrentLocation=() => {
    navigator.geolocation.getCurrentPosition((position)=>{
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
      console.log("현재위치", lat, lon)
    });
  }

  const getWeatherByCurrentLocation = async(lat, lon) => {
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=f1935cfebbf41aa5e19510fe906c029a`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data", data);
  };

  
  useEffect(()=>{
    getCurrentLocation()
  },[])
  return (
    <div>
      hiiiiii
    </div>
  );
}

export default App;
