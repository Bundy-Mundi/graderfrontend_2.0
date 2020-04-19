import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props=>props.width ? props.width : "100%"};
  height: 100%;
`;
const SLink = styled(Link)`
`;

const Grid =  styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(70px, 1fr));
  grid-auto-rows: 20px;
  width: 100%;
`;

const Item = ({ term, pageNum }) => {
return <Flex><SLink to={`search-result?search=&term=${term}&page=${pageNum}`}>{pageNum}</SLink></Flex>
}

const Pagination = ({ dataList, term, restriction }) => {
  let pageNumbers = [];

  for (let i = 1; i <= Math.ceil( dataList.length / restriction ); i++) {
    pageNumbers.push(i)
  }
  console.log(pageNumbers)
  return (
    <Flex width="50%">
      <Grid>
        {
          pageNumbers.map((v, k)=>{
            return <Item key={ k } term={term} pageNum={ v }/>
          })
        }
      </Grid>
    </Flex>
  );
}

export default Pagination;