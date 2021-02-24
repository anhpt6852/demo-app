import React, { useState } from "react";
import './Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
    <div className = 'container'>
    <h1>LOGIN PAGE</h1>
      <form className = 'form-input' >
      <div>
        <div className = 'username-input'>
        <label>
          Username:
          <input type="text" name="name" value = {email} onChange = {handleChangeEmail} />
        </label>
        </div>
        {email.length<3&&<label className = 'error-message'>  Wrong email</label>}
        <div className = 'password-input'>
        <label>
          Password:
          <input type="password" name="pass" value = {password} onChange = {handleChangePassword}/>
        </label>
        </div>
        {password.length<6&&<label className = 'error-message'>  Wrong password</label>}
        <div><input type = 'checkbox'></input> Remember Me</div>
        <div>{email.length>=3&&password.length>=6 ? <input type="submit" value="Submit" onClick = {handleSubmit} disabled = {false} /> : <input type="submit" value="Submit" onClick = {handleSubmit} disabled = {true} />} </div></div>
      </form>
      </div>
  );
}

export default Login