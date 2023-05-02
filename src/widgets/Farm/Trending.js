import React from 'react'
import styled from 'styled-components'
import Trend from './../../images/example.png'
import { Link } from 'gatsby'


const Container = styled.div`
    background-color: ${p=> p.theme.primaryBg};
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    padding: 1rem 0rem;

    margin-top: 0;

    //border: 2px solid red;
`

const StyledLink = styled(Link)`

    text-decoration: none;
    color: ${p=> p.theme.textPrimary};

`

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    //border-top: 1px solid #e0e0e0;
    //margin-top: 1rem;
    margin-top: 0;
    padding: 0;

    th {
        
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 15px;
        color: ${p=> p.theme.textPrimary};
        padding: 0 1rem;
        //border: 2px solid red;
        width: 8rem;

    }

    #header{
        display: flex;
        flex-direction: row;
        align-items: left;
        justify-content: space-between;
        //border: 2px solid red;
        padding: 0 1rem;
        background-color: ${p=> p.theme.primaryBg};
        height: .5rem;
        margin: 0;
        
        .name{
            width: 10rem;
        }

        .number{
            width: 5rem;
        }

    }

    tr{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
        
        #loss{
            color: ${p=> p.theme.FNRed};
        }

        #profit{
            color: ${p=> p.theme.FNGreen};
        }

        background-color: ${p=> p.theme.secondaryBg};
        margin: 1rem 0;
        border-radius: 1rem;

        &:hover{
            text-decoration: none;
            background-color: rgba(102,217,152,0.25);

        }

        

        .name{
            width: 10rem;
        }

        .number{
            width: 5rem;
        }



    }

    td {
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 22.5px;
        color: ${p=> p.theme.textPrimary};
        padding: 1rem;
        //border: 2px solid red;
        align-items: left;


        #trend{
            width: 1.5rem;
            height: 1.5rem; 
        }
    }
`

function createData(id, farmName, trend, price, profit, loss) {
    return { id,farmName, trend, price, profit, loss };
  }

const rows = [
  createData(1,'Sridevi Farms', {Trend}, 2300, 200, 400),
  createData(2,'Pavan Farms', {Trend}, 2300, 200, 400),
  createData(3,'Sridevi Farms', {Trend}, 2300, 200, 400),
  createData(4,'Sridevi Farms', {Trend}, 2300, 200, 400),
];


const Trending = () => {
  return (
    <Container>
        <Table>
            <tr id='header'>
                <th className='number'></th>
                <th className='name' align='left'id='farmName'>FARM</th>
                <th className='number'></th>
                <th className='number' align='center'>PRICE</th>
                <th className='number' align='center'>LOREM</th>
                <th className='number' align='center'>IPSUM</th>
            </tr>
            {rows.map((row) => (
                <StyledLink to='/test'>
                    <tr key={row.id}>
                        <td align='left' className='number'>{row.id}</td>
                        <td align='left' className='name'>{row.farmName}</td>
                        <td align='left' className='number' id='trend'>{row.id}</td>
                        <td align='center' className='number'>{row.price}</td>
                        <td align='center' id="profit" className='number'>{row.profit}</td>
                        <td align='center' id="loss" className='number'>{row.loss}</td>
                    </tr>
                </StyledLink>
            ))}
            
        </Table>
    </Container>
  )
}

export default Trending