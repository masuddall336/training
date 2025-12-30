import { useState } from "react";

const useCustomHook = (defultValue) => {
  const [defultValue, setDefultValue] = useState(defultValue);

  const handleChnage = (e) => {
    setDefultValue(e.target.value);
  }
  return [defultValue, handleChnage];
}
export default useCustomHook;