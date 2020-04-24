import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
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
    <>
    <Flex ref={ fadeIn } style={{ opacity: "0" }}>
      ABOUT
    </Flex>
    <section style={{height:"100vh"}}>
      <ScrollAnimation animateIn="fadeInRight">
        Some Text
      </ScrollAnimation>
    </section>
    </>
 );
}

export default About;
