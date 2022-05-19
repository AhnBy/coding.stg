import { useState } from 'react';
import './App.css';
import Box from './component/Box';
// 1. 박스2개 (타이틀,사진,결과값)
// 2. 가위바위보 버튼이 있다.
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 랜덤하게 아이템 선택이 된다.
// 5. 3,4 의 결과를 가지고 누가 이겼는지 승패를 따진다.
// 6. 승패결과에 따라 테두리 색이 바뀐다.(이기면-초록, 지면-빨강, 비기면-검정)
const choice = {
  rock:{
    name:"Rock",
    img:"https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg"
  },
  scissors:{
    name:"Scissors",
    img:"https://www.ikea.com/kr/en/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s"
  },
  paper:{
    name:"Paper",
    img:"https://post-phinf.pstatic.net/MjAxNzExMjJfMTI0/MDAxNTExMzI1Nzc5NTA1.2P8_fPUbe70l7y1w0NXqq_YEBQ4cNsNFFbZrly86hiUg.FejPQ9wnWeNwGliZLj12ZVxqL8hYmt4vZluaR72iFbIg.JPEG/crumpled-2537807_1200.jpg?type=w1200"
  }
}
function App() {

  const [userSelcet,setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result,setResult] = useState("")
  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice],computerChoice));
  };

  const judgement = (user, computer) => {
    console.log("user",user, "computer",computer);

    //user == computer tie
    //user == rock, computer == scissors user win
    //user == rock, computer == paper user lose
    //user == scissors, computer == paper user win
    //user == scissors, computer == rock user lose
    //user == paper, computer == rock user win
    //user == paper, computer == scissors user lose

    if(user.name == computer.name){
      return "tie"
    }else if(user.name == "Rock")
      return computer.name == "Scissors"? "win" : "lose";
    else if(user.name == "Scissors")
      return computer.name == "Paper"? "win" : "lose";
    else if(user.name == "paper")
      return computer.name == "Rock"? "win" : "lose";
  };

  //숙제 1.컴퓨터 결과 보이게 하기
  //숙제 2.승패결과에 따라 테두리색 바뀌게하기

  const randomChoice=()=>{
    let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 Array로 만들어주는 함수
    console.log("item array", itemArray);
    let randomItem = Math.floor(Math.random()*itemArray.length);
    console.log("random value",randomItem);
    let final = itemArray[randomItem]
    console.log("final",final);
    return choice[final];
  }

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelcet} result={result}/>
        <Box title="Computer" item={computerSelect} result={result}/>
      </div>
      {/* play()는 함수이기 때문에 react를 실행할때 함수를 실행시켜버림 
      때문에 함수를 사용할때 ()=>함수 로 사용*/}
      <div className='main'>
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
