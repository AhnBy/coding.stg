import { useState,useEffect } from 'react';
import './App.css';
import Box from "./component/Box"
function App() {
  let counter = 0;
  // useState(초기값) -> 반환값 = array [counter2 = 값, setCounter2 = 함수]
  const [counter2, setCounter2] = useState(0);
  const [value, setValue] = useState(0);
  const increase =()=>{
    counter = counter + 1;
    // UI를 바로 바꾸는 것은 돈이 많이들기때문에 setCounter2(비동기작동)의 state값은 함수가 끝난 후 적용된다.
    //setCounter2(counter2 + 1);
    setValue(value+2)
    console.log("counter는 ", counter, "counter2 state는 ", counter2);
  };

  //1. 유저가 버튼을 클릭한다.
  //2. counter+1해서 1이됨
  //3. setState함수 호출
  //4. console.log 실행됨
  // 변수값은 1로 보이고 state값은 아직 안변했기 때문에 그전에 값이 보인다.
  // 함수끝
  // app다시 re render
  // let counter = 0 을 거치면서 counter 값은 다시 0으로 초기화 된다.
  // state값은 update가 되면서 다시 render를 한다.

  // 대부분의 것 = state
  // 잠깐 기억해야하는 값 = 변수
  useEffect(()=>{
    console.log("useEfferct1 Firee")
  }, []);

  useEffect(()=>{
    console.log("useEfferct2 Firee", counter2, value)
  }, [counter2]);

  useEffect(()=>{
    console.log("다른내용 하고싶어요", value)
  }, [value]);

  return (
    //리액트에선 class 를 className 으로 사용한다.
  <div>
    {console.log("render")}
    {/* component : 반복되는 Box를 만들어서 가져와서 쓴다. */}
    <Box name="리사" num={1}/>
    <Box name="제니" num={2}/>
    <Box name="지수" num={3}/>

    <div>
      <div>{counter}</div>
      {/* UI에 보여줘야하는 값들은 무조건 state로 만들어줘야한다. */}
      <div>state:{counter2}</div>
      {/* 자바스크립트에선 onclick 이였지만 리액트에선 onClick 이다. */}
      <button onClick={increase}>클릭!</button>

    </div>
  </div>

  
  );
}

export default App;
