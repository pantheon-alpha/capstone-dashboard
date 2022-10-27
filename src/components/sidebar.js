import React from 'react'
import styled from 'styled-components'
import Finseed from '../images/Finseed.svg'
import sampleIcn from '../images/gatsby-icon.png'

const Container = styled.div`
    background-color: ${p=> p.theme.primaryOffWhite};
    flex: 1;
    height: 100vh;
    overflow-y: none;
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
    color: ${p=> p.theme.textGrey};
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
        width: 20px;
        height: 20px;
    }

    h3 {
        padding: 0 1rem;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: ${p=> p.theme.textWhite};
    }
`
const MenuItem = styled.div`
    margin: .3rem 2rem;
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
        width: 20px;
        height: 20px;
    }

    h3 {
        padding: 0 1rem;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: ${p=> p.theme.textGrey};
    }
`

const Sidebar = () => {
  return (
    <Container>
        <Header>
            <Logo src={Finseed}/>
            <Title>FINSEED</Title>
        </Header>
        <Menu>
            <MenuItemActive>
                <img src={sampleIcn}/>
                <h3>Dashboard</h3>
            </MenuItemActive>
            <MenuItem>
                <img src={sampleIcn}/>
                <h3>Invoices</h3>
            </MenuItem>
            <MenuItem>
                <img src={sampleIcn}/>
                <h3>Transactions</h3>
            </MenuItem>
            <MenuItem>
                <img src={sampleIcn}/>
                <h3>Wallet</h3>
            </MenuItem>
            <MenuItem>
                <img src={sampleIcn}/>
                <h3>Analysis</h3>
            </MenuItem>
            <MenuItem>
                <img src={sampleIcn}/>
                <h3>History</h3>
            </MenuItem>
            <MenuItem>
                <img src={sampleIcn}/>
                <h3>Products</h3>
            </MenuItem>
            <MenuItem>
                <img src={sampleIcn}/>
                <h3>Merchant</h3>
            </MenuItem>
            <MenuItem>
                <img src={sampleIcn}/>
                <h3>Settings</h3>
            </MenuItem>
        </Menu>
    </Container>
  )
}

export default Sidebar