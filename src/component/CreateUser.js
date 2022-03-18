import React from "react";

function CreateUser({ username, email, onChange, onCreate }){

    

    return(
        <>
        <input placeholder="유저이름" name="username" value={username} onChange={onChange} />
        <input placeholder="이메일" name="email" value={email} onChange={onChange}/>
        <button onClick={onCreate}> 등록 </button>
        </>
    )
}
export default CreateUser