import React, { useEffect } from "react";

function UserList({ users, onToggle, onRemove }){


    return(
        
        <div>
            <table className="border">
                <tr className="border">
                    <th className="border">Id</th>
                    <th className="border">Username</th>
                    <th className="border">Email</th>
                    <th className="border">비고</th>
                    
                </tr>
                    {users.map((users, index)=>(
                        <tr key={index}>
                            <td>{users.id}</td>
                            <td style={{ 
                                cursor:'pointer',
                                color: users.active? 'green': 'black'
                             }} onClick={()=>onToggle(users.id)}>
                                {users.username}
                            </td>
                            <td>{users.email}</td>
                            <td><button onClick={()=>onRemove(users.id)}>삭제</button></td>
                        </tr>
                    ))}
            </table>
        </div>
    )
}
export default UserList