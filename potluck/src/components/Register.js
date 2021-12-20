import React from "react";

const Register = (props) => {
  const {
    values,
    submit,
    change,
    disabled,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }

  const onRegisterChange = evt => {

    const { name, value, checked, type } = evt.target
    const valueToUse = type === 'checkbox' ? checked : value;
    change(name, valueToUse)
  }

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
        <div><label>Username&nbsp;
            <div>
          <input
            value={values.username}
            onChange={onRegisterChange}
            name='username'
            type='text'
          /></div>
        </label>
        </div>

        <div>
        <label>Password
            <div>
          <input
            
            value={values.password}
            onChange={onRegisterChange}
            name='password'
            type={'password'}
          /></div>
        </label>
        </div>
        <div>
        <label>Confirm Password
            <div>
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
    </form>
  
  )
};
  


export default Register;
