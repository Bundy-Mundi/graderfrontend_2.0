import React from 'react';
import styled from "styled-components";
import SearchBar from "./partials/SearchBar";
import { useFadeIn } from "../hooks";
import { size } from "../styles/responsive";

const Flex = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const SearchBarConainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
    @media (min-width:${size.laptop}) {
      height: 100%;
      margin-top:180px;
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }
    @media (min-width:${size.laptopL}) {
      height: 100%;
      margin-top:180px;
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }
    @media (min-width:${size.desktop}) {
      height: 100%;
      margin-top:180px;
      display: flex;
      align-items: flex-start;
      justify-content: center;
    }
`;

const IconBox = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: ${props=>props.fontSize};
  grid-column: ${props=>props.column};
  grid-row: ${props=>props.row};
  color: #2f3640;
`;
const GridContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 400px;
  transition: box-shadow 0.3s ease-in-out;
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
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: repeat(3, 140px);
  height: 100%;
  width: 100%;
`;
const Text = styled.p`
  font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-weight: 400;
  font-size: 19px;
  text-align: center;
  letter-spacing: 0.1rem;
`;
const Home = () => {
  const fadeIn = useFadeIn();
  return (
    <>
    <Flex className="mt-16" ref={ fadeIn } style={{ opacity: "0" }}>
      { /* For Desktop */}
      { /* 
        Before you search 
        1. Please use Proper class names
        2. Only for smc. other colleges. we don't support other colleges yet.
        3. 
        4. 
      */}
      {/* For Responsive */}
      <SearchBarConainer className="mb-12 animated fadeIn">
        <SearchBar whenScreenSmall="block" height="70px" fontWeight="700" width="400px"/>
      </SearchBarConainer>
      <GridContainer className="animated fadeInUp mb-12 bg-white rounded shadow hover:shadow-xl pb-3">
        <Text className="mt-8">Experience Visulaized Grade Distribution</Text>
        <Grid>
          <IconBox row="1/4" column="" fontSize="44px"><i className="far fa-file-excel"></i></IconBox>
          <IconBox row="1/4" column="" fontSize="25px">
            <i style={{ transform:"rotate(-45deg)" }} className="fas fa-arrow-right"></i>
            <i className="fas fa-arrow-right"></i>
            <i style={{ transform:"rotate(45deg)" }} className="fas fa-arrow-right"></i>
            </IconBox>
          <IconBox row="" column="" fontSize="44px"><i className="fas fa-chart-pie"></i></IconBox>
          <IconBox row="" column="" fontSize="44px"><i className="fas fa-chart-line"></i></IconBox>
          <IconBox row="" column="" fontSize="44px"><i className="far fa-chart-bar"></i></IconBox>
        </Grid>
      </GridContainer>
    </Flex>
    </>
  );
};

export default Home;