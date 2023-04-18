import * as React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { CiSearch } from "react-icons/ci"
import { Link } from "gatsby"
import Linechart from "../widgets/Charts/Linechart"
import Buyselltab from "../widgets/Buyselltab"
import Piechart from "../widgets/Charts/Piechart"

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
  color: ${p=>p.theme.textHeading};
`
const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 125px;

`


const Notifications = styled.div`
  width: 40px;
  height: 40px;
  background-color: ${p=> p.theme.textPrimary};
  border-radius: 50%;

`
const Wrapper = styled.div`
  background-color: ${p=> p.theme.primaryBg};
  

`
const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

`
const CurPrice = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding-top: 30px;

`
const SectionTitle = styled.h3`

  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: ${p=>p.theme.textPrimary};
`
const Price = styled.h1`
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 30px;
  color: ${p=>p.theme.textHeading};
`
const Deviation = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  color: ${p=>p.theme.FNGreen};
  padding-left: 10px;
`
const SectionLink = styled(Link)`

  text-decoration: none;

  font-style: normal;
  font-weight: 300;
  font-size: 15px;
  line-height: 22px;
  color: ${p=> p.theme.FNGreen};
  cursor: pointer;
`
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 350px;
`


const Test = () => (
  <Layout>
    <Container>
        <Header>
            <Title>Sridevi Farms</Title>
            <Buttons>
              <Notifications></Notifications>
              <Notifications></Notifications>
            </Buttons>
        </Header>
        <Wrapper>
          <Heading>
            <SectionTitle>Primary</SectionTitle>
            <SectionLink to='/404'>see more</SectionLink>
          </Heading>
          <CurPrice>
            <Price>₹2300.06</Price>
            <Deviation>+580.20 (2.87%)</Deviation>
          </CurPrice>
          <Main>
            <Linechart />
            <Buyselltab />
          </Main>
          <Heading>
            <SectionTitle>Strawberry</SectionTitle>
          </Heading>
          <CurPrice>
            <Price>₹1573.46.06</Price>
            <Deviation>+415.26 (4.94%)</Deviation>
          </CurPrice>
          <Main>
            <Linechart />
          </Main>
          <Heading>
            <SectionTitle>Apples</SectionTitle>
          </Heading>
          <CurPrice>
            <Price>₹1573.46.06</Price>
            <Deviation>+415.26 (4.94%)</Deviation>
          </CurPrice>
          <Main>
            <Linechart />
          </Main>
          <Heading>
            <SectionTitle>Investment Distribution</SectionTitle>
          </Heading>
          <CurPrice>
            <Price>TEXT TEXT</Price>
            <Deviation>TEXT TEXT</Deviation>
          </CurPrice>
          <Main>
            <Piechart />
          </Main>

        </Wrapper>
      </Container>
  </Layout>
)

export const Head = () => <Seo title="Test" />

export default Test
