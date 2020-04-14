import React from 'react';
import { useParams, useLocation } from "react-router-dom";
import styled from "styled-components";
import { _blue } from "../styles/colors";
import { responsive } from "../styles/responsive";

const Chart = () => {
  let { id } = useParams();
  //let location = useLocation();
  

  // useEffect
  // Request Query to DB
  return(
    <>
      
      MY ID IS : {id}
    </>
  );
};

export default Chart;