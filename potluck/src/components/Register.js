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
    <>
      <div>
        <form className="register-container" onSubmit={onSubmit}>
          <div className="form-group submit">
            <div className="errors">
              <div>{errors.username}</div>

              <div>{errors.password}</div>
              <div>{errors.confirmPassword}</div>
            </div>
            <div className="form-group submit">
              <div className="errors">
                <div>{errors.username}</div>
                <div>{errors.password}</div>
                <div>{errors.confirmPassword}</div>
              </div>

              <div className="form-group inputs">
                <h4 className="regis-main">Register</h4>
                <div className="signup-container">
                  <label className="label-regis-username">
                    Username&nbsp;
                    <input
                      className="regis-username"
                      value={regis.username}
                      onChange={handleChange}
                      name="username"
                      type="text"
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label className="label-regis-pass">
              Password
              <input
                className="regis-password"
                value={regis.password}
                onChange={handleChange}
                name="password"
                type={"password"}
              />
            </label>
          </div>

          <button className="signup-btn">submit</button>
        </form>
      </div>
    </>
  );
};

export default Register;
