import React, { useState } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const Register = (props) => {
  const { values, submit, change, disabled, errors } = props;

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

  const onRegisterChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;
    change(name, valueToUse);
  };

  return (
    <form className='register container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <div className='errors'>
          <div>{errors.username}</div>
          
          <div>{errors.password}</div>
          <div>{errors.confirmPassword}</div>
          
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>Sign-up for the Potluck!</h4>
<<<<<<< HEAD
        <div><label>Username&nbsp;
            <div>
          <input
            value={values.username}
            onChange={onRegisterChange}
            name='username'
            type='text'
          /></div>
        </label>
=======
        <div>
          <label>
            Name&nbsp;
            <div>
              <input
                value={regis.username}
                onChange={handleChange}
                name='username'
                type='text'
              />
            </div>
          </label>
        </div>

        <div>
          {/* <label>
            Email
            <div>
              <input
                value={values.email}
                onChange={onRegisterChange}
                name='email'
                type='text'
              />
            </div>
          </label> */}
>>>>>>> 2eda17bd997d8f1d8b30971ff6f1cad4eecbd1a5
        </div>

        <div>
          <label>
            Password
            <div>
              <input
                value={regis.password}
                onChange={handleChange}
                name='password'
                type={"password"}
              />
            </div>
          </label>
        </div>
        {/* <div>
          <label>
            Confirm Password
            <div>
<<<<<<< HEAD
          <input
            value={values.confirmPassword}
            onChange={onRegisterChange}
            name='confirmPassword'
            type={'password'}
          /></div>
        </label>
        </div>
      </div>

      
      <button disabled={disabled}>submit</button>
=======
              <input
                value={values.confirmPassword}
                onChange={onRegisterChange}
                name='confirmPassword'
                type='text'
              />
            </div>
          </label>
        </div> */}
      </div>

      {/* <div className='form-group checkboxes'>
        <label>
          Terms of Service
          <input
            type='checkbox'
            value={values.termsOfService}
            onChange={onRegisterChange}
            name='termsOfService'
          />
        </label>
      </div> */}
      <button>submit</button>
>>>>>>> 2eda17bd997d8f1d8b30971ff6f1cad4eecbd1a5
    </form>
  );
};

export default Register;
