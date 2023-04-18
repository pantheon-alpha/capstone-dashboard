import React from 'react'
import styled from 'styled-components'

import subfarmavatar from '../images/FarmProfilePictureTwo.svg'

const Container = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 1rem 0rem;
    background: ${p=> p.theme.bgSecondary};
    border-top: 0.5px solid rgba(191, 191, 191, 0.5);
`

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    //border-top: 0.5px solid rgba(191, 191, 191, 0.5);
    margin-top: 1rem;

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
        justify-content: space-between;

        #details{
            display: flex;
            flex-direction: column;
            align-items: start;

            .username{
                font-size: 45px;
                font-weight: 500;
            }
        }

        #profit{
            color: ${p=> p.theme.FNGreen};
        }
        

    }

    td {
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 22.5px;
        color: ${p=> p.theme.textPrimary};
        padding: 1rem 0rem 1rem 0rem;
        text-align: left;
    }
`
const ProfileImg = styled.img`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    margin-bottom: 1rem;
`
//left padding: 20px;


export const SubFarmers = () => {
  return (
    <Container>        
        <Table>
            <tbody>
                <tr>
                    <td><ProfileImg src={subfarmavatar}/></td>
                    <td id='details'>
                        <td classname='username'>Acharya Raje</td>
                        <td className='mail'>acharya.raje@gmail.com</td>
                    </td>
                </tr>
                <tr>
                    <td>Pavan Farms</td>
                    <td id='profit'>₹15,000</td>
                </tr>
                <tr>
                    <td>Pavan Farms</td>
                    <td id='loss'>-₹15,000</td>
                </tr>
                <tr>
                    <td>Pavan Farms</td>
                    <td id='profit'>₹15,000</td>
                </tr>
            </tbody>
        </Table>
    </Container>
  )
}
