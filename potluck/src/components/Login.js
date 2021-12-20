import React from "react";



const Login = (props) => {
  
  const {
    values,
    submit,
    errors,
  } = props

  const onSubmit = evt => {
    evt.preventDefault()
    submit()
  }


  return (
    
  
    <form className='login container' onSubmit={onSubmit}>
    
      <div className='form-group submit'>
        <h1>Login</h1>
        <div className='errors'>
          <div>{errors.username}</div>
          <div>{errors.password}</div>
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>Log-in to view your Potluck dashboard</h4>
        <div><label>Username&nbsp;
            <div>
          <input
            value={values.username}
            
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
            
            name='password'
            type={'password'}
          /></div>
        </label>
        </div>
        <div>
        
        </div>
      </div>

      <button>submit</button>
    </form>
  
    
  
  )};

export default Login;
