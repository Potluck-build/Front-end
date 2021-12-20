import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    return (
        <HeadContainer>
            <h1>Potluck Planner</h1>
            <LinkContainer>
              <Link to = "/">Login</Link>
              <Link to = "/register">Sign Up</Link>
              <Link to = "/dashboard">Dashboard</Link>
              <Link to = "/add-food">Add Food</Link>
            </LinkContainer>
        </HeadContainer>
    )
};

export default Header;

const HeadContainer = styled.div`
`
const LinkContainer = styled.div`
`