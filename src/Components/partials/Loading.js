import React from "react";
import styled from "styled-components";
import LoadingSpinner from '@bit/folland87.a24ui.loading-spinner';

const Flex = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Text = styled.p`
  font-size: 38px;
  font-weight: 200;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

const Loading = () => {
  return (
    <Flex>
      <LoadingSpinner/>
      <Text>Retrieving Data ...</Text>
    </Flex>
  );
};

export default Loading;