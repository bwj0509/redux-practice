import React, { useReducer, useRef } from 'react';


const initialState = {
    inputs: {
        username: '',
        age: '',
        gender: '',
    },
    users: [
        {
            id: '1',
            username: 'WOOJIN',
            age: '26',
            gender: 'male'
        },
        {
            id: '2',
            username: 'hanna',
            age: '26',
            gender: 'female'
        },
        {
            id: '3',
            username: 'gildong',
            age: '30',
            gender: 'male'
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
                    action.user,
                ]
            }
        case 'REMOVE':
            return {
                ...state,
                users: state.users.filter((user) => (user.id !== action.id))
            }
        default:
            return state
    }
}


function App_reducer_20220324() {

    const [state, dispatch] = useReducer(reducer, initialState)

    const { username, age, gender } = state.inputs

    const nextId = useRef(4);

    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch({
            type: 'CHANGE',
            name,
            value
        })
    }

    const onCreate = () => {
        dispatch({
            type: 'CREATE',
            user: {
                id: String(nextId.current),
                username,
                age,
                gender
            }
        })
        nextId.current += 1;
    }

    const onRemove = (e) => {
        const id = e.target.value
        dispatch({
            type: 'REMOVE',
            id
        })
    }

    return (
        <div>
            <input placeholder='????????? ???????????????.' name='username' value={username} onChange={onChange} />
            <input placeholder='????????? ???????????????.' name='age' value={age} onChange={onChange} />
            <input placeholder='????????? ???????????????.' name='gender' value={gender} onChange={onChange} />
            <button onClick={onCreate}>??????</button>
            {state.users.map((data) => (
                <div>{data.id}, {data.username}, {data.age}, {data.gender}<button onClick={onRemove} value={data.id}>??????</button></div>

            ))}
        </div>
    );
}

export default App_reducer_20220324;