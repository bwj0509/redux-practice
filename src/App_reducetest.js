import React, { useReducer, useRef } from "react";

const initialState = {
    inputs: {
      username: '',
      email: ''
    },
    users:[
      {
        id: 1,
        username: 'velopert',
        email: 'public.velopert@gmail.com',
        active : true
      },
      {
        id: 2,
        username: 'tester',
        email: 'tester@example.com',
        active : false
      },
      {
        id: 3,
        username: 'lizios',
        email: 'liz@example.com',
        active : false
      },
      {
        id: 4,
        username: 'woojin',
        email: 'bwj0509@example.com',
        active : false
      }
    ]
  }

function reducer(state, action){

    

    switch(action.type){
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs : {
                    ...state.inputs,
                    [action.name] : action.value
                }
            }
        case 'ADD_USER':
            return {
                inputs:initialState.inputs,
                users:state.users.concat(action.user)
            }
        default:
            return state;
    }
}




function App_reducetest(){

    const [state, dispatch] = useReducer(reducer, initialState);
    const { users } = state
    const { username, email } = state.inputs
    const nextId = useRef(5);

    const onChange = (e)=>{
       const  { name, value } = e.target;
       dispatch({
           type:"CHANGE_INPUT",
           name,
           value
       })
    }

    const onCreate = () =>{
        dispatch({
            type:"ADD_USER",
            user:{
                id:nextId.current,
                username,
                email
            }
        })
        nextId.current +=1;
    }


    return(
        <div>
            <input placeholder="이름을 입력하세요." name="username" value={username} onChange={onChange}/> 
            <input placeholder="이메일을 입력하세요" name="email" value={email} onChange={onChange}/>
            <button onClick={onCreate}>등록</button>
            {console.log(state)}
            <div>
                {state.users.map((data)=>(
                    <div>{data.id}  ,   {data.username}  ,   {data.email}</div>
                ))}
            </div>
        </div>
    );
}
export default App_reducetest