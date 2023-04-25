import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import { CiSearch } from "react-icons/ci"
import {MdModeEditOutline} from "react-icons/md"
import {BiPlusCircle} from "react-icons/bi"
import FarmWatchlist from "../widgets/Watchlist/FarmWatchlist" 
import SidebarRight from "../widgets/Watchlist/SidebarRight"
import {Edit} from '../images/edit.svg'
import { bindActionCreators } from "redux"

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
const FilterRow = styled.div`

  display: flex;
  align-items: center;
  justify-content: left;
  margin-bottom: 1rem;

  cursor: pointer;
`

const FilterTab = styled.div`

  background-color: ${p=>p.theme.FNGreen};
  border-radius: 50px;
  padding: .3rem 1rem;
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 21px;
  color: ${p=>p.theme.primaryBg};


  //border: 2px solid red;

  display: flex;
  align-items: center;
  justify-content: space-between;


`

const PencilWrap = styled.div`

  width: 1.3rem;
  height: 1.3rem;
  margin-left: 1rem;
  border-radius: 50%;

  /* border: 2px solid red; */
  background-color: ${p=>p.theme.primaryBg};

  display: flex;
  align-items: center;
  justify-content: center;
  color:  ${p=>p.theme.FNGreen};
  cursor: pointer;

  &:hover{
    background-color: ${p=>p.theme.FNGreen};
    color: ${p=>p.theme.primaryBg};
  }

`

const Pencil = styled(MdModeEditOutline)`

  width: 1rem;
  height: 1rem;
  color: ${p=>p.theme.FNGreen};
  cursor: pointer;

  &:hover{
    color: ${p=>p.theme.primaryBg};
  }
`

const PlusTab = styled(BiPlusCircle)`

  margin-left: .5rem;

  width: 1.6rem;
  height: 1.6rem;
  cursor: pointer;

  &:hover{
    color: ${p=>p.theme.FNGreen};
  }
`



const Watchlist = () => (
  <Layout>
    <Container>
        <Header>
            <Title>Watchlist</Title>
            <SearchBar>
                <SearchIcn/>
                <input type="text" placeholder="Search"/>
            </SearchBar>
        </Header>
        <FilterRow>
            <FilterTab>
              Alteeq's Watchlist
              <PencilWrap>
                <Pencil/>
              </PencilWrap> 
            </FilterTab>
            <PlusTab/>

            
        </FilterRow>

        <FarmWatchlist/>
      </Container>
      <SidebarRight/>
  </Layout>
)

export default Watchlist
