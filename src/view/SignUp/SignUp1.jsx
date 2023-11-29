import React from 'react';

function SignUp1() {
  return (
    <>
      <section>
        <div>
          <form action="/SignUp1" method="post">
            <h1>Register</h1>

            <input
              type="text"
              placeholder="Enter Email / Phone Number"
              name="email_phone"
            />
            <input type="text" placeholder="Password" name="password" />
            <input
              type="text"
              placeholder="Type password again"
              name="re-password"
            />
            <button type="submit">
              <b>Register</b>
            </button>

            <ul>
              <li>Password contains 8 characters</li>
              <li>Password contains at least 1 uppercase character</li>
              <li>Password contains at least 1 numeric character</li>
            </ul>
          </form>
        </div>

        <img src="" alt="" />
      </section>
    </>
  );
}

export default SignUp1;
