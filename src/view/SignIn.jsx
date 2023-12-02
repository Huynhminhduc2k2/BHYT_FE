import React from 'react';
import SignInLogo from '../assets/logos/HealthInsurance.png';
import GoogleIcon from '../assets/images/google.png';
import FacebookIcon from '../assets/images/facebook.png';
import TwitterIcon from '../assets/images/twitter.png';

function SignIn() {
  return (
    <>
      <section className="SignIn">
        <div className="SignIn-Form-Container">
          <form action="/SignIn" method="post" className="SignIn-Form">
            <h1 className="SignIn-Form-Title">Login</h1>
            <p className="SignIn-Form-Intro">
              Hi, enter your details to get login to your account.
            </p>
            <input
              type="text"
              name="email_phone"
              className="email_phone-Input"
              placeholder="Enter Email / Phone Number"
            />
            <div>
              <input
                type="text"
                name="password"
                className="password-Input"
                placeholder="Password"
              />
              <img src="" alt="" />
            </div>

            <a href="/ForgotPass" className="forgotpass-Btn">
              <b>Forgot Password ?</b>
            </a>

            <button type="submit" className="login-Btn">
              Login
            </button>
          </form>

          <div className="SignIn-Form-Alternatives">
            <div className="SignIn-Form-Alternatives-Intro">
              <hr className="SignIn-Form-Alternatives-Intro-Side" />
              <p> Or Login with</p>
              <hr className="SignIn-Form-Alternatives-Intro-Side" />
            </div>
            <nav className='SignIn-Form-Alternatives-Navs'>
              <a href="/GoogleSignIn">
                <img src={GoogleIcon} alt="google icon" />
                Google
              </a>
              <a href="/FacebookSignIn">
                <img src={FacebookIcon} alt="facebook icon" />
                Facebook
              </a>
              <a href="/TwitterSignIn">
                <img src={TwitterIcon} alt="twitter icon" />
                Twitter
              </a>
            </nav>
          </div>

          <div className='SignIn-SignUp-Nav'>
            <p>Don't have an account ?</p>
            <a href="/SignUp">
              <b>Create Now</b>
            </a>
          </div>
        </div>

        <img src={SignInLogo} alt="" className="SignIn-Logo" />
      </section>
    </>
  );
}

export default SignIn;
