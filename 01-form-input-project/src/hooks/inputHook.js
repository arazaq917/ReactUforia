import { useState } from "react";

const useInputHook = (validateVal) => {
  const [enteredValue, setValue] = useState("");
  const [isTouched, setTouched] = useState(false);

  const isValid = validateVal(enteredValue);
  const hasError = !isValid && isTouched;

  const valueHandler = (event) => {
    setValue(event.target.value);
  };
  const inputBlur = () => {
    setTouched(true);
  };

  const reset = () => {
    setValue("");
    setTouched(false);
  };

  return {
    value: enteredValue,
    hasError,
    isValid,
    reset,
    valueHandler,
    inputBlur,
  };
};

export default useInputHook;
