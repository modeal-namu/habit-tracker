import React, { Component } from 'react';
import Habit from './habit';

/* 
    컨테이너 컴포넌트 : 렌더링 되어야 할 데이터를 props로써 데이터 처리 능력이 없는 프레젠테이션 컴포넌트로 전달 
    → 데이터 처리 능력 있음, 동작(behavior) logic, API Request, Exception Error, setState... ETC    
*/
class Habits extends Component {
    // + 버튼 클릭 시. 해당하는 습관의 count를 1 증가시킨다.
    handleIncrement = habit => {
        this.props.onIncrement(habit);
    };
    // - 버튼 클릭 시, 해당하는 습관의 count(1 이상일 경우)를 1 감소 시킨다.
    handleDecrement = habit => {
        this.props.onDecrement(habit);
    };
    // 삭제버튼 클릭 시, 해당하는 습관을 지운다.
    handleDelete = habit => {
        this.props.onDelete(habit);
    };

    render() {
        return (
            <ul>
                { this.props.habits.map( habit => (
                    <Habit
                        // props 인자 선언
                        key={habit.id}
                        habit={habit}
                        onIncrement={this.handleIncrement}
                        onDecrement={this.handleDecrement}
                        onDelete={this.handleDelete}
                    /> 
                )
            )}
            </ul>
        );
    };
}

export default Habits;