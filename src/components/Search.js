import React from "react";
import styled from "styled-components";
import Octicon from "react-octicon";
import PropTypes from "prop-types";

const Search = ({ handleSearch = () => { } }) => {

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          onChange={ handleSearch }
          placeholder="Search Gists for the username"
        />
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,

};
export default Search;
