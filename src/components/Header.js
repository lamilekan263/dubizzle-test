import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Octicon from "react-octicon";
import Search from "./Search";

function Header ({handleSearch}) {
  return (
    <Wrapper>
      <Octicon name="mark-github" mega />
      <Search   handleSearch={handleSearch} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #24292e;
  color: #ffffff;
  z-index: 32;
  padding: 16px;
  font-size: 14px;
  line-height: 1.5;
  display: flex;
  align-items: center;
`;
// param checking
Header.propTypes = {
  handleSearch: PropTypes.func.isRequired,

};
export default Header;
