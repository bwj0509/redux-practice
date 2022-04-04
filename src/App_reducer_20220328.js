import React, { useReducer, useRef } from 'react';

const initialState = {
    inputs: {
        username: "",
        age: "",
        gender: "",
        active: "False"
    },
    users: [
        {
            id: 1,
            username: "WOOJIN",
            age: "26",
            gender: "male",
            active: "False"
        },
        {
            id: 2,
            username: "GILDONG",
            age: "24",
            gender: "male",
            active: "False"
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
                users: state.users.filter((user) => (String(user.id) !== action.id))
            }
        case 'ACTIVE':
            console.log('활성화 실시')
            return {
                ...state,
                users: [
                    ...state.users.map(user => user.id == action.id ? { ...user, active: 'True' } : user)
                ]

            }
        default:
            return state
    }
}

function App_reducer_20220402() {

    const [state, dispatch] = useReducer(reducer, initialState)

    const { username, age, gender } = state.inputs

    const nextId = useRef(3)

    const onChange = (e) => {
        const { name, value } = e.target
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
                id: nextId.current,
                username,
                age,
                gender
            }
        })
        nextId.current += 1
    }

    const onRemove = (e) => {
        const id = e.target.value
        dispatch({
            type: 'REMOVE',
            id
        })
    }

    const onActive = (e) => {
        const id = e.target.value
        dispatch({
            type: "ACTIVE",
            id
        })
    }

    return (
        <div>
            <input placeholder='이름' name='username' value={username} onChange={onChange} />
            <input placeholder='나이' name='age' value={age} onChange={onChange} />
            <input placeholder='성별' name='gender' value={gender} onChange={onChange} />
            <button onClick={onCreate}>등록</button>
            <table style={{ width: '60%', textAlign: 'center', marginTop: '10px' }}>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>나이</th>
                    <th>성별</th>
                    <td>활성화</td>
                    <th>비고</th>
                </tr>
                {state.users.map((data) => (
                    <tr>
                        <td>{data.id}</td>
                        <td onClick={onActive} value={data.id}>{data.username}</td>
                        <td>{data.age}</td>
                        <td>{data.gender}</td>
                        <td>{data.active}</td>
                        <td><button onClick={onRemove} value={data.id}>삭제</button></td>
                    </tr>
                ))}
            </table>
            <div>활성화된 사용자수 : {state.users.filter((user) => (user.active === 'True')).length}명</div>
            {console.log(state.users)}
        </div>
    );
}

export default App_reducer_20220402;