import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import { _blue } from "../../styles/colors";
import { responsive } from "../../styles/responsive";
import DropDown from "./DropDown";

const Logo = styled.div`
  color: white;
  letter-spacing: 0.2rem;
  grid-column: 1 / 4;
  font-size: 23px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 40px;
  font-family: 'DM Sans', sans-serif;
  @media screen and ${responsive.mobileL} {
    margin-left: 0px;
    font-size: 19px;
  }
  @media screen and ${responsive.tablet} {
    margin-left: 0px;
    font-size: 19px;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 76px;
  height: 76px;
  background-color: ${_blue};
  @media screen and ${responsive.mobileL} {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
  @media screen and ${responsive.tablet} {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.1rem;
  @media screen and ${responsive.mobileL} {
    display: none;
  }
  @media screen and ${responsive.tablet} {
    display: none;
  }
`;
const Item = ({ link, text }) => {
  return (
    <Flex>
      <SLink to={ link }>{ text }</SLink>
    </Flex>
  );
};
const Container = styled.div`
  display: none;
  color: white;
  font-size: 28px;
  cursor: pointer;
  
  @media screen and ${responsive.mobileL} {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  @media screen and ${responsive.tablet} {
    display: flex;
    align-items: center;
    justify-content: center;
  }

`;
const ResponsiveButton = () => {
  const handleClick = () => {
    let degree = "0";
    let show = "none";
    const icon = Array.from(document.getElementsByClassName("menu-icon"));
    const dropDown = Array.from(document.getElementsByClassName("drop-down"));
    console.log(dropDown);
    if (icon[0].style.transform === "" || icon[0].style.transform === "rotate(0deg)"){ 
      degree = "90"; 
      show = "50px";
    }
    else { 
      degree = "0";
      show = "0px";
    };
    icon[0].style.transform = `rotate(${degree}deg)`
    dropDown[0].style.height = show;
  };
  return (
    <Container onClick={ handleClick }>
      <i style={{
        transition: "all 0.2s ease-in-out"
      }}className="fas fa-bars menu-icon"></i>
    </Container>
  );
}
const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  grid-column: 4 / 10;
  @media screen and ${responsive.mobileL} {
    display: none;
  }
  @media screen and ${responsive.tablet} {
    display: none;
  }
`;

const Header = () => {

  return (
    <>
    <Grid>
      <Logo><Link to="/">BEST GRADERS</Link></Logo>
      <SearchContainer>
        <SearchBar/>
      </SearchContainer>
      <Item link = "/" text = "HOME" />
      <Item link = "/about" text = "ABOUT" />
      <Item link = "/contact" text = "CONTACT" />
      <ResponsiveButton/>
    </Grid>
    <DropDown/>
    </>
  );
};

export default Header;