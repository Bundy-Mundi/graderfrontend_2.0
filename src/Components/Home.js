import React from 'react';
import styled from "styled-components";
import { Link } from "react-router-dom";
import { _blue } from "../styles/colors";
import { responsive, size } from "../styles/responsive";

const Form = styled.div`

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

const Flex = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
const SearchBarConainer = styled.div`
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
const Home = () => {
  return (
    <>
    <Flex>
     <SearchBarConainer>
       <p>Search Bar</p>
     </SearchBarConainer>
    </Flex>
    </>
  );
};

export default Home;