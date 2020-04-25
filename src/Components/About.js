import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import styled from "styled-components";
import { responsive } from "../styles/responsive";
import { useFadeIn } from "../hooks";
import { _blue } from "../styles/colors";

const projectsData = [
  {
    name: "",
    imageURL: ""
  },
  {
    name: "",
    imageURL: ""
  },
  {
    name: "",
    imageURL: ""
  },
  {
    name: "",
    imageURL: ""
  },
  {
    name: "",
    imageURL: ""
  },
  {
    name: "",
    imageURL: ""
  },
  {
    name: "",
    imageURL: ""
  },
  {
    name: "",
    imageURL: ""
  },
  {
    name: "",
    imageURL: ""
  }
]

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url(${props=>props.image});
  background-repeat: none;
  background-position: center;
  background-attachment: fixed;
  background-size: cover;
`;
const Grid = styled.div`
  display: grid;
  height: 100%;
  width: 90%;
  grid-template-columns: 1fr 2fr;
  grid-auto-rows: 100%;
  grid-gap: 10px;
  @media screen and ${responsive.mobileL} {
    grid-auto-rows: 300px;
  }
  @media screen and ${responsive.tablet} {
    grid-auto-rows: 300px;
  }

`;
const ProjectContainer = styled.div`
  display: grid;
  grid-gap: 17px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 350px;
  width: 350px;
  padding: 30px;
  @media screen and ${responsive.mobileL} {
    height: 200px;
    width: 200px;
    padding: 0;
  }
  @media screen and ${responsive.tablet} {
    height: 200px;
    width: 200px;
    padding: 0;
  }
`;
const Project = styled.div`
  background-image: url(${props=>props.Image});
  background-position: center;
  background-repeat: none;
  background-size: cover;
  width: 100%;
  height: 100%;
  border: 1px solid rgba(0,0,0,0.05);
  :hover{
    animation: pulse 0.4s forwards;
  }
`;
const Filter = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-color:${_blue};
  opacity: 0.2;
  z-index: 1;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid rgba(0,0,0,0.05);
  background-color: white;

`;
const Image = styled.img`
  @media screen and ${responsive.mobileL} {
    height: 70px;
    width: 70px;
  }
  @media screen and ${responsive.tablet} {
    height: 70px;
    width: 70px;
  }
`;
const Information = styled.div`
  @media screen and ${responsive.mobileL} {
    font-size: 11px;
  }
  @media screen and ${responsive.tablet} {
    font-size: 11px;
  }
`;
const Heading = ({ text }) => {
  return(
    <div className="shadow rounded" style={{ backgroundColor: "white", border:"1px solid rgba(0,0,0,0.05)", letterSpacing:"0.26rem", textTransform:"uppercase", fontSize: "36px",height:"90%", width:"90%", padding: "10px",  display: "flex", justifyContent:"center", alignItems:"center"}}>
      <p>{ text }</p>
    </div>
  );
};  

const About = () => {
  return(
    <>
    <Filter/>
    <Flex className="" image="https://images.unsplash.com/photo-1551892589-865f69869476?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9">
      <p className="text-3xl text-white">ABOUT US</p>
    </Flex>
    <section style={{ width:"100%", height:"100%", display: "flex", justifyContent:"center", alignItems:"flex-start", flexDirection: "column"}}>
      <ScrollAnimation className="mt-16" style={{width:"100%", height:"100px", display: "flex", justifyContent:"center", alignItems:"flex-start"}}animateIn="fadeInUp">
        <Heading text="Developer"/>
      </ScrollAnimation>
      <ScrollAnimation className="mb-16" style={{width:"100%", height:"100%", display: "flex", justifyContent:"center", alignItems:"flex-start"}}animateIn="fadeInUp">
        <Grid >
          <Item className="rounded shadow">
            <Image className="rounded-full h-32 w-32" src="https://images.unsplash.com/profile-1572279585416-0d51ae97343bimage?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff" alt=""/>
            <Information style={{
              display:"flex",
              flexDirection: "column",
              justifyContent:"space-evenly",
              alignItems: "flex-start",
              height: "50%",
              padding: "6px"
            }}>
              <p>Ben Kweon</p>
              <p>Bundy-Mundi</p>
              <p>Santa Monica College</p>
              <p>3rd Apr, 1995</p>
              <p>Los Angeles, CA</p>
            </Information>
          </Item>
          <Item className="rounded shadow">
            <ProjectContainer>
              {
                projectsData.map((v, k)=>{
                  return <Project className="shadow" key={k} Image={v.imageURL} name={v.name}/>
                })
              }
            </ProjectContainer>
          </Item>
        </Grid>
      </ScrollAnimation>
    </section>
    </>
 );
}

export default About;
