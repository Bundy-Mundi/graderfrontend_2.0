import { gql } from "apollo-boost";

export const SEARCH_QUERY = gql`
  query courseSearch($term:String!){
    courseSearch(term:$term) {
      id
      name
      professor
      year
      semester
      grade{
        A
        B
        C
        D
        F
        W
        P
        NP
      }
    }
  }
`;
export const COURSE_QUERY = gql`
  query courseByID($id:ID!){
    courseByID(id:$id){
      name
      professor
      year
      semester
      grade{
        A
        B
        C
        D
        F
        W
        P
        NP
      }
    }
  }
`;