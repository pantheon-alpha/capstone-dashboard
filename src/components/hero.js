import React from 'react'
import styled from 'styled-components'
import Plus from '../images/Vector.svg'
import { CiSearch } from "react-icons/ci";
import { AiOutlinePlusCircle } from "react-icons/ai";

import Farm from "../images/unsplash_xDrxJCdedcI.png"
import { Table } from '@mui/material';
import BasicTable from '../Elements/TrendingTable';


const Container = styled.section`
  background-color: ${p=> p.theme.primaryWhite};
  flex: 3;
  padding: 2rem;
`
const Header = styled.div`
  padding: 1rem 0rem;
    
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 3rem;
`
const Title = styled.h3`

  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
`
const SearchBar = styled.div`

  display: flex;
  align-items: center;

  
  input {
    padding: 0 0 0 .3rem;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;

    color: rgba(64, 64, 64, 0.5);
  }
`

const WidgetRow = styled.div`

  margin-top: 1rem;
  //border: red 2px solid;
`

const SectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  //border: red 2px solid;
`

const SectionTitle = styled.h3`

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
`
const SectionLink = styled.h3`

  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 22px;
  color: ${p=> p.theme.FNGreen};
  cursor: pointer;
`
const WidgetTray = styled.div`

  padding: 0rem 0 0rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Widget = styled.div`
  width: 150px;
  height: 150px;
  background-color: aqua;
  margin-right: 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  background: url(${Farm});
  //background: linear-gradient(180deg, #242424 0%, rgba(217, 217, 217, 0) 70.62%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  #row{
    background-color: ${p=>p.theme.primaryOffWhite};
    border-radius: 0px 0px 10px 10px;
    height: 45px;
    opacity: .8;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:hover{
      height: 100%;
    }

    div {
      display: block;
    }

    #add-icon {
      width: 18px;
      height: 18px;
      margin: 1rem 1rem 1rem 0;
    }
  }

  h2 {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    margin: 0rem 1rem;
  }

  p {
    margin: 0rem 1rem;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 10px;
    line-height: 15px;
    color: #66D998;
  }
`
const WidgetName = styled.h3`

  margin: 1rem;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  z-index: 3;
  /* identical to box height */


  color: #000000;
`

const Hero = () => {
  return (
    <Container>
        <Header>
          <Title>
            Dashboard
          </Title>
          <SearchBar>
            <CiSearch/>
            <input placeholder='Search'></input>
          </SearchBar>
        </Header>

        <WidgetRow>
          <SectionHeader>
            <SectionTitle>Farms</SectionTitle>
            <SectionLink>see more</SectionLink>
          </SectionHeader>
          <WidgetTray>
              <Widget>
                <WidgetName>
                  Pavan Farms
                </WidgetName>
                <div id='row'>
                  <div>
                    <h2>
                      ₹2,300.06
                    </h2>
                    <p>
                      580.20 (2.87%)
                    </p>
                  </div>
                  <img id='add-icon' src={Plus}/>
                </div>
              </Widget>
              <Widget>
                <WidgetName>
                  Pavan Farms
                </WidgetName>
                <div id='row'>
                  <div>
                    <h2>
                      ₹2,300.06
                    </h2>
                    <p>
                      580.20 (2.87%)
                    </p>
                  </div>
                  <AiOutlinePlusCircle id='add-icon'/>
                </div>
              </Widget>
              <Widget>
                <WidgetName>
                  Pavan Farms
                </WidgetName>
                <div id='row'>
                  <div>
                    <h2>
                      ₹2,300.06
                    </h2>
                    <p>
                      580.20 (2.87%)
                    </p>
                  </div>
                  <img id='add-icon' src={Plus}/>
                </div>
              </Widget>
              <Widget>
                <WidgetName>
                  Pavan Farms
                </WidgetName>
                <div id='row'>
                  <div>
                    <h2>
                      ₹2,300.06
                    </h2>
                    <p>
                      580.20 (2.87%)
                    </p>
                  </div>
                  <AiOutlinePlusCircle id='add-icon'/>
                </div>
              </Widget>
              <Widget>
                <WidgetName>
                  Pavan Farms
                </WidgetName>
                <div id='row'>
                  <div>
                    <h2>
                      ₹2,300.06
                    </h2>
                    <p>
                      580.20 (2.87%)
                    </p>
                  </div>
                  <img id='add-icon' src={Plus}/>
                </div>
              </Widget>
          </WidgetTray>
        </WidgetRow>

        <WidgetRow>
          <SectionHeader>
            <SectionTitle>Trending</SectionTitle>
            <SectionLink>see more</SectionLink>
          </SectionHeader>
          <BasicTable/>
        </WidgetRow>
    </Container>
  )
}

export default Hero