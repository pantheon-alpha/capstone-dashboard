import React from 'react'
import styled from 'styled-components'
import {IoNotificationsCircleSharp} from 'react-icons/io5'
import {RiMoonFill} from 'react-icons/ri'
import {BsFillTriangleFill} from 'react-icons/bs'
import Buyselltab from '../Buyselltab'
import {IoExitOutline} from 'react-icons/io5'



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
const Profile = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 0rem;
`
const ProfileImg = styled.img`
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    margin-bottom: 1rem;
`
const ProfileName = styled.h3`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: ${p=> p.theme.textHeading};
`
const ProfileEmail = styled.h3`
    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 15px;
    color: ${p=> p.theme.textPrimary};
`
const Balance = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 0rem;
`
const BalanceTitle = styled.h3`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: ${p=> p.theme.textPrimary};
`
const BalanceAmount = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: ${p=> p.theme.textHeading};

    display: flex;
    align-items: center;
    justify-content: center;
`
const BalanceIcn = styled(BsFillTriangleFill)`
    width: .5rem;
    height: .5rem;
    color: ${p=> p.theme.FNGreen};

    margin-left: .5rem;
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

const StyledTab = styled.div`
    flex: 6;
    margin-left: -2rem;

    margin-top: 7rem;

    //border: solid 2px red;
`





const SidebarRight = () => {
    
  return (
    <Container>
        <Header>
            <NotificationIcn/>
            <ThemeIcn />
        </Header>

        <StyledTab>
            <Buyselltab/>
        </StyledTab>
        
        <SignOut>
            <SignOutiIcn/>
            <SignOutText>Sign Out</SignOutText>
        </SignOut>


    
    </Container>
  )
}

export default SidebarRight