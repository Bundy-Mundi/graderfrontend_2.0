import React from 'react';
import styled from "styled-components";
import querystring from "querystring";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { SEARCH_QUERY } from "../query";
import Pagination from "./partials/Pagination";
import CardGrid from "./partials/CardGrid";
import Loading from "./partials/Loading";
import Error404 from "./Error404";
import SearchBar from "./partials/SearchBar";
import { responsive } from "../styles/responsive";
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
  transition: box-shadow 0.2s ease-in-out;
`;
const SearchContainer = styled.div`
  display: flex;
  width: 100%;
  height: 90px;
  align-items: center;
  justify-content: center;
`;
const SearchResult = () => {
  let { search } = useLocation();
  let queryString = querystring.parse(search, "&");
  const { page, term } = queryString;
  const { loading, error, data } = useQuery(SEARCH_QUERY, 
    { 
      variables: { term }
    });
  if(loading) { return <Loading/> }
  if(error) { return <Error404/> }
  let { courseSearch } = data;
  if(courseSearch===[] || null) { return "Nodata" }
  return (
    <Flex className="mt-16" >
      <TextWrapper className="mb-16 bg-white rounded shadow hover:shadow-xl">
        <p className="text-lg uppercase">Search By: </p>
        <p className="ml-10 text-3xl uppercase">{ term }</p>
      </TextWrapper>
      <SearchContainer>
        <SearchBar width="90%" whenScreenSmall="block" height="100%" fontSize="17px" fontWeight="300"/>
      </SearchContainer>
      <CardGrid dataList={ courseSearch } currentPage={ page } restriction={RESTRICTION}/>
      <Pagination dataList={ courseSearch } term={ term } restriction={RESTRICTION}/>
    </Flex>
  );
}

export default SearchResult;