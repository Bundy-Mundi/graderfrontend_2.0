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
  background-image: url(${props=>props.image});
  background-repeat: none;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;

`;
const Filter = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color:${_blue};
  opacity: 0.3;
  z-index: 1;
`;

const About = () => {
  return(
    <>
    <Flex className="" image="https://images.unsplash.com/photo-1551892589-865f69869476?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9">
      <p className="text-3xl text-white">ABOUT US</p>
    </Flex>
    <section style={{height:"100vh", display: "flex", justifyContent:"center", alignItems:"flex-start"}}>
      <ScrollAnimation animateIn="fadeInUp">
        Some Text
      </ScrollAnimation>
    </section>
    </>
 );
}

export default About;
