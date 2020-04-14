import React, { useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { _blue } from "../styles/colors";
import { responsive } from "../styles/responsive";

const SearchResult = () => {
  let { search } = useLocation();
  let term = search.split("=")[1];
  console.log(term)
  return (
    <>
      Search By: { term }
      <p>SearchResult</p>
    </>
  );
}

export default SearchResult;