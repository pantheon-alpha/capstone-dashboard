import React from 'react'
import styled from 'styled-components'
import Finseed from '../images/Finseed.svg'
import sampleIcn from '../images/gatsby-icon.png'

const Container = styled.div`
    background-color: ${p=> p.theme.primaryBg};
    height: 100vh;
    width: 20vw;
    flex: 1;
    border-left: 1px solid grey;
    position: fixed;
    margin-left: 80vw;
`
const Header = styled.div`
    padding: 2rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
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

const SidebarRight = () => {
  return (
    <Container>
       
    </Container>
  )
}

export default SidebarRight