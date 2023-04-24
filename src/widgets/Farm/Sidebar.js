import React from 'react'
import styled from 'styled-components'
import {IoNotificationsCircleSharp} from 'react-icons/io5'
import {RiMoonFill} from 'react-icons/ri'
import SubFarmers from './SubFarmers'

import avatar from '../../images/FarmProfilePictureAdi.png'

import {IoExitOutline} from 'react-icons/io5'




const Container = styled.section`
    background-color: ${p=> p.theme.primaryBg};
    width: 19vw;
    border-left: 1px solid grey;
    position: fixed;
    margin-left: 80vw;
    padding-top: 2rem;
    height: 100vh;

    /* z-index: 99; */

    //border: solid 2px red;
`
const Header = styled.div`
    
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
    margin-left: 2rem;


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
    margin-right: 2rem;

    &:hover{
        color: ${p=> p.theme.FNGreen};
    }

`
const Profile = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: .5rem 0rem;
`
const ProfileImg = styled.img`
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    margin-bottom: 1rem;
    border: 5px solid ${p=> p.theme.FNGreen};
    //background-color: aqua;
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
const LandDetails = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 1rem 0rem 1.65rem 0rem;
`
const LandTitle = styled.h3`
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    color: ${p=> p.theme.textPrimary};
`
const Land = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: ${p=> p.theme.textHeading};

    display: flex;
    align-items: center;
    justify-content: center;
`

const SignOut = styled.div`
    display: flex;
    align-items: center;
    justify-content: right;
    flex-direction: row;
    padding: 1.4rem 2rem 2rem 0rem;
    margin-top: 0.5rem;
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


const Sidebar = () => {
    
  return (
    <Container>
        <Header>
            <NotificationIcn/>
            <ThemeIcn />
        </Header>
        <Profile>
            <ProfileImg src={avatar}/>
            <ProfileName>Aditya Vikram</ProfileName>
            <ProfileEmail>adi.vikky@gmail.com</ProfileEmail>
        </Profile>
        <LandDetails>
            <Land>21.5 acre</Land>
            <LandTitle>Total Land</LandTitle>
        </LandDetails>

        <SubFarmers/>

        <SignOut>
            <SignOutiIcn/>
            <SignOutText>Sign Out</SignOutText>
        </SignOut>
    </Container>
  )
}

export default Sidebar