import React from 'react';

function SignIn() {
  return (
    <>
      <section>
        <div>
          <form action="/SignIn" method="post">
            <h1>Login</h1>
            <p>Hi, enter your details to get login to your account.</p>
            <input
              type="text"
              name="email_phone"
              id=""
              placeholder="Enter Email / Phone Number"
            />
            <div>
              <input type="text" name="password" id="" placeholder="Password" />
              <img src="" alt="" />
            </div>

            <a href="/ForgotPass">
              <b>Forgot Password ?</b>
            </a>

            <button type="submit">Login</button>
          </form>

          <div>
            <div>
              <hr />
              <p>Or Login with</p>
              <hr />
            </div>
            <nav>
              <a href="/GoogleSignIn">
                <img src="" alt="" />
                Google
              </a>
              <a href="/FacebookSignIn">
                <img src="" alt="" />
                Facebook
              </a>
              <a href="/TwitterSignIn">
                <img src="" alt="" />
                Twitter
              </a>
            </nav>
          </div>

          <div>
            <p>Don't have an account ?</p>
            <a href="/SignUp">
              <b>Create Now</b>
            </a>
          </div>
        </div>

        <img src="" alt="" />
      </section>
    </>
  );
}

export default SignIn;
