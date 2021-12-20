import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  return (
    <HeadContainer className='header'>
      <h1>Potluck Planner</h1>
      <LinkContainer className='links'>
        <Link className='login-link' to='/'>
          Login
        </Link>
        <Link className='register-link' to='/register'>
          Register
        </Link>
        <Link className='dashboard-link' to='/dashboard'>
          Dashboard
        </Link>
        <Link className='invite-link' to='/invite'>
          Invite
        </Link>
      </LinkContainer>
    </HeadContainer>
  );
};

export default Header;

const HeadContainer = styled.div``;
const LinkContainer = styled.div``;
