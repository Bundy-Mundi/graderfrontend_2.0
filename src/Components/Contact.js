import React from 'react';
import styled from "styled-components";
import { useFadeIn } from "../hooks";
import { _blue } from "../styles/colors";
import { responsive, size } from "../styles/responsive";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Contact = () => {
  const fadeIn = useFadeIn();
  return (
    <Flex ref={ fadeIn } style={{ opacity:"0" }}>
      CONTACT
    </Flex>
  );
};
export default Contact;