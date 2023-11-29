import React from 'react';

function SignUp2() {
  return (
    <>
      <section>
        <div>
          <form action="/SignUp2" method="post">
            <h1>Register</h1>

            <input
              type="text"
              placeholder="Enter Email / Phone Number"
              name="email_phone"
            />
            <p>Code is valid for 2 minutes.</p>
            <p>Resend code after 1 minute</p>
            <button type="submit">
              <b>Verify</b>
            </button>
          </form>
        </div>

        <img src="" alt="" />
      </section>
    </>
  );
}

export default SignUp2;
