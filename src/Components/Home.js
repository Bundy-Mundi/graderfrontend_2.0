import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import { _blue } from "../styles/colors";
import { responsive } from "../styles/responsive";

const Flex = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;
const Home = () => {
  return (
    <Flex>
     <p>HOME</p>
    </Flex>
  );
};

export default Home;