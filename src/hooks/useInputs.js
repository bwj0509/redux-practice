import React, { useCallback, useState } from "react"; // 커스텀 훅 만들기

function useInputs(initialForm){
    const [form, setForm] = useState(initialForm);

    const onChange = useCallback((e)=>{
        const { name, value } = e.target;
        setForm((form)=>({...form, [name]:value}));

    },[]);

    const reset = useCallback(()=> setForm(initialForm), [initialForm]);
    return [form, onchange, reset]
}
export default useInputs