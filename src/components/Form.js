import { useState } from "react";
import "./form.css";

function Form() {
  //difining initial states as an object
  const initialValues = { username: "", email: "", number:"", password: "", repeatPass:"" };

  //using useState hook
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [repeatPasswordShown, setRepeatPasswordShown] = useState(false);

  //for onChange event handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  // for onSubmit event handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  const validate = (values) => {
    //difining an object for errors
    const errors = {};

    //regex conditions
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;
    const regexNum = /(\d{3})[ -]?(\d{3})[ -]?(\d{4})/i;


    //conditions and the error messages if conditions doesn;t matches


    //conditions and error messages for username
    if (!values.username) {
      errors.username = "Username is required!";
    }
    else if (values.username.length < 3) {
      errors.username = "Name must be more than 3 characters";
    } else if (values.username.length > 30) {
      errors.username = "Name cannot exceed more than 30 characters";
    }
  


    //conditions and error messages for mail
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }

    //conditions and error messages for number
    if(!values.number){
      errors.number = "Number can't be empty!"
    }
    else if(!regexNum.test(values.number)){
      errors.number = "Invalid Number!";
    }

    
    //conditions and error messages for password
    if (!values.password) {
      errors.password = "Password is required!";
    } 
    else if(!regexPass.test(values.password)){
      errors.password = "Invalid Password!"
    }

    //conditions and error messages for repeatPassword
    if(!values.repeatPass){
      errors.repeatPass = "Confirm Your Password!"
    }
    else if(values.repeatPass !==values.password){
      errors.repeatPass = "Password Doesn't match!"
    }

    return errors;
  };

  return (
    <div className="container">
      {/* if keys in the object error is 0 and all the fields are filled then conditon */}
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="message">Signed in successfully</div>
      ) : (
        <div className="message">Fill up your credentials!</div>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Register Here!</h1>
        <div className="form">

          <div className="field">
            
            <input
              type="text"
              name="username"
              placeholder="Your Name"
              value={formValues.username}
              onChange={handleChange}/>

          </div>
          {/* p for if any errors */}
          <p>{formErrors.username}</p>


          <div className="field">
            
            <input
              type="text"
              name="email"
              placeholder="Email"
              value={formValues.email}
              onChange={handleChange}/>

          </div>
          <p>{formErrors.email}</p>


          <div className="field">
           
            <input
              type="text"
              name="number"
              placeholder="PhoneNumber"
              value={formValues.number}
              onChange={handleChange}/>

          </div>
          <p>{formErrors.number}</p>


          <div className="field">
            
            <input
            className="pass-input"
            // type according to state {to show hide pass}
              type={passwordShown ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}/>
              {/* changing true to false and false to true while pressing h2*/}
              <h2 id="pass" onClick={()=>setPasswordShown(!passwordShown)}>👁</h2>
          </div>
          <p>{formErrors.password}</p>


          <div className="field">
            
            <input
            // type according to state {to show hide pass}
              type={repeatPasswordShown ? "text" : "password"}
              name="repeatPass"
              placeholder="Confirm your Password"
              value={formValues.repeatPass}
              onChange={handleChange}/>
              {/* changing true to false and false to true while pressing h2*/}
              <h2 id="pass" onClick={()=>setRepeatPasswordShown(!repeatPasswordShown)}>👁</h2>
              

          </div>
          <p>{formErrors.repeatPass}</p>

          <button className="button">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Form;