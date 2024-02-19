import { useRef, useState } from 'react';
import './login.css';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../store/loginSlice';
import { toast } from 'react-toastify';
import { composeAction } from '../../store/composeSlice';

const Login = () => {
  const [login, setLogin] = useState();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const switchHandler = () => {
    setLogin((prev) => !prev)
  }
  const submitHandler = (e) => {
    e.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    let url;
    if (login) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBGBimefwh5OivbZHuzMo-I13cB6G1uEo0'
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBGBimefwh5OivbZHuzMo-I13cB6G1uEo0'
    }
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        if (res.ok) {
          toast.success('sucessful login', {
            position: 'top-center',
            autoClose: 3000,
          });
          console.log("sucessful")
          return res.json();
        } else {
          return res.json()
            .then((data) => {
              let errorMessage = 'Authentication Failed'
              throw new Error(errorMessage)
            })
        }
      })
      .then((data) => {
        dispatch(loginAction.login(data));
        dispatch(loginAction.showLogin());
        dispatch(composeAction.Showcompose());
        localStorage.setItem("tokenId", data.idToken)
        localStorage.setItem("email", data.email);
        emailInputRef.current.value = ''
        passwordInputRef.current.value = ''
        navigate('/home')
      })
      .catch(err => {
        alert(err.message);
      })
  }

  return (
    <section className='auth'>
      <h1>{login ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className='control'>
          <label htmlFor='email'><b>Your Email</b></label>
          <input type='email' id='email' required ref={emailInputRef}></input>
        </div>
        <div className='control'>
          <label htmlFor='password'><b>Your Password</b></label>
          <input type='password' id='password' required ref={passwordInputRef}></input>
        </div><br />
        <b className='forgot'>Forgot Password?</b>
        <div className='actions'>
          <button>{login ? 'login' : 'create new login'}</button>
        </div>
        {login && (
          <p>
            don't have an account ?{" "}
            <button className="" onClick={switchHandler}>
              Sign Up
            </button>
          </p>
        )}
        {!login && (
          <p>
            have an account ?
            <button className="" onClick={switchHandler}>
              Sign In
            </button>
          </p>
        )}
      </form>
    </section>
  )
}

export default Login

