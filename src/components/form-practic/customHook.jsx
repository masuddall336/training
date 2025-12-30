import { useState } from "react";

const useCustomHook = (defultValues) => {
  const [defultValue, setDefultValue] = useState(defultValues);

  const handleChnage = (e) => {
    setDefultValue(e.target.value);
    console.log(e.target.value);
    
  }
  return [defultValue, handleChnage];
}
export default useCustomHook;