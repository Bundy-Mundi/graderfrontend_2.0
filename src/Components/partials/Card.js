import React from 'react';
import styled from "styled-components";
import { Chart } from '@bit/primefaces.primereact.chart';
import { _blue, _yellow, _red } from "../../styles/colors";

const Flex = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  transition: all 0.2s ease-in-out;
  :hover{
    transform: scale(1.04);
  }
`;
const Information = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  align-items: flex-start;
  justify-content: flex-start;
`;
const Text = styled.p`
  color: ${props=>props.color};
  text-transform: uppercase;
  font-size: ${props=>props.fontSize};
  font-weight: ${props=>props.fontWeight};
  letter-spacing: ${props=>props.letterSpacing ? props.letterSpacing : "0.1rem"};
  margin-top: 10px;
`;
const Span = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  font-size: 30px;
  font-weight: 900;
  top: 50%;
  left: 50%;
  transform: translate(-45%, -50%);
  color: ${props=>props.color};
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
  const chanceOfA = ((A / total) * 100).toFixed(0);
  const colorPicker = () => {
    if(chanceOfA < 20) { return _red; }
    else if(chanceOfA < 40) { return _yellow; }
    else return _blue;
  };
  const color = colorPicker();
  const data = {
    datasets: [
      {
        data: [chanceOfA, 100 - chanceOfA],
        backgroundColor: [color, 'transparent'],
        hoverBackgroundColor: [color, 'transparent'],
        hoverBorderWidth: 0,
      }
    ]
  };
  const options = {
    legends: { display: false },
    tooltips:{ enabled: false }
  };
  
  return (
    <a href={`/view/${id}`}>
    <Flex className="shadow-lg py-6 px-4 bg-white rounded">
      <Information>
        <Text fontSize="34px" fontWeight="200" letterSpacing="0.3rem">{ name }</Text>
        <Text fontSize="27px" fontWeight="200" letterSpacing="0.25rem">{ professor }</Text>
        <Text>{ year }</Text>
        <Text>{ semester }</Text>
      </Information>
      <div style={{ position:"relative" ,width: 400, height:400 }}>
        <Span color={ color }>{ chanceOfA }%</Span>
        <Chart type='doughnut' data={ data } options={ options } />
      </div>
     <Text className="mt-10" color={color} fontWeight="900">OF PEOPLE GOT A</Text>
    </Flex>
    </a>
  );
}

export default Card;