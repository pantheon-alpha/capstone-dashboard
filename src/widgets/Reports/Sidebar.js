import React from 'react'
import styled from 'styled-components'
import {IoNotificationsCircleSharp} from 'react-icons/io5'
import {RiMoonFill} from 'react-icons/ri'
import {BsFillTriangleFill} from 'react-icons/bs'

import {IoExitOutline} from 'react-icons/io5'
import {AiOutlinePlus} from 'react-icons/ai'
import FAQ from '../FAQ'



const Container = styled.div`
    background-color: ${p=> p.theme.primaryBg};
    height: 100vh;
    width: 19vw;
    flex: 1;
    border-left: 1px solid grey;
    position: fixed;
    margin-left: 80vw;
    padding: 2rem;

    display: flex;
    flex-direction: column;
    justify-content: space-around;

    //border: solid 2px red;
`
const Header = styled.div`

    flex: 1;
    
    padding: 1rem 0rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const NotificationIcn = styled(IoNotificationsCircleSharp)`
    //border: 2px solid red;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    color: ${p=> p.theme.textPrimary};


    &:hover{
        color: ${p=> p.theme.FNGreen};
    }

`
const ThemeIcn = styled(RiMoonFill)`
    //border: 2px solid red;
    width: 1.5rem;
    height: 1.5rem;
    cursor: pointer;
    color: ${p=> p.theme.textPrimary};

    &:hover{
        color: ${p=> p.theme.FNGreen};
    }

`

const SignOut = styled.div`

    flex: 1;

    display: flex;
    align-items: center;
    justify-content: right;
    flex-direction: row;
    padding: 1rem 0rem;
    margin-top: .5rem;
`
const SignOutiIcn = styled(IoExitOutline)`
    width: 1.5rem;
    height: 1.5rem;
    color: ${p=> p.theme.textPrimary};
    margin-right: .5rem;
`

const SignOutText = styled.h3`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: ${p=> p.theme.textPrimary};
`

const Wrapper = styled.div`
    flex: 5;
    display: flex;
    align-items: left;
    justify-content: top;
    flex-direction: column;
    padding: 1rem 0rem;
    margin-top: 1rem;

    //background-color: ${p=> p.theme.secondaryBg};
`


const Sidebar = () => {
    
  return (
    <Container>
        <Header>
            <NotificationIcn/>
            <ThemeIcn />
        </Header>

        <Wrapper>
            <FAQ />
        </Wrapper>
        
        <SignOut>
            <SignOutiIcn/>
            <SignOutText>Sign Out</SignOutText>
        </SignOut>


    
    </Container>
  )
}

export default Sidebar