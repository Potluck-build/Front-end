import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
  const { loggedIn, setLoggedIn } = props;
  const nav = useNavigate();

  const handleLogout = () => {
    setLoggedIn(localStorage.getItem("token"));
    localStorage.removeItem("token");
    nav("/");
  };

  return (
    <HeadContainer className="header">
      <h1 className="title">Potluck Planner</h1>
      <LinkContainer className="links">
        {!loggedIn && (
          <Link className="login-link" to="/">
            Login
          </Link>
        )}
        {!loggedIn && (
          <Link className="register-link" to="/register">
            Register
          </Link>
        )}
        {loggedIn && (
          <Link className="dashboard-link" to="/dashboard">
            Dashboard
          </Link>
        )}
        {loggedIn && (
          <Link className="invite-link" to="/invite">
            Invite
          </Link>
        )}
        {loggedIn && (
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
