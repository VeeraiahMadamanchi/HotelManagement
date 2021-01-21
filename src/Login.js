import React from 'react'
import { useHistory } from "react-router-dom";
import { TextField } from '@material-ui/core';
import './Login.css';

function Login() {
    const History=useHistory();
  function LoadCreateAccount(){
        History.push("/CreateAccount")
    }
    return (
        <div>
           <div className="creteaccount_about">
            <h1>Login Here</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>
            <div className="login_Form">
            <form  noValidate autoComplete="off">
  <TextField id="standard-basic" label="UserName" />
 
</form>
            </div>
           
        </div>
    )
}

export default Login
