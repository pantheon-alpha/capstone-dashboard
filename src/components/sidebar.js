import React from 'react'
import styled from 'styled-components'
import Finseed from '../images/Finseed.svg'
import sampleIcn from '../images/gatsby-icon.png'
import { useState } from 'react'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'

import dashboard from '../images/Dashboard/Vector (9).svg'
import watchlist from '../images/Dashboard/material-symbols_list-alt-rounded.svg'
import farms from '../images/Dashboard/material-symbols_compost-rounded.svg'
import funds from '../images/Dashboard/material-symbols_account-balance-wallet.svg'
import investments from '../images/Dashboard/ic_baseline-work-history.svg'
import reports from '../images/Dashboard/material-symbols_lab-profile-rounded.svg'
import profile from '../images/Dashboard/fa-solid_user-circle.svg'
import help from '../images/Dashboard/material-symbols_help-rounded.svg'
import settings from '../images/Dashboard/material-symbols_settings-rounded.svg'


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
            //color: ${p=> p.theme.primaryBg};
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
    img{
        color: ${p=> p.theme.primaryBg};
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
    color: ${p=>p.theme.textPrimary};

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
        color: ${p=> p.theme.secondaryHeading};;
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
            icon: dashboard,
            link: '/'
        },
        {
            id: 1,
            title: 'Watchlist',
            icon: watchlist,
            link: '/watchlist'
        },
        {
            id: 2,
            title: 'Farms',
            icon: farms,
            link: '/farms'
        },
        {
            id: 3,
            title: 'Funds',
            icon: funds,
            link: '/funds'
        },
        {
            id: 4,
            title: 'Investments',
            icon: investments,
            link: '/investments'
        },
        {
            id: 5,
            title: 'Reports',
            icon: reports,
            link: '/reports'
        },
        {
            id: 6,
            title: 'Profile',
            icon: profile,
            link: '/profile'
        },
        {
            id: 7,
            title: 'Help & Support', // tbc -> Help and Support
            icon: help,
            link: '/h&s'
        },
        {
            id: 8,
            title: 'Settings',
            icon: settings,
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