import React from 'react'
import styled from 'styled-components';
import PropTypes from "prop-types";

const InfoComponent = ({textLabel}) => {
  return (
      <Body>{textLabel}</Body>
  )
}

InfoComponent.propTypes = {
  textLabel: PropTypes.string.isRequired,

};

export default InfoComponent;

const Body = styled.div`
  margin: 5rem auto;
  width: 15rem;
  font-size: 2rem;
  display:flex;
  align-items: center;
  justify-content: center
`;