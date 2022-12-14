import React from 'react'
import styled from 'styled-components'
import {IoNotificationsCircleSharp} from 'react-icons/io5'
import {RiMoonFill} from 'react-icons/ri'
import {BsFillTriangleFill} from 'react-icons/bs'
import avatar from '../images/profileAvatar.svg'
import { Wallet } from '../widgets/Wallet'
import {IoExitOutline} from 'react-icons/io5'



const Container = styled.div`
    background-color: ${p=> p.theme.primaryBg};
    height: 100vh;
    width: 20vw;
    flex: 1;
    border-left: 1px solid grey;
    position: fixed;
    margin-left: 80vw;
    padding: 2rem;

    //border: solid 2px red;
`
const Header = styled.div`
    
    padding: 1rem 0rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Logo = styled.img`
    width: 4rem;
    height: 4rem;
    flex: 1;
`
const Title = styled.h3`
    padding: 1rem;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 43px;
    color: ${p=> p.theme.textPrimary};
`

const Menu = styled.div`
    display: block;
`
const MenuItemActive = styled.div`
    margin: 1rem 2rem 0 2rem;
    padding: 1rem 1.35rem;
    background-color: ${p=> p.theme.FNGreen};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: left;
    cursor: pointer;

    &:hover{
        border: 1px solid black;
    }

    img {
        width: 24px;
        height: 24px;
    }

    h3 {
        padding: 0 1rem;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: ${p=> p.theme.textHeading};
    }
`
const MenuItem = styled.div`
    margin: 0 2rem;
    padding: 1rem 1.35rem;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: left;
    cursor: pointer;

    &:hover{
        border: .5px solid black;
    }

    img {
        width: 24px;
        height: 24px;
    }

    h3 {
        padding: 0 1rem;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: ${p=> p.theme.textPrimary};
    }
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





const SidebarRight = () => {
    
  return (
    <Container>
        <Header>
            <NotificationIcn/>
            <ThemeIcn />
        </Header>
        <Profile>
            <ProfileImg src={avatar}/>
            <ProfileName>John Doe</ProfileName>
            <ProfileEmail>johndoe@gmail.com</ProfileEmail>
        </Profile>
        <Balance>
            <BalanceAmount>₹ 69,654
                <BalanceIcn/>
            </BalanceAmount>
            <BalanceTitle>Gross deviation</BalanceTitle>
        </Balance>

        <Wallet/>

        <SignOut>
            <SignOutiIcn/>
            <SignOutText>Sign Out</SignOutText>
        </SignOut>


    
    </Container>
  )
}

export default SidebarRight