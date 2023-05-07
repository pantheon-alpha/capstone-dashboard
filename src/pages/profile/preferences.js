import * as React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { CiSearch } from "react-icons/ci"
import SidebarRight from "./sidebarRight"
import {AiOutlineDownload} from "react-icons/ai"
import { Link } from "gatsby"
import sampleFile from "../../data/serfd.pdf"

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
const ProfileSection = styled.div`
  //margin-top: 1rem;
  padding: 1rem 0rem;
`

const SectionHeader = styled.div`
  padding: 1rem 0rem;
  //border-bottom: 1px solid #9F9F9F;
  h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: ${p=>p.theme.textPrimary};
  }
`

const ProfileImg = styled.img`
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    margin-bottom: 1rem;
`

const FormSection = styled.div`
    padding: 1rem 0rem;
`
const FormRow = styled.div`
    display: flex;
    //border-bottom: 1px solid #9F9F9F;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: .5rem 0rem;

    margin-right: 10%;
`

const InputWrap = styled.div`

    margin: .5rem 0;
    display: flex;
    flex-direction: row;
    width: 45%;
    align-items: center;
    justify-content: space-between;

    h4 {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: ${p=>p.theme.textPrimary};
    }
`

const Button = styled.button`
    background: ${p=>p.theme.FNGreen};
    border-radius: 4px;
    border: none;
    padding: .5rem 1rem;
    color: #FFFFFF;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 21px;
    cursor: pointer;
    margin-top: 1rem;
    &:focus {
        outline: none;
    }
`

const DownloadBtn = styled(Link)`

    background: #66D998;
    border-radius: 50px;
    width: fit-content;
    padding: .3rem 1rem;

    display: flex;
    align-items: center;
    justify-content: center;

    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    text-decoration: none;

    color: #FFFFFF;

    cursor: pointer;
    &:focus {
        outline: none;
    }
`
const DownloadIcn = styled(AiOutlineDownload)`
  color: #FFFFFF;
  //margin-bottom: .2rem;

  margin-right: .2rem;
  height: 12px;
  width: 12px;
`


const Preferences = () => (
  <Layout>
    <Container>
        <Header>
            <Title>Profile</Title>
            <SearchBar>
                <SearchIcn/>
                <input type="text" placeholder="Search"/>
            </SearchBar>
        </Header>
        <ProfileSection>
            <SectionHeader>
                <h4>Preferences</h4>
            </SectionHeader>
        </ProfileSection>

      </Container>
      <SidebarRight 
        activeIndex={5}
      />
  </Layout>
)

export const Head = () => <Seo title="Preferences" />

export default Preferences
