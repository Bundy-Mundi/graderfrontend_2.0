import React from 'react';
import styled from "styled-components";
import querystring from "querystring";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { SEARCH_QUERY } from "../query";
import Pagination from "./partials/Pagination";
import CardGrid from "./partials/CardGrid";
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

const SearchResult = () => {
  let { search } = useLocation();
  let queryString = querystring.parse(search, "&");
  const { page, term } = queryString;
  const { loading, error, data } = useQuery(SEARCH_QUERY, 
    { 
      variables: { name: term }
    });
  if(loading) { return "Loading" }
  if(error) { return error }
  let { courseByName } = data;
  return (
    <Flex>
      <p className="text-4xl">Search By: { term }</p>
      <CardGrid dataList={ courseByName } currentPage={ page } restriction={RESTRICTION}/>
      <Pagination dataList={ courseByName } term={term} restriction={RESTRICTION}/>
    </Flex>
  );
}

export default SearchResult;