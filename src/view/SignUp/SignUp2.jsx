import React from 'react';
import SignUpLogo from '../../assets/logos/HealthInsurance.png';

function SignUp2() {
  return (
    <>
      <section className="SignUp">
        <div className="SignUp-Container">
          <form action="/SignUp2" method="post" className="SignUp-Form">
            <h1 className="SignUp-Form-Title">Register</h1>

            <input
              type="text"
              placeholder="Enter Code"
              name="code"
              className="code-Input"
            />

            <div className="SignUp-Form-Outlines">
              <p>Code is valid for 2 minutes.</p>
              <p>Resend code after 1 minute</p>
            </div>

            <button type="submit" className="verify-Btn">
              <b>Verify</b>
            </button>
          </form>
        </div>

        <img src={SignUpLogo} alt="sign up logo" className="SignUp-Logo" />
      </section>
    </>
  );
}

export default SignUp2;
