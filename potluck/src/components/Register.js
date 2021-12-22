import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Register = (props) => {
  const { errors } = props;

  const [regis, setRegis] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setRegis({
      ...regis,
      [e.target.name]: e.target.value,
    });
    console.log(regis);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post("/api/users/register", regis)
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <form className='register-container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <div className='errors'>
          <div>{errors.username}</div>
          <div>{errors.password}</div>
          <div>{errors.confirmPassword}</div>
          
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>Sign-up for the Potluck!</h4>
        <div>
          <label className='username'>
            Username&nbsp;
            <div>
              <input
                className='username-input'
                value={regis.username}
                onChange={handleChange}
                name='username'
                type='text'
              />
            </div>
          </label>
        </div>
        <div>
          <label className='password'>
            Password
            <div>
              <input
                className='password-input'
                value={regis.password}
                onChange={handleChange}
                name='password'
                type={"password"}
              />
            </div>
          </label>
        </div>
      </div>
      <button className='submitBtn'>submit</button>
    </form>
  );
};

export default Register;
