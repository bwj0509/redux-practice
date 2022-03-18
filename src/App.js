import './App.css';
import React, { useRef, useReducer, useCallback } from 'react';
import UserList from './component/UserList';
import CreateUser from './component/CreateUser';

function countActiveUsers(users){
  console.log('활성 사용자 수를 세는중...')
  return users.filter((user) => user.active).length
}

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
      return{
        ...state,
        inputs:{
          ...state.inputs,
          [action.name] : action.value //Computed property names
        }
      }
    case 'CREATE_USER':
      return{
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      }
    case 'TOGGLE_USER':
      return{
        ...state,
        users: state.users.map((user) => user.id === action.id? { ...user, active: !user.active } : user)
      }
    case 'REMOVE_USER':
      return{
        ...state,
        users: state.users.filter((user)=> user.id !== action.id)

      }
    default:
      return state;

    }
}

function App() {

  const [ state, dispatch ] = useReducer(reducer, initialState);
  const { users }  = state;
  const { username, email } = state.inputs;
  const nextId = useRef(5);

  const onChange = useCallback((e)=>{
    const { name, value } = e.target;
    dispatch({
      type : 'CHANGE_INPUT',
      name,
      value
    });
  },[])

  const onCreate = useCallback(()=>{
    dispatch({
      type : 'CREATE_USER',
      user : {
        id : nextId.current,
        username,
        email
      }
    })
    nextId.current += 1;
  }, [username, email])

  const onToggle = useCallback((id)=>{
    dispatch({
      type:'TOGGLE_USER',
      id
    })
  },[])

  const onRemove = useCallback((id)=>{
    dispatch({
      type:'REMOVE_USER',
      id
    })
  },[])


  return (
   <>
    <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />
    <UserList users={users} onToggle={onToggle} onRemove={onRemove}/>
    <div>활성 사용자수 : 1</div>
   </>

  );
}

export default App;

