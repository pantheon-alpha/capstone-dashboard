import React from 'react'
import styled from 'styled-components'
import avatar from '../../images/FarmProfilePictureTwo.svg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding-top: 10px;
    background: ${p=> p.theme.bgSecondary};
    border-top: 0.5px solid rgba(191, 191, 191, 0.5);
    width: 100%;

    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll; 

    ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
    }
    
`

const FarmList = styled.div`
    position: relative;
    
    height: 40vh;
`

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    //border-top: 0.5px solid rgba(191, 191, 191, 0.5);
    margin-top: 0rem;
    z-index: 99;
    /* height: 50vh; */
    overflow-y: visible;

    th {
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 18px;
        color: ${p=> p.theme.textPrimary};
        padding: 1rem;
        text-align: left;
    }

    tr{
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 0rem 0rem 1rem 1rem;

        #details{
            display: flex;
            flex-direction: column;
            //align-items: center;
            justify-content: center;
            padding-left: 20px;
            padding-bottom: 10px;
            


            #username{
                font-size: 14px;
                font-weight: 500;
            }

            #mail{
                font-size: 8px;
                font-weight: 300;
                color: rgba(191, 191, 191, 0.5);
            }
        }

        #profit{
            color: ${p=> p.theme.FNGreen};
        }
        

    }

    td {
        color: ${p=> p.theme.textPrimary};
    }
`
const ProfileImg = styled.img`
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    margin-bottom: 0;
`
const Title = styled.h2`
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    color: ${p=> p.theme.textPrimary};
    padding-left: 20px;
    padding-bottom: 20px;

`
//left padding: 20px;

const SubFarmers = () => {

  return (
    <Container > 

        <FarmList>
            <Table>
                <tbody>
                    <Title>In this community</Title>
                    <tr>
                        <td><ProfileImg src={avatar}/></td>
                        <td id='details'>
                            <td id='username'>Acharya Raje</td>
                            <td id='mail'>acharya.raje@gmail.com</td>
                        </td>
                    </tr>
                    <tr>
                        <td><ProfileImg src={avatar}/></td>
                        <td id='details'>
                            <td id='username'>Soumya Agrawal</td>
                            <td id='mail'>soumya.agrawal@gmail.com</td>
                        </td>
                    </tr>
                    <tr>
                        <td><ProfileImg src={avatar}/></td>
                        <td id='details'>
                            <td id='username'>Sanket Mittal</td>
                            <td id='mail'>sanket.mittal@gmail.com</td>
                        </td>
                    </tr>
                    <tr>
                        <td><ProfileImg src={avatar}/></td>
                        <td id='details'>
                            <td id='username'>Sakshi Agrawal</td>
                            <td id='mail'>sakshi.agrawal@gmail.com</td>
                        </td>
                    </tr>
                    <tr>
                        <td><ProfileImg src={avatar}/></td>
                        <td id='details'>
                            <td id='username'>Aditya Vikram Sreejith</td>
                            <td id='mail'>adi.vikky@gmail.com</td>
                        </td>
                    </tr>
                    <tr>
                        <td><ProfileImg src={avatar}/></td>
                        <td id='details'>
                            <td id='username'>Acharya Raje</td>
                            <td id='mail'>acharya.raje@gmail.com</td>
                        </td>
                    </tr>
                    <tr>
                        <td><ProfileImg src={avatar}/></td>
                        <td id='details'>
                            <td id='username'>Acharya Raje</td>
                            <td id='mail'>acharya.raje@gmail.com</td>
                        </td>
                    </tr>
                    <tr>
                        <td><ProfileImg src={avatar}/></td>
                        <td id='details'>
                            <td id='username'>Acharya Raje</td>
                            <td id='mail'>acharya.raje@gmail.com</td>
                        </td>
                    </tr>
                    <tr>
                        <td><ProfileImg src={avatar}/></td>
                        <td id='details'>
                            <td id='username'>Acharya Raje</td>
                            <td id='mail'>acharya.raje@gmail.com</td>
                        </td>
                    </tr>
                    <tr>
                        <td><ProfileImg src={avatar}/></td>
                        <td id='details'>
                            <td id='username'>Acharya Raje</td>
                            <td id='mail'>acharya.raje@gmail.com</td>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </FarmList>
        
    </Container>
  )
}

export default SubFarmers
