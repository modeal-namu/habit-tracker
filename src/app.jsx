import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';

class App extends Component {
  state = {
    habits : [
        { id: 1, name : 'Reading', count: 0 },
        { id: 2, name : 'Running', count: 0 },
        { id: 3, name : 'coding', count: 0 },
    ],
  };

  // + 버튼 클릭 시. 해당하는 습관의 count를 1 증가시킨다.
  handleIncrement = habit => {
    const habits = [...this.state.habits]; 
    const index = habits.indexOf(habit); 
    habits[index].count++;
    // this.setState({ habits(state) : habits(로컬변수)});
    this.setState({habits});
  };
  // - 버튼 클릭 시, 해당하는 습관의 count(1 이상일 경우)를 1 감소 시킨다.
  handleDecrement = habit => {
    const habits = [...this.state.habits]; 
    const index = habits.indexOf(habit);
    const count = habits[index].count - 1;
    habits[index].count = count < 0 ? 0 : count;
    this.setState({habits});
  };
  // 삭제버튼 클릭 시, 해당하는 습관을 지운다.
  handleDelete = habit => {
      const habits = this.state.habits.filter(item => item.id !== habit.id);
      this.setState({habits});
  };

  render(){
    return (
      <Habits 
        habits={this.state.habits}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
      />
    );
  }
}

export default App;
