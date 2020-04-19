import React from 'react';
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Card = (
  { id,
    name,
    year,   
    semester,
    professor,
    A, P, NP, total }
 ) => 
 {
  const floatChance = ((A / total) * 100).toFixed(2);
  const intChance = (A / total) * 100
  return (
    <a href={`/view/${id}`}>
    <Flex>
      <p>{ name }</p>
      <p>{ year }</p>
      <p>{ semester }</p>
      <p>{ professor }</p>
      <p>Chance of A: { floatChance }%</p>
    </Flex>
    </a>
  );
}

export default Card;