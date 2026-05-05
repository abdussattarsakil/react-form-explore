import { useState } from "react"

const useInputField2 =(defaultValue)=>{
    const [value,setValue]=useState(defaultValue);

    const handleInput =e=>{
        setValue(e.target.value);
    }

    return [value,handleInput]
}
export default useInputField2;