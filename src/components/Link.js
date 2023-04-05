import React from "react";
import styled from "styled-components";


const StyledLink = styled.a`
  text-decoration: none;
  margin-right: 1rem;
  color: #00f;
`;

function CustomLink ({ label, href }) {
    return (
        <StyledLink target="_blank" href={ href }>
            { label }
        </StyledLink>
    );
}
export default CustomLink;
