import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: auto;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 1rem 0rem;
    background: ${p=> p.theme.bgSecondary};
`
const Title = styled.h1`
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    color: ${p=> p.theme.textHeading};
`

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    //border: 1px solid #e0e0e0;
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

        #loss{
            color: ${p=> p.theme.FNRed};
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

export const Wallet = () => {
  return (
    <Container>
        <Title>Wallet</Title>
        
        <Table>
            <tbody>
                <tr>
                    <td>Pavan Farms</td>
                    <td id='loss'>-₹15,000</td>
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
