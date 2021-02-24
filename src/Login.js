import React, { useEffect, useState } from "react";
import './Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (email.length > 3 && password.length > 6) { setIsValid(!isValid)}
  }, [email,password])
  const handleSubmit = () => {
    console.log(email)
    console.log(password)
  }

  const handleChangeEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleChangePassword = (event) => {
    setPassword(event.target.value)
  }
  
  return (
      <form className = 'form-input'>
      <div>
        <div className = 'username-input'>
        <label>
          Username:
          <input type="text" name="name" value = {email} onChange = {handleChangeEmail} />
        </label>
        </div>
        <label className = 'error-message'> {(!isValid ? 'Wrong email' : '')}</label>
        <div className = 'password-input'>
        <label>
          Password:
          <input type="password" name="pass" value = {password} onChange = {handleChangePassword}/>
        </label>
        </div>
        <label className = 'error-message'> {(!isValid ? 'Wrong password' : '')}</label>
        <div><input type="submit" value="Submit" onClick = {handleSubmit} disabled = {!isValid}/></div></div>
      </form>
  );
}

export default Login