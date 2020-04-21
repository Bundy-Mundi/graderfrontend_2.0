import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import Button from "./partials/Button";

const Flex = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
`;

const NoticeBoard = styled.div`
  display: flex;
  height: 70%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding:50px;
  border: 1px solid rgba(0,0,0,0.03);
  font-family: Arial, Helvetica, sans-serif;
`;

const Heading = styled.h1`
  font-size: ${props=>props.fontSize};
  letter-spacing: 0.2rem;
  color: #2c3e50;

`;
const Error404 = () => {
  return(
    <>
    <Helmet title="Error 404 Page"/>
    <Flex>
      <NoticeBoard className="mt-16 rounded bg-gray-100 shadow-xl">
        <Heading fontSize="56px">4 0 4</Heading>
        <Heading fontSize="44px">PAGE NOT FOUND</Heading>
        <Link style={{ height: "70px", width: "280px" }} to="/">
          <Button name="Go Back To Home" height="100%" width="100%" fontSize="11px"/>
        </Link>
      </NoticeBoard>
    </Flex>
    </>
  );
}

export default Error404;