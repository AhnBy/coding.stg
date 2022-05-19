import React, { Component } from 'react'
import "./App.css";
import BoxClass from "./component/BoxClass";

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
};

export default class AppClass extends Component {
    constructor(){
        super()
        this.state = {
          userSelect: null,
          computerSelect: null,
          result: "",
        };
    }
    
    play = (userChoice) => {
      let computerChoice = this.randomChoice();
      this.setState({
        userSelect: choice[userChoice],
        computerSelect: computerChoice,
        result: this.judgement(choice[userChoice], computerChoice),
      });
    };

    randomChoice = () => {
      let itemArray = Object.keys(choice); //객체에 키값만 뽑아서 어레이로 만들어주는 함수다
      let randomItem = Math.floor(Math.random() * itemArray.length);
      let final = itemArray[randomItem];
      return choice[final];
    };

    judgement = (user, computer) => {

    //user == computer tie
    //user == rock, computer == scissors user win
    //user == rock, computer == paper user lose
    //user == scissors, computer == paper user win
    //user == scissors, computer == rock user lose
    //user == paper, computer == rock user win
    //user == paper, computer == scissors user lose
  
      if (user.name == computer.name) {
        return "tie";
      } else if (user.name == "Rock")
        return computer.name == "Scissors" ? "win" : "lose";
      else if (user.name == "Scissors")
        return computer.name == "Paper" ? "win" : "lose";
      else if (user.name == "Paper")
        return computer.name == "Rock" ? "win" : "lose";
    };

  render() {
    return (
      <div>
        <div className="main">
          <BoxClass
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          <button onClick={() => this.play("scissors")}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
      </div>
    )
  }
}
