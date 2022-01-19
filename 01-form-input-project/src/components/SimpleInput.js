import { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setName] = useState("");
  const [isTouched, setTouched] = useState(true);

  const isValid = enteredName.trim() !== "";
  const inputClass =
    isTouched && isValid ? "form-control" : "form-control invalid";

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const inputBlur = () => {
    setTouched(true);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (!isValid) {
      return;
    }
    console.log(enteredName);
    setName("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={inputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredName}
          onChange={nameHandler}
          onBlur={inputBlur}
        />
      </div>
      {!isValid && <p>Input is not valid</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
