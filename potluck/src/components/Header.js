import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Header = (props) => {
  const { isLoggedIn } = props;
  const nav = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    nav("/");
  };

  return (
    <HeadContainer className='header'>
      <h1>Potluck Planner</h1>
      <LinkContainer className='links'>
        {!isLoggedIn && (
          <Link className='login-link' to='/'>
            Login
          </Link>
        )}
        {!isLoggedIn && (
          <Link className='register-link' to='/register'>
            Register
          </Link>
        )}
        {isLoggedIn && (
          <Link className='dashboard-link' to='/dashboard'>
            Dashboard
          </Link>
        )}
        {isLoggedIn && (
          <Link className='invite-link' to='/invite'>
            Invite
          </Link>
        )}
        {!isLoggedIn && (
          <Link onClick={handleLogout} className='logout-link' to='/'>
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
