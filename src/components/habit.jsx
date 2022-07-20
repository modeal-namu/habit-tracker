import React, { Component } from 'react';

/* 
    프레젠테이션 컴포넌트 : 부모 컴포넌트로부터 받은 Props인 데이터와 콜백(callback)을 사용 
    → DOM 마크업과 스타일 담당(UI) / 데이터 출력, 데이터 처리 능력은 없음, no logic
*/
class Habit extends Component {

    handleIncrement = () => { 
        this.props.onIncrement(this.props.habit);
    }
    handleDecrement = () => {
        this.props.onDecrement(this.props.habit);
    }
    handleDelete = () => {
        this.props.onDelete(this.props.habit);
    }

    render() {
        const { name, count } = this.props.habit;
        const { onIncrement, onDecrement, onDelete} = this.props;

        return <li className="habit">
            <span className="habit-name">{name}</span>
            <span className="habit-count">{count}</span>
            <button 
                className="habit-button habit-increase" 
                onClick={this.handleIncrement}
                // onClick={onIncrement(this.props.habit)}
            >
                <i className="fas fa-plus-square"></i>
            </button>
            <button 
                className="habit-button habit-decrease" 
                onClick={this.handleDecrement}
                // onClick={onDecrement(this.props.habit)}
            >
                <i className="fas fa-minus-square"></i>
            </button>
            <button 
                className="habit-button habit-delete" 
                onClick={this.handleDelete}
                // onClick={onDelete(this.props.habit)}
            >
                <i className="fas fa-trash"></i>
            </button>
        </li>;
    }
}

export default Habit;