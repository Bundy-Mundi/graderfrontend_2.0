import React from "react";
import styled from "styled-components";
import { _blue } from "../../styles/colors";
import { responsive } from "../../styles/responsive";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Grid = styled.div`
  color: white;
  display: grid;
  height: 250px;
  width: 100%;
  background-color: ${_blue};
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 2fr 2fr 1fr;
`;
const Copyrights = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: rgba(0,0,0,0.6);
  font-size: 10px;
  margin-left: 2%;
`;
const TextContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
`;
const SocialMedia = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  font-size: 23px;
  width: 40%;
  @media screen and ${responsive.mobileL} {
    width: 80%;
  }
  @media screen and ${responsive.tablet} {
    width: 50%;
  }
`;
const Footer = () => {

  return(
    <Grid>
      <TextContainer>
        <p>Connect With us</p>
      </TextContainer>
      <Flex>
        <SocialMedia>
          <a href="/"><i style={{ transition: "all 0.2s ease-in-out" }} className="fab fa-facebook-f hover:text-gray-400"></i></a>
          <a href="https://www.instagram.com/s_beom43/"><i style={{ transition: "all 0.2s ease-in-out" }} className="fab fa-instagram hover:text-gray-400"></i></a>
          <a href="/"><i style={{ transition: "all 0.2s ease-in-out" }} className="fab fa-twitter hover:text-gray-400"></i></a>
          <a href="https://github.com/Bundy-Mundi"><i style={{ transition: "all 0.2s ease-in-out" }} className="fab fa-github hover:text-gray-400"></i></a>
        </SocialMedia>
      </Flex>
      <Copyrights>&copy; 2020 bestgraders TRP Inc. All rights Reserved | Privacy | Terms of Service</Copyrights>
    </Grid>
  );
}

export default Footer;