import React from 'react';
import SignUpLogo from '../../assets/logos/HealthInsurance.png';

function SignUp1() {
  return (
    <>
      <section className="SignUp">
        <div className="SignUp-Container">
          <form action="/SignUp1" method="post" className="SignUp-Form">
            <h1 className="SignUp-Form-Title">Register</h1>

            <input
              type="text"
              placeholder="Enter Email / Phone Number"
              name="email_phone"
              className="email_phone-Input"
            />
            <input
              type="text"
              placeholder="Password"
              name="password"
              className="password-Input"
            />
            <input
              type="text"
              placeholder="Type password again"
              name="re-password"
              className="repassword-Input"
            />

            <button type="submit" className="register-Btn">
              <b>Register</b>
            </button>

            <ul className="SignUp-Outlines">
              <li>Password contains 8 characters</li>
              <li>Password contains at least 1 uppercase character</li>
              <li>Password contains at least 1 numeric character</li>
            </ul>
          </form>
        </div>

        <img src={SignUpLogo} alt="sign up logo" className="SignUp-Logo" />
      </section>
    </>
  );
}

export default SignUp1;
