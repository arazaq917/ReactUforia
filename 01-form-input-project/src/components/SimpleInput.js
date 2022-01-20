import useInputHook from "../hooks/inputHook";

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: invalidName,
    valueHandler: nameHandler,
    inputBlur: nameBlurHandler,
    reset: restName,
  } = useInputHook((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: invalidEmail,
    valueHandler: emailHandler,
    inputBlur: emailBlurHandler,
    reset: restEmail,
  } = useInputHook((value) => value.includes('@'));

  const submitHandler = (event) => {
    event.preventDefault();
    if (!nameIsValid) {
      nameBlurHandler();
      return;
    }
    if (!emailIsValid) {
      emailBlurHandler();
      return;
    }
    console.log(enteredName);
    restName();
    console.log(enteredEmail);
    restEmail();
  };
  const InputClass = invalidName ? "form-control invalid" : "form-control ";
  const InputEmailClass = invalidEmail ? "form-control invalid" : "form-control ";

  return (
    <form onSubmit={submitHandler}>
      <div className={InputClass}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameHandler}
          onBlur={nameBlurHandler}
          value={enteredName}
        />
        {invalidName && <p className="error-text">Input is not valid</p>}
      </div>
      <div className={InputEmailClass}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          onChange={emailHandler}
          onBlur={emailBlurHandler}
          value={enteredEmail}
        />
        {invalidEmail && <p className="error-text">Email is not valid</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
