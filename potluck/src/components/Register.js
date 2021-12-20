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
          <div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.confirmPassword}</div>
          <div>{errors.termsOfService}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>Sign-up for the Potluck!</h4>
        <div><label>Name&nbsp;
            <div>
          <input
            value={values.name}
            onChange={onRegisterChange}
            name='name'
            type='text'
          /></div>
        </label>
        </div>

        <div><label>Email
            <div>
          <input
            value={values.email}
            onChange={onRegisterChange}
            name='email'
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
            type='text'
          /></div>
        </label>
        </div>
      </div>

      <div className='form-group checkboxes'>
        <label>Terms of Service
          <input
            type='checkbox'
            value={values.termsOfService}
            onChange={onRegisterChange}
            name='termsOfService'
          />
        </label>
        
      </div>
      <button disabled={disabled}>submit</button>
    </form>
  
  )
};
  


export default Register;
