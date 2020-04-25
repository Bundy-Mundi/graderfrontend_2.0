import React from 'react';
import styled from "styled-components";
import Card from "./Card";

const Grid = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fill, minmax(390px, 1fr));
  grid-auto-rows: 390px;
  width: 90%;
`;

const CardGrid = ({ dataList, currentPage, restriction }) => {
  dataList = dataList.slice( ((currentPage - 1) * restriction), (currentPage * restriction) );
  return(
    <Grid className="mt-16">
      {
        dataList.map((v, k) => {
          const total = (v.grade.A + v.grade.B + v.grade.C + v.grade.D + v.grade.F + v.grade.P + v.grade.NP)
          return <Card key={k} id={v.id} name={v.name} year={v.year} semester={v.semester} professor={v.professor} A={v.grade.A} total={total} P={v.grade.P} NP={v.grade.NP}/>
        })
      }
    </Grid>
  )
}

export default CardGrid;

