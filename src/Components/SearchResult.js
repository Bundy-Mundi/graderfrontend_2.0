import React from 'react';
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { _blue } from "../styles/colors";
import { responsive } from "../styles/responsive";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const SearchResult = () => {
  let { search } = useLocation();
  let term = search.split("=")[1];
  const SEARCH_QUERY = gql`
    query courseByName($name:String!){
      courseByName(name:$name) {
        name
        professor
      }
    }
  `;
  const { loading, error, data } = useQuery(SEARCH_QUERY, 
    { variables:{ name:term }});
  console.log(data)
  if(loading) { return "Loading" }
  if(error) { return error }
  return (
    <>
      Search By: { term }
      <p>SearchResult</p>
    </>
  );
}

export default SearchResult;