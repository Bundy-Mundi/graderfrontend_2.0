import React, { useState } from "react";
import styled from "styled-components";
import { _blue } from "../../styles/colors";
import { responsive } from "../../styles/responsive";

const Input = styled.input`
  width: 100%;
  height: 44px;
  padding: 12px;
  font-size: 15px;
  font-weight: 400;
  font-family: 'DM Sans', sans-serif;
  transition: all 0.3s ease-in-out;
  padding-left: 50px;
`;
const Form = styled.form`
  position: relative;
  display: flex;
  width: 80%;
  
  @media screen and ${responsive.mobileL} {
    display: none;
  }
  @media screen and ${responsive.tablet} {
    display: none;
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

const SearchBar = () => {
  return (
    <Form method="get" action="/search-result">
      <SearchIcon>
        <i className="fas fa-search"></i>
      </SearchIcon>
      <Input className="outline-none focus:shadow-outline focus:bg-gray-200 shadow-md hover:shadow-xl rounded" name="search" placeholder="Search for ..." />
      <button type="submit"></button>
    </Form>
  );
}

export default SearchBar;