import React from 'react'
import styled from 'styled-components'
import Trend from './../../images/example.png'
import { useStaticQuery,graphql, Link } from 'gatsby'

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

        &:hover{
            background-color: #66D998;
        }

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

const StyledLink = styled(Link)`
    text-decoration: none;
`



const FarmWatchlist = () => {

    const data = useStaticQuery(query)
    const rows = data.allFarm.edges.map((edge, index) => ({
        id: edge.node.id,
        index: index + 1,
        name: edge.node.name,
        city: edge.node.city,
        price: edge.node.price,
        size: edge.node.size,
        trend: edge.node.trend,
    }))
    
   


  return (
    <Container>
        <Table>
            <thead>
                <tr id="header">
                    <th className="name">FARM</th>
                    <th className="name">MARKET PRICE</th>
                    <th className="number">LOW</th>
                    <th className="number">HIGH</th>
                </tr>
            </thead>
            <tbody>
                {rows.map(row => (
                    <StyledLink to='/test'>
                        <tr key={row.id}>
                            <td className="name">{row.name}</td>
                            <td className="name">{row.price}</td>
                            <td className="number">200</td>
                            <td className="number">500</td>
                        </tr>
                    </StyledLink>
                ))}
            </tbody>
        </Table>
        
    </Container>
  )
}

export default FarmWatchlist

export const query = graphql`
    query {
        allFarm {
            edges {
              node {
                id
                name
                price
                size
                city
              }
            }
          }
    }
`