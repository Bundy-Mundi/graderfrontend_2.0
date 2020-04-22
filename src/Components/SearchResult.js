import React from 'react';
import styled from "styled-components";
import querystring from "querystring";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { SEARCH_QUERY } from "../query";
import Pagination from "./partials/Pagination";
import CardGrid from "./partials/CardGrid";
import Error404 from "./Error404";
import { useFadeIn } from '../hooks';
//import { _blue } from "../styles/colors";
//import { responsive } from "../styles/responsive";

const RESTRICTION = 8;

const Flex = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;
const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 90%;
  border: 1px solid rgba(0,0,0,0.01);
`;
const SearchResult = () => {
  let { search } = useLocation();
  let queryString = querystring.parse(search, "&");
  const { page, term } = queryString;
  const { loading, error, data } = useQuery(SEARCH_QUERY, 
    { 
      variables: { name: term }
    });
  if(loading) { return "Loading" }
  if(error) { return <Error404/> }
  let { courseByName } = data;
  return (
    <Flex className="mt-16" >
      <TextWrapper className="bg-gray-200 rounded shadow-lg">
        <p className="text-2xl uppercase">Search By: { term }</p>
      </TextWrapper>
      <CardGrid dataList={ courseByName } currentPage={ page } restriction={RESTRICTION}/>
      <Pagination dataList={ courseByName } term={term} restriction={RESTRICTION}/>
    </Flex>
  );
}

export default SearchResult;