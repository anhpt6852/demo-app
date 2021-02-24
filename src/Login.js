import React, { useState } from "react";
import './Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    console.log(email);
    console.log(password);
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
          <input type="text" name="name" value = {email} onChange = {handleChangeEmail}/>
        </label>
        </div>
        <div className = 'password-input'>
        <label>
          Password:
          <input type="password" name="pass" value = {password} onChange = {handleChangePassword}/>
        </label>
        </div>
        <input type="submit" value="Submit" onClick = {handleSubmit}/></div>
      </form>
  );
}

export default Login