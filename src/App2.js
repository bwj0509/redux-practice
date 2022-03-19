import React, { useReducer } from "react";

 // 리듀서 이용해서 유저정보 업데이트하기성공
const initialState = {
    input:{
        username:'',
        age:''
    },
    user:[
        {
            username:'woojin',
            age:26
        },
        {
            username:'gildong',
            age:22
        }
    ]
}

function reducer(state, action){
    switch(action.type){
        case "CHANGE":
            return {
                ...state,
                input:{
                    ...state.input,
                    [action.name] : action.value
                }
            }
        case "CREATE":
            if(!(action.username == '' || action.age =='')){
                return {
                    ...state,
                    user:[
                        ...state.user,
                        {
                            username:action.username,
                            age:action.age
                        }
                    ]
                }
            }
        
        default:
            return state
    }
}


function App2(){
    const [state, dispatch] = useReducer(reducer, initialState)

    const { username, age } = state.input
    
    const onChange = (e)=>{
        const { name, value } = e.target
        dispatch({
            type:"CHANGE",
            name,
            value
        })
    }

    const onCreate = ()=>{
        dispatch({
            type:"CREATE",
            username,
            age
        })
    }


    return(
        <>
            <input name="username" placeholder="이름을 입력해주세요." onChange={onChange} value={username}/>
            <input name="age" placeholder="나이를 입력해주세요" onChange={onChange} value={age}/>
            <button onClick={onCreate}>등록</button>
            {console.log(state)}
            {state.user.map((data, i)=>(
                <div>{state.user[i].username},{state.user[i].age}</div>
            ))}
        </>
    )
}
export default App2;
