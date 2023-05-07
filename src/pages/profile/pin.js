import * as React from "react"
import styled from "styled-components"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { CiSearch } from "react-icons/ci"
import SidebarRight from "./sidebarRight"
import avatar from '../../images/profileAvatar.svg'

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
    display: flex;
    flex-direction: column;
    width: 40%;
    label {
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 15px;
        color: #707070; //${p=>p.theme.textPrimary};
        margin-bottom: 0rem;
    }
    input {
        padding: .3rem 0 0 0;
        border: none;
        border-bottom: 1px solid #9F9F9F;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 21px;
        color: #000000; //${p=>p.theme.textPrimary};
        width: 100%;

        &:focus {
            outline: none;
            }

        ::placeholder{
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 21px;
            color: #000000;
            
        }
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


const Pin = () => (
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
                <h4>Change PIN</h4>
            </SectionHeader>
        </ProfileSection>

        <FormSection>
            <FormRow>
                <InputWrap>
                    <label>OLD PIN</label>
                    <input type="password" Password={true} placeholder="Enter old pin"/>
                </InputWrap>
            </FormRow>
            <FormRow>
                <InputWrap>
                    <label>NEW PIN</label>
                    <input type="password" Password={true} placeholder="Enter new pin"/>
                </InputWrap>
            </FormRow>
            <FormRow>
                <InputWrap>
                    <label>CONFIRM NEW PIN</label>
                    <input type="password" Password={true} placeholder="Confirm new pin"/>
                </InputWrap>
            </FormRow>
            <FormRow>
                <InputWrap>
                    <Button>
                        Update PIN
                    </Button>
                </InputWrap>
            </FormRow>
        </FormSection>
        
      </Container>
      <SidebarRight 
        activeIndex={3}
      />
  </Layout>
)

export const Head = () => <Seo title="Pin" />

export default Pin
