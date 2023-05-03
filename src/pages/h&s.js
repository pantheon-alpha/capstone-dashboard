import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { CiSearch } from "react-icons/ci"
import {AiOutlineDownload} from "react-icons/ai"
import Sidebar from "../widgets/Reports/Sidebar"
import supportBubble from "../images/supportBubble.svg"

const Container = styled.section`
  background-color: ${p=> p.theme.primaryBg};
  flex: 3;
  padding: 2rem;
  margin-left: 20vw;
  margin-right: 20vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
`
const Header = styled.div`
  padding: 1rem 0rem;
    
  display: flex;
  align-items: center;
  justify-content: space-between;

  //margin-bottom: 1rem; 
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
    padding: 0 0 .3rem .3rem;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 22px;
    background-color: transparent;

    color: ${p=> p.theme.textPrimary};
    opacity: .5;
    width: 100%;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: ${p=> p.theme.textPrimary};
    opacity: .5;
  }

  svg {
    margin-right: .5rem;
  }

  border-bottom: 1px solid #9F9F9F;
  width: 50%;
`
const SearchIcn = styled(CiSearch)`
  color: ${p=> p.theme.textPrimary};
  opacity: .5;

  font-size: 1rem;
  margin-bottom: .3rem;
`

const HelpBody = styled.div`

  margin-top: 1rem;
  padding: 1rem 0rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

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

const Row = styled.div`
  display: flex;
  margin-top: 0rem;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

`

const BannerWrap = styled.div`

  display: flex;
  align-items: center;

  //background-color: aliceblue;
  //border-bottom: 1px solid #9F9F9F;
  width: 50%;
  
  align-items: center;
  justify-content: center;
`

const Banner = styled.div`
    display: flex;
    flex-direction: row;

    padding: .2rem 0rem;
    align-items: center;
    justify-content: space-between;

    background-color: ${p=>p.theme.FNGreen};
    width: 50%;

    :hover{
        cursor: pointer;
    }

    // even div

    #firstDiv {

        background-color: ${p=>p.theme.primaryBg};
        border-radius: 0 10px 10px 0;
        width: 5px;
        height: 10px;
    }
    
    #secondDiv {

        background-color: ${p=>p.theme.primaryBg};
        border-radius: 10px 0px 0px 10px;
        width: 5px;
        height: 10px;
    }

    h4 {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
        color: ${p=>p.theme.secondaryBg};
    }
`

const CardWrap = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    //background-color: rgba(102, 217, 152, 0.25);
    border: 1px solid #66D998;
    border-radius: 10px;
    padding: 1rem 1rem;
    margin-top: 1rem;
    width: 400px;
    height: 70%;
    justify-content: space-between;

    :hover{
        cursor: pointer;
        background-color: rgba(102, 217, 152, 0.25);
    }
`

const CardTitle = styled.div`
    font-size: 16px;
    line-height: 24px;
    color: ${p=>p.theme.textPrimary};
    //width: 50%;
    h3 {
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
    }
`

const CardDesc = styled.div`
    font-size: 16px;
    line-height: 24px;
    color: ${p=>p.theme.textPrimary};
    //width: 50%;
    p {
        font-style: normal;
        font-weight: 600;
        font-size: 10px;
        line-height: 15px;
        color: ${p=>p.theme.textPrimary};
    }
`
const Card = styled.div`

    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    width: 100%;
    //background-color: aliceblue;
    //border: 1px solid #66D998;
`

const Bubble = styled.img`
    width: 50%;
    height: 50%;
    //background-color: aliceblue;
`


const HelpSupport = () => (
  <Layout>
    <Container>
        <Header>
            <Title>Help & Support</Title>
        </Header>

        
        <Row>
            <SectionHeader>
                <h4>Need help with anything?</h4>
            </SectionHeader>
        </Row>

        <Row>
            <SearchBar>
                <SearchIcn/>
                <input type="text" placeholder="Search"/>
            </SearchBar>
            <BannerWrap>
                <Banner>
                    <div id="firstDiv"></div>
                    <h4>My Queries</h4>
                    <div id="secondDiv"></div>
                </Banner>
            </BannerWrap>
        </Row>

        <HelpBody>
            <Row>
                <CardWrap>
                    <Bubble src={supportBubble}/>
                    <Card>
                        <CardTitle>
                            <h4>Farms</h4>
                        </CardTitle>
                        <CardDesc>
                            <p>Ownership - Charts - Process</p>
                        </CardDesc>
                    </Card>
                </CardWrap>
                <CardWrap>
                    <Bubble src={supportBubble}/>
                    <Card>
                        <CardTitle>
                            <h4>Farms</h4>
                        </CardTitle>
                        <CardDesc>
                            <p>Ownership - Charts - Process</p>
                        </CardDesc>
                    </Card>
                </CardWrap>
            </Row>

            <Row>
                <CardWrap>
                    <Bubble src={supportBubble}/>
                    <Card>
                        <CardTitle>
                            <h4>Farms</h4>
                        </CardTitle>
                        <CardDesc>
                            <p>Ownership - Charts - Process</p>
                        </CardDesc>
                    </Card>
                </CardWrap>
                <CardWrap>
                    <Bubble src={supportBubble}/>
                    <Card>
                        <CardTitle>
                            <h4>Farms</h4>
                        </CardTitle>
                        <CardDesc>
                            <p>Ownership - Charts - Process</p>
                        </CardDesc>
                    </Card>
                </CardWrap>
            </Row>

            <Row>
                <CardWrap>
                    <Bubble src={supportBubble}/>
                    <Card>
                        <CardTitle>
                            <h4>Farms</h4>
                        </CardTitle>
                        <CardDesc>
                            <p>Ownership - Charts - Process</p>
                        </CardDesc>
                    </Card>
                </CardWrap>
                <CardWrap>
                    <Bubble src={supportBubble}/>
                    <Card>
                        <CardTitle>
                            <h4>Farms</h4>
                        </CardTitle>
                        <CardDesc>
                            <p>Ownership - Charts - Process</p>
                        </CardDesc>
                    </Card>
                </CardWrap>
            </Row>

            <Row>
                <CardWrap>
                    <Bubble src={supportBubble}/>
                    <Card>
                        <CardTitle>
                            <h4>Farms</h4>
                        </CardTitle>
                        <CardDesc>
                            <p>Ownership - Charts - Process</p>
                        </CardDesc>
                    </Card>
                </CardWrap>
                <CardWrap>
                    <Bubble src={supportBubble}/>
                    <Card>
                        <CardTitle>
                            <h4>Farms</h4>
                        </CardTitle>
                        <CardDesc>
                            <p>Ownership - Charts - Process</p>
                        </CardDesc>
                    </Card>
                </CardWrap>
            </Row>

        </HelpBody>



        
      </Container>
      <Sidebar/>
  </Layout>
)

export const Head = () => <Seo title="Reports" />

export default HelpSupport