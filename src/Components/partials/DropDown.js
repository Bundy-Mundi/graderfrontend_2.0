import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { _blue } from "../../styles/colors";
import { responsive, size } from "../../styles/responsive";

const Container = styled.div`
  position: absolute;
  height: 0;
  width: 100%;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  z-index: 99;
  @media (min-width:${size.laptop}) {
    display: none;
  }
  @media (min-width:${size.laptopL}) {
    display: none;
  }
  @media (min-width:${size.desktop}) {
    display: none;
  }
`;
const List = styled.ul`
  height: 100%;
  width: 100%;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
`;
const SLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  cursor: pointer;
  color: ${_blue};
`;
const Item = styled.li`

`;
const DropDown = () => {
  return (
    <Container className="drop-down">
      <List>
        <SLink className="hover:bg-gray-300" to="/"><Item>HOME</Item></SLink>
        <SLink className="hover:bg-gray-300"to="/about"><Item>ABOUT</Item></SLink>
        <SLink className="hover:bg-gray-300" to="/contact"><Item>CONTACT</Item></SLink>
      </List>
    </Container>
  );
};

export default DropDown;