import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { CiSearch } from "react-icons/ci"
import SidebarRight from "../components/sidebarRight"

const Container = styled.section`
  background-color: ${p=> p.theme.primaryBg};
  flex: 3;
  padding: 2rem;
  margin-left: 20vw;
  margin-right: 20vw;
  height: 100vh;
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
const Products = () => (
  <Layout>
    <Container>
        <Header>
            <Title>WORK IN PROGRESS</Title>
            <SearchBar>
                <SearchIcn/>
                <input type="text" placeholder="Search"/>
            </SearchBar>
        </Header>
      </Container>
      <SidebarRight/>
  </Layout>
)

export const Head = () => <Seo title="Products" />

export default Products
