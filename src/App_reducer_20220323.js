//75번째     const { username, email, age } = state.inputs 문법에 대해 정확하게 알기


import React, { useReducer, useRef } from "react";

const initialState = {
    inputs: {
        username: '',
        email: '',
        age: ''
    },
    users: [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com',
            age: '20'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com',
            age: '24'
        },
        {
            id: 3,
            username: 'lizios',
            email: 'liz@example.com',
            age: '22'
        },
        {
            id: 4,
            username: 'woojin',
            email: 'bwj0509@example.com',
            age: '26'
        }
    ]
}

function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.name]: action.value
                }
            }
        case 'CREATE':
            return {
                ...state,
                inputs: initialState.inputs,
                users: [
                    ...state.users,
                    action.user
                ]
            }
        case 'REMOVE':
            return {
                ...state,
                users: state.users.filter((user) => (action.id !== user.id))
            }
        default:
            return state
    }
}



function App_reducer_20220323() {

    const [state, dispatch] = useReducer(reducer, initialState)

    const { username, email, age } = state.inputs

    const nextId = useRef(5);

    const onChange = (e) => {
        const { name, value } = e.target
        dispatch({
            type: "CHANGE",
            name,
            value
        })
    }

    const onCreate = () => {
        dispatch({
            type: "CREATE",
            user: {
                id: nextId.current,
                username,
                email,
                age
            }
        })
        nextId.current += 1;
    }

    const onRemove = (e) => {
        const id = e.target.value
        dispatch({
            type: "REMOVE",
            id
        })
    }

    return (
        <div>
            <input placeholder="이름을 입력하세요" onChange={onChange} name="username" value={username} />
            <input placeholder="이메일을 입력하세요" onChange={onChange} name="email" value={email} />
            <input placeholder="나이를 입력하세요" onChange={onChange} name="age" value={age} />
            <button onClick={onCreate}>등록</button>
            {console.log(state.inputs)}
            <div>{state.users.map((user) => (
                <div>{user.id}, {user.username},{user.age} ,{user.email}<button onClick={onRemove} value={user.id}>삭제</button> </div>
            ))}</div>
        </div>
    );
}
export default App_reducer_20220323