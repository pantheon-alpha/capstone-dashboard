import React from 'react'
import styled from 'styled-components'
import Trend from './../../images/example.png'
import { useStaticQuery,graphql } from 'gatsby'

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

        .name{
            width: 10rem;
            text-align: left;
        }

        .number{
            width: 5rem;
            text-align: center;
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
        align-items: center;
        text-align: center;


        #trend{
            width: 1.5rem;
            height: 1.5rem; 
        }
    }
`

const createData = (id, name, city, price, size) => {
    return { id, name, city, price, size };
    }



const FarmList = () => {
    
    const data = useStaticQuery(query)
    const farms = data.allFarm.nodes
    console.log(farms)

    const rows = farms.map(farm => {
        return createData(farm.id, farm.name, farm.city, farm.price, farm.size)
    })


  return (
    <Container>
        <Table>
            <thead>
                <tr id="header">
                    <th className="number"></th>
                    <th className="name">Name</th>
                    <th className="name">City</th>
                    <th className="number">Price</th>
                    <th className="number">Size (Acres)</th>
                </tr>
            </thead>
            <tbody>
                {rows.map(row => (
                    <tr key={row.id}>
                        <td className='number'>{row.id}</td>
                        <td className="name">{row.name}</td>
                        <td className="name">{row.city}</td>
                        <td className="number">{row.price}</td>
                        <td className="number">{row.size}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
        
    </Container>
  )
}

export default FarmList

export const query = graphql`
    query {
        allFarm (sort: {order: ASC, fields: id}){
            nodes {
              id
              name
              city
              size
              price
            }
          }
    }
`