import { useState } from "react";

const useStateHook = (value)=>{
const [inputValue,setInputValue]=useState(value)

const handleInput =e=>{
    setInputValue(e.target.value)
}

return [inputValue,handleInput];

}
export default useStateHook;