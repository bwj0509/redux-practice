import React, { useState, useReducer } from "react";


function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
}

function Counter(){

    const [ number, dispatch ] = useReducer(reducer, 0); 
    //state : 컴포넌트에서 사용 할 수 있는 상태 , dispatch : 액션을 발생시키는 함수
    // useReducer의 첫번째 파라미터는 reduer함수, 두번째 파라미터는 초기상태

    const onIncrease = () => {
        dispatch({type:'INCREMENT'})
    }

    const onDecrease = () => {
        if(number > 0){
            dispatch({type:'DECREMENT'})
        }
    }

    return(
        <div>
            <h1>{number}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>+1</button>
        </div>
    )
}
export default Counter