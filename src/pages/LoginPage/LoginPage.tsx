import './LoginPage.scss'
import vectorHide from './assets/vectorHide.svg'
import vectorShow from './assets/vectorShow.svg'
import { useState } from 'react'

export const LoginPage = () => {
  const [loginStatus, setLoginStatus] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const checkPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const emailInput = document.querySelector('input[type="email"]') as HTMLInputElement;
    const passwordInput = document.querySelector('input[type="password"]') as HTMLInputElement;
    const email = emailInput?.value;
    const password = passwordInput?.value;

    //Temporary solution
    const correctEmail = 'example@example.com';
    const correctPassword = 'password123';

    if (email === correctEmail && password === correctPassword) {
      setLoginStatus('success');
    } else {
      setLoginStatus('error');
      emailInput.style.borderColor = 'black';
      passwordInput.style.borderColor = 'red';
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="form-container">
      <form>
        <h1>Login</h1>
        <div className="input-box">
          <span>Email address</span>
          <input type="email" placeholder="name@email.com" required />
        </div>
        <div className="input-box">
          <span>Password</span>
          <a href="#">Forgot your password?</a>
          <input
            type={showPassword ? 'text' : 'password'}
            id="psw"
            required
          />
          <button
            type="button"
            id="togglePassword"
            onClick={togglePasswordVisibility}
          >
            <img src={showPassword ? vectorHide : vectorShow} id="eye-icon" />
          </button>
          <div
            id="error"
            style={{ color: 'red', display: loginStatus === 'error' ? 'block' : 'none' }}
          >
            Incorrect password or email
          </div>
        </div>
        <div className="submit">
          <button onClick={checkPassword}>Login</button>
        </div>
        <div className="links">
          <a className="first-link" href="#">
            You don’t have an account yet?
          </a>
          <a className="second-link" href="#">
            Register<span>&gt;</span>
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
