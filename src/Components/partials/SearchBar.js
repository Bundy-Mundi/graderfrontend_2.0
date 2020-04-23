import React from "react";
import styled from "styled-components";
import { _blue } from "../../styles/colors";
import { responsive } from "../../styles/responsive";

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 12px;
  font-family: 'DM Sans', sans-serif;
  transition: all 0.3s ease-in-out;
  padding-left: 50px;
`;
const Form = styled.form`
  position: relative;
  display: flex;
  font-size: ${props=>props.fontSize};
  font-size: ${props=>props.fontWeight};
  height: ${props=>props.height};
  width: ${props=>props.width};
  
  @media screen and ${responsive.mobileL} {
    display: ${props=>props.whenScreenSmall};
  }
  @media screen and ${responsive.tablet} {
    display: ${props=>props.whenScreenSmall};
  }
`;
const SearchIcon = styled.span`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content:center;
  width:50px;
  height:100%;
  color: ${_blue};
`;

const SearchBar = ({ whenScreenSmall, height, width, fontSize, fontWeight }) => {
  return (
    <Form 
      method="get" 
      action="/search-result" 
      height={ height } 
      width={ width } 
      fontSize={ fontSize }
      fontWeight={ fontWeight }
      whenScreenSmall={ whenScreenSmall }>
      <SearchIcon>
        <i className="fas fa-search"></i>
      </SearchIcon>
      <input type="hidden" name="search"></input>
      <Input className="outline-none focus:shadow-outline focus:bg-gray-200 shadow-md hover:shadow-xl rounded" name="term" placeholder="Please Type Any Professor or Class Name" type="text"/>
      <input type="hidden" name="page" value="1"></input>
      <button type="submit"></button>
    </Form>
  );
}

export default SearchBar;