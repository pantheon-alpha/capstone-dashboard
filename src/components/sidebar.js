import React from 'react'
import styled from 'styled-components'
import Finseed from '../images/Finseed.svg'
import sampleIcn from '../images/gatsby-icon.png'
import { useState } from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'


const Container = styled.div`
    background-color: ${p=> p.theme.secondaryBg};
    height: 100vh;
    width: 20vw;
    flex: 1;
    overflow-y: none;
    position: fixed;
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
    a{
        text-decoration: none;
    }

    .active {
        margin: .2rem 2rem;
        padding: 1rem 1.35rem;
        background-color: ${p=> p.theme.FNGreen};
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: left;
        cursor: pointer;

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
            color: ${p=> p.theme.secondaryHeading};
        }
    }
`
const MenuItem = styled.div`
    margin: .2rem 2rem;
    padding: 1rem 1.35rem;
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: left;
    cursor: pointer;
    

    &:hover{
        //border: .5px solid black;
        background-color: ${p=> p.theme.FNGreen};

        h3{
            color: ${p=> p.theme.secondaryHeading};
        }
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
        color: ${p=> p.theme.textPrimary};
    }
`

const Sidebar = ({activeIndex}) => {

    const [active, setActive] = useState(activeIndex)

    const handleClick = (id) => {
        setActive(id)
        activeIndex = id
    }


    const menuItems = [
        {
            id: 0,
            title: 'Dashboard',
            icon: sampleIcn,
            link: '/'
        },
        {
            id: 1,
            title: 'Watchlist',
            icon: sampleIcn,
            link: '/watchlist'
        },
        {
            id: 2,
            title: 'Farms',
            icon: sampleIcn,
            link: '/farms'
        },
        {
            id: 3,
            title: 'Funds',
            icon: sampleIcn,
            link: '/funds'
        },
        {
            id: 4,
            title: 'Investments',
            icon: sampleIcn,
            link: '/investments'
        },
        {
            id: 5,
            title: 'Reports',
            icon: sampleIcn,
            link: '/reports'
        },
        {
            id: 6,
            title: 'Profile',
            icon: sampleIcn,
            link: '/profile'
        },
        {
            id: 7,
            title: 'Test', // tbc -> Help and Support
            icon: sampleIcn,
            link: '/test'
        },
        {
            id: 8,
            title: 'Settings',
            icon: sampleIcn,
            link: '/settings'
        },
    ]

  return (
    <Container>
        <Header>
            <Logo src={Finseed}/>
            <Title>FINSEED</Title>
        </Header>
        <Menu>
            {menuItems.map((item) => {
                return (
                    
                    <Link to={item.link} key={item.id} onClick={handleClick}>
                        {active === item.id ? (
                            <div className="active">
                                <img src={item.icon
                                } alt="icon"/>
                                <h3>{item.title}</h3>
                            </div>
                        ) : (
                            <MenuItem>
                                <img src={item.icon
                                } alt="icon"/>
                                <h3>{item.title}</h3>
                            </MenuItem>
                        )}
                    </Link>
                )
            })}
        </Menu>
    </Container>
  )
}

export default Sidebar

export const query = graphql`
    query {
        site {
            siteMetadata {
                siteUrl
            }
        }
    }
`