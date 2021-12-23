import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
  const { loggedIn, setLoggedIn, login, setLogin } = props;
  const nav = useNavigate();

  const handleLogout = () => {
    setLoggedIn(localStorage.removeItem("token"));
    localStorage.removeItem("token");
    nav("/");
  };

  const handleLogin = () => {
    setLoggedIn(localStorage.getItem("token"));
  };

  return (
    <HeadContainer className="header">
      <h1 className="title">Potluck Planner</h1>
      <LinkContainer className="links">
        {!localStorage.getItem("token") && (
          <Link onClick={handleLogin} className="login-link" to="/">
            Login
          </Link>
        )}
        {!localStorage.getItem("token") && (
          <Link className="register-link" to="/register">
            Register
          </Link>
        )}
        {localStorage.getItem("token") && (
          <Link className="dashboard-link" to="/dashboard">
            Dashboard
          </Link>
        )}
        {localStorage.getItem("token") && (
          <Link onClick={handleLogout} className="logout-link" to="/">
            Logout
          </Link>
        )}
      </LinkContainer>
    </HeadContainer>
  );
};

export default Header;

const HeadContainer = styled.div``;
const LinkContainer = styled.div``;
