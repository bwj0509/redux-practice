//파견지에서 했던 마지막 REDUCER파일!! 이거보고 쭉 이어서 실시하기 기능들 하나씩 추가시키기!!!!!

import React, { useReducer, useRef } from "react";

const initialState = {
    inputs: {
      username: '',
      email: '',
      age:''
    },
    users:[
      {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        age:'20'
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        age:'24'
      },
      {
        id: 3,
        username: 'lizios',
        email: 'liz@example.com',
        age:'22'
      },
      {
        id: 4,
        username: 'woojin',
        email: 'bwj0509@example.com',
        age:'26'
      }
    ]
  }

function reducer(state, action){
    switch(action.type){
        case 'CHANGE':
            return {
                ...state,
                inputs : {
                    ...state.inputs,
                    [action.name] : action.value 
                }
            }
        case 'CREATE':
            return {
                ...state,
                users: state.users.concat(action.user),
                inputs : initialState.inputs,
            }
        case 'REMOVE':
            return {
                ...state,
                users: state.users.filter((user)=> user.id !== action.id)
            }
            
        default:
            return state;
    }
}


function App_reducertest(){

    const [state, dispatch] = useReducer(reducer, initialState);

    const { username, age, email } = state.inputs

    const nextId = useRef(5);

    const onChange = (e) =>{ // 입력창에 입력이 들어올때

        const { name, value }= e.target

        dispatch({
            type:'CHANGE',
            name,
            value
        })
    }

    const onCreate = () =>{
        dispatch({
            type : 'CREATE',
            user: {
                id: nextId.current,
                username,
                email,
                age,
            }
    
        })
        nextId.current += 1;
    }

    const onRemove = (id)=>{
        dispatch({
            type: 'REMOVE',
            id
        })
    }

    return(
        <div>
            <input placeholder="이름을 입력하세요" name="username" value={username} onChange={onChange}/>
            <input placeholder="나이를 입력하세요" name="age" value={age} onChange={onChange}/>
            <input placeholder="이메일을 입력하세요" name="email" value={email} onChange={onChange}/>
            <button onClick={onCreate}>등록</button>
            {state.users.map((data)=>(
                <div>{data.id}, {data.username}, {data.email}, {data.age}<button value={data.id} onClick={()=>{onRemove(data.id)}}>X</button></div>
            ))}
            
        </div>
    );
}
export default App_reducertest