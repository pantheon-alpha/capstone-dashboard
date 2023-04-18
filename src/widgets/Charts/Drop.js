import React from 'react'
import styled from 'styled-components'

const Container = styled.div`


  .drop{
    color: #8D9092;
    width: 80px;
    height: 20px;
    border-radius: 20px;
    font-weight: 500;
    font-size: 10px;
    border: 1px solid #D9D9D9;
    padding: 2px 13px;
    padding-right: 10px;
    cursor: pointer;



    .year{
      color: #8D9092;
      width: 80px;
      height: 20px;
      border-radius: 20px;

    }
  }
`

function Drop() {
  return (
    <Container>
      <select className='drop'>
        <option className='year' value="Yearly">Year</option>
        <option value="Monthly">Month</option>
        <option value="Five">5 Years</option>
      </select>
    </Container>
  )
}

export default Drop