import React from 'react'
import styled from 'styled-components'
import {Pie} from 'react-chartjs-2'

//INSTALL CHARTJS npm i react-chartjs-2

import {
  Chart as ChartJS,
  ArcElement,
  Legend,
  Tooltip

} from 'chart.js';

const Container = styled.div`
  display: flex;
  width: 250px;
  padding-top: 30px;

`

const Legendname = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

`
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  margin-bottom: 10px;
`
const Box = styled.div`
  width: 15px;
  Height: 15px;
  border-radius: 4px;
  margin: 0px 10px 0px 40px;
  background-color: ${p=> p.theme.FNGreen};
`


ChartJS.register(
  ArcElement,
  Legend,
  Tooltip
);

function Piechart() {
  const data = {
    labels: ['One', 'Two', 'Three'],
    datasets: [
      {
        data: [3, 6, 19],
        backgroundColor: ['#2CB065', '#175E36', '#66D998'],
      }
    ]
  };

  const options = {
    plugins: {
      legend: false,
    },
  }
  return (
    <Container>
      <Pie
        data={data}
        options={options}
      ></Pie>
      <Legendname>
        <Wrapper><Box />Equipment</Wrapper>
        <Wrapper><Box />Fertilizers</Wrapper>
        <Wrapper><Box />Labour</Wrapper>
      </Legendname>
    </Container>
  )
}

export default Piechart