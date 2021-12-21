import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const { errors } = props;

  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const nav = useNavigate();

  const onSubmit = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post("/api/users/login", login)
      .then((res) => {
        props.setLoggedIn(localStorage.getItem("token"));
        localStorage.setItem("token", res.data.token);
        nav("/dashboard");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className='login-container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h1>Login</h1>
        <div className='errors'>
          <div>{errors.username}</div>
          <div>{errors.password}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>Log-in to view your Potluck dashboard</h4>
        <div>
          <label>
            Username&nbsp;
            <div>
              <input
                value={login.username}
                onChange={onChange}
                name='username'
                type='text'
              />
            </div>
          </label>
        </div>

        <div>
          <label>
            Password
            <div>
              <input
                value={login.password}
                onChange={onChange}
                name='password'
                type={"password"}
              />
            </div>
          </label>
        </div>
        <div></div>
      </div>

      <button>submit</button>
    </form>
  );
};

export default Login;
