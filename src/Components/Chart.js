import React from 'react';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import { _blue } from "../styles/colors";
import { responsive } from "../styles/responsive";
import Loading from "./partials/Loading";
import Error404 from "./Error404";
import { COURSE_QUERY } from "../query";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const Chart = () => {
  let { id } = useParams();
  const { loading, error, data } = useQuery(COURSE_QUERY, { 
    variables: { id } 
  });
  if (loading) { return <Loading/> }
  if (error) { return <Error404/> }
  const { courseByID } = data;
  return(
    <>
    <Flex className="mb-6">
      <p>{ courseByID.name }</p>
      <p>{ courseByID.professor }</p>
      <p>{ courseByID.year }</p>
      <p>{ courseByID.semester }</p>
    </Flex>
    <Flex>
      <p>A: { courseByID.grade.A }</p>
      <p>B: { courseByID.grade.B }</p>
      <p>C: { courseByID.grade.C }</p>
      <p>D: { courseByID.grade.D }</p>
      <p>F: { courseByID.grade.F }</p>
      <p>W: { courseByID.grade.W }</p>
      <p>P: { courseByID.grade.P }</p>
      <p>NP: { courseByID.grade.NP }</p>
    </Flex>
    </>
  );
};

export default Chart;