import React from "react";
import styled from "styled-components";
import { _blue, _lightBlue } from "../../styles/colors";

const Container = styled.span`
  height: ${props => props.height};
  width: ${props => props.width};
  transition: all 0.3s ease-in-out;
`;

const Btn = styled.button`
  height: 100%;
  width: 100%;
  background-color: white;
  color: ${_blue};
  padding: 3px;
  font-size: ${props=>props.fontSize};
  font-weight: 500;
  letter-spacing: 0.1rem;
  text-transform: uppercase;
  transition: all 0.2s linear;
  border: 1px solid;
  :hover{
    color: white;
    background-color: ${_blue};
  }

`;

const Button = ({ name, height, width, fontSize }) => {
  return(
    <Container className="" height={ height } width={ width } fontSize={ fontSize }>
      <Btn className="rounded ">{ name }</Btn>
    </Container>
  );
}

export default Button;