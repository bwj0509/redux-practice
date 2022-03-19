import React from "react";

function User3({ users }){

    if(!users){
        return <>페이지에 오류가 있습니다.</>
    }

    return(
        <div>
            {users.map((data)=>(
                <>123</>
            ))}
        </div>
    )
}
export default User3