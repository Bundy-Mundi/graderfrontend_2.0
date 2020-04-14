import React from "react";
import styled from "styled-components";
import { _blue, _lightBlue } from "../../styles/colors";

const Container = styled.span`
  height: ${props => props.height};
  width: ${props => props.width};
`;

const Btn = styled.button`
  height: 100%;
  width: 100%;
  background-color: ${_lightBlue};
  color: white;
  padding: 3px;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
`;

const Button = ({ name, height, width }) => {
  return(
    <Container className="" height={ height } width={ width }>
      <Btn className="rounded">{ name }</Btn>
    </Container>
  );
}

export default Button;