import React from 'react'
import styled from 'styled-components'
import Trend from './../../images/example.png'


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

    }

    tr{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        border-bottom: 1px solid #404040;
        
        #loss{
            color: ${p=> p.theme.FNRed};
        }

        #profit{
            color: ${p=> p.theme.FNGreen};
        }

        background-color: ${p=> p.theme.primaryBg};
        margin: 1rem 0;

        .name{
            width: 10rem;
        }

        .number{
            width: 5rem;
        }
        #mainrow{
            display: flex;
            flex-direction: column;
            padding: 0rem 0 0.5rem 3rem;
            margin: 0;

            td{
                
            }
        }
        #pricerow{
            display: flex;
            flex-direction: column;
            padding: 0.5rem 3rem 0.5rem 0rem;
            margin: 0;

            td{
                
            }
        }
        .farmname{
            padding: 10px 0 6px 0;
            font-size: 20px;
            font-weight: 500;
            width: 10rem;
        }

        .farmtype{
            padding: 6px 0 10px 0;
            font-size: 16px;
            width: 5rem;
            font-weight: 500;
        }

        .mainprice{
            padding: 10px 0 6px 0;
            font-size: 22px;
            font-weight: 500;
            color: ${p=> p.theme.FNGreen};
        }

        .subprice{
            padding: 6px 0 10px 0;
            font-size: 16px;
            font-weight: 500;
        }



    }

    td {
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 22.5px;
        color: ${p=> p.theme.textPrimary};
        padding: 0;
     //border: 2px solid red;
        align-items: left;


        #trend{
            width: 1.5rem;
            height: 1.5rem; 
        }
    }
`

function createData(id, farmName, trend, price, profit, loss, category,secprice) {
    return { id,farmName, trend, price, profit, loss, category,secprice };
  }

const rows = [
  createData(1,'Sridevi Farms', {Trend}, 1573.46, 200, 400, 'Regular',10000),
  createData(1,'Sridevi Farms', {Trend}, 1573.46, 200, 400, 'Regular',10000),
  createData(1,'Sridevi Farms', {Trend}, 1573.46, 200, 400, 'Regular',10000),
  createData(1,'Sridevi Farms', {Trend}, 1573.46, 200, 400, 'Regular',10000),
  createData(1,'Sridevi Farms', {Trend}, 1573.46, 200, 400, 'Regular',10000),
  createData(1,'Sridevi Farms', {Trend}, 1573.46, 200, 400, 'Regular',10000),
  createData(1,'Sridevi Farms', {Trend}, 1573.46, 200, 400, 'Regular',10000),
  createData(1,'Sridevi Farms', {Trend}, 1573.46, 200, 400, 'Regular',10000),
  createData(1,'Sridevi Farms', {Trend}, 1573.46, 200, 400, 'Regular',10000),
];


const Trending = () => {
  return (
    <Container>
        <Table>
            {/* <tr id=''>
                <th className='number'></th>
                <th className='name' align='left'id='farmName'></th>
                <th className='number'></th>
                <th className='number' align='center'></th>
                <th className='number' align='center'></th>
                <th className='number' align='center'></th>
            </tr> */}
            {rows.map((row) => (
                <tr key={row.id}>
                    <td id='mainrow'>
                        <td align='left' className='farmname'>{row.farmName}</td>
                        <td align='left' className='farmtype'>{row.category}</td>
                    </td>
                    <td id='pricerow'>
                        <td align='center' className='mainprice'>{row.price}</td>
                        <td align='center' className='subprice'>({row.secprice})</td>
                    </td>
                </tr>
            ))}
            
        </Table>
    </Container>
  )
}

export default Trending