import React from "react";

function SignIn() {
  return (
    <div className="signin-page">
      <form>
        <input placeholder='Email-ID'/><br/>
        <input placeholder='Password'/><br/>
        <button style={{cursor:'pointer'}}>Sign In</button>
      </form>
      <br/>
      <button style={{cursor:'pointer'}}>Create a New Account</button>
    </div>
  );
}

export default SignIn;
