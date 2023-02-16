import * as React from "react"
import { CiSearch } from "react-icons/ci"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from "styled-components"
import FarmList from "../widgets/Farm/FarmList"

const Container = styled.section`
  background-color: ${p=> p.theme.primaryBg};
  flex: 3;
  padding: 2rem;
  margin-left: 20vw;
  margin-right: 18vw;

  //border: 2px solid red;
`
const Header = styled.div`
  padding: 1rem 0rem;
    
  display: flex;
  align-items: center;
  justify-content: space-between;
  //margin-bottom: 3rem;
`
const Title = styled.h3`

  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 39px;
  color: ${p=>p.theme.textPrimary};
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
    background-color: transparent;

    color: ${p=> p.theme.textPrimary};
    opacity: .5;
  }
`
const SearchIcn = styled(CiSearch)`
  color: ${p=> p.theme.textPrimary};
  opacity: .5;
`
const Farms = () => (
  <Layout>
    <Container>
        <Header>
            <Title>Farms</Title>
            <SearchBar>
                <SearchIcn/>
                <input type="text" placeholder="Search"/>
            </SearchBar>
        </Header>
        <FarmList/>
    </Container>
  </Layout>
)

export const Head = () => <Seo title="Farms" />

export default Farms
