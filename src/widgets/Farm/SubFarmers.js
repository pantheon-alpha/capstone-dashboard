import React from 'react'
import styled from 'styled-components'
import avatar from '../../images/FarmProfilePictureTwo.svg'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding-top: 40px;
    background: ${p=> p.theme.bgSecondary};
    border-top: 0.5px solid rgba(191, 191, 191, 0.5);

    height: 45vh;
    -ms-overflow-style: none; /* for Internet Explorer, Edge */
    scrollbar-width: none; /* for Firefox */
    overflow-y: scroll; 

    ::-webkit-scrollbar {
    display: none; /* for Chrome, Safari, and Opera */
    }
    
`

const FarmList = styled.div`
    position: relative;
    
    height: 50vh;
`

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    //border-top: 0.5px solid rgba(191, 191, 191, 0.5);
    margin-top: 1rem;
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
        margin: 0px 0px 20px 20px;

        #details{
            display: flex;
            flex-direction: column;
            //align-items: center;
            justify-content: center;
            padding-left: 20px;
            padding-bottom: 10px;
            


            #username{
                font-size: 18px;
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
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    margin-bottom: 0;
`
//left padding: 20px;

const SubFarmers = () => {

  return (
    <Container className='con'> 

        <FarmList>
            <Table>
                <tbody>
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
