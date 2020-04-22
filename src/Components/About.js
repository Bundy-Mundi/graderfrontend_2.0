import React from 'react';
import styled from "styled-components";
import { useFadeIn } from "../hooks";
import { _blue } from "../styles/colors";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const About = () => {
  const fadeIn = useFadeIn();
  return(
    <Flex ref={ fadeIn } style={{ opacity: "0" }}>
      ABOUT
    </Flex>
 );
}

export default About;
