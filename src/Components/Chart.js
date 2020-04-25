import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import { _blue, _B, _C, _D } from "../styles/colors";
import { responsive } from "../styles/responsive";
import { Chart as ChartJS } from '@bit/primefaces.primereact.chart';
import Loading from "./partials/Loading";
import Error404 from "./Error404";
import { COURSE_QUERY } from "../query";

const pieOptions = {
  legend: { 
    display: false,
  }
};
const barOptions = {
  legend: { display: false }
};

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(5, 1fr);
  width: 90%;
  height: 50%;
  grid-gap: 23px;
  
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  border: 1px solid rgba(0,0,0,0.1);
`;
const PieChartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  grid-column: 1 / 5;
  grid-row: 1 / 3;
  border: 1px solid rgba(0,0,0,0.1);
`;
const BarChartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  grid-column: 1 / -1;
  grid-row: -3/ -1;
  border: 1px solid rgba(0,0,0,0.1);
`;
const RadarChartContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  grid-column: 5 / 11;
  grid-row: 1 / 4;
  border: 1px solid rgba(0,0,0,0.1);
`;
const ActualData = styled.div`
  grid-column: 1 / 5;
  grid-row: 3 / 4;
  border: 1px solid rgba(0,0,0,0.1);
`;
const Chart = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(COURSE_QUERY, { 
    variables: { id } 
  });
  if (loading) { return <Loading/> }
  if (error) { return <Error404/> }
  const { courseByID } = data;
  const { name, professor, year, semester, grade } = courseByID;
  const { A, B, C, D, F, W, NP, P } = grade;
  const pieData = {
    labels: ['A', 'B', 'C', 'D', 'F', 'P', 'NP'],
    datasets: [
      {
        data: [A, B, C, D, F, NP, P],
        backgroundColor: [_blue, _B, _C, _D ],
        hoverBackgroundColor: [_blue ],
        hoverBorderWidth: 0,
      }
    ]
  };
  const barData = {
    labels: ['A', 'B', 'C', 'D', 'F', 'P', 'NP'],
    datasets: [
      {
        data: [A, B, C, D, F, P, NP],
        backgroundColor: [_blue, _B, _C, _D ],
        hoverBackgroundColor: [_blue ],
        hoverBorderWidth: 0,
        xAxisID: ""
      }
    ]
  };
  const radarData = {
    labels: ['A', 'B', 'C', 'D', 'F', 'P', 'NP'],
    datasets: [
      {
        label:`${year} ${semester}`,
        data: [A, B, C, D, F, P, NP],
        backgroundColor: [_blue],
        hoverBackgroundColor: [_blue ],
        hoverBorderWidth: 0,
      },
      {
        label:`${year} ${semester}`,
        data: [A, B, C, D, F, P, NP],
        backgroundColor: [_blue ],
        hoverBackgroundColor: [_blue ],
        hoverBorderWidth: 0,
      }
    ]
  };
  return(
    <Flex className="mt-16 mb-16">
      <TextContainer className="rounded bg-white shadow-lg py-12">
        <p className="text-3xl uppercase tracking-widest">{name}</p>
        <p className="mt-6 text-2xl uppercase tracking-widest">{professor}</p>
        <p className="mt-6 text-lg uppercase tracking-widest">{year}</p>
        <p className="mt-6 text-lg uppercase tracking-widest">{semester}</p>
      </TextContainer>
      <TextContainer className="mt-16 rounded bg-white shadow-lg py-12">
        <p className="text-xl uppercase tracking-widest">{((A/(A+B+C+D+F+P+NP))*100).toFixed(0)}% of People Got A</p>
      </TextContainer>
      <Grid className="mt-16">
        <PieChartContainer className="rounded shadow-lg bg-white">
          <p className="text-lg tracking-widest">Pie Chart</p>
          <ChartJS height="70%" width="100%" type="pie" data={ pieData } options={ pieOptions }></ChartJS>
        </PieChartContainer>
        <BarChartContainer className="rounded shadow-lg bg-white">
          <p className="my-6 text-lg tracking-widest">Bar Chart</p>
          <ChartJS type="bar" height="50%" width="100%" data={ barData } options={ barOptions }></ChartJS>
        </BarChartContainer>
        <ActualData className="rounded shadow-lg bg-white">
          <p>{A}</p>
          <p>{B}</p>
          <p>{C}</p>
          <p>{D}</p>
          <p>{F}</p>
          <p>{P}</p>
          <p>{NP}</p>
        </ActualData>
        <RadarChartContainer className="rounded shadow-lg bg-white">
          <p className="text-lg tracking-widest">Radar Chart</p>
          <ChartJS type="radar" height="70%" width="100%" data={radarData}></ChartJS>
          <p>Choice</p>
        </RadarChartContainer>
      </Grid>
    </Flex>
  );
};

export default Chart;