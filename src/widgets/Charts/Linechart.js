import React from 'react'
import styled from 'styled-components'
import {Line} from 'react-chartjs-2'

//INSTALL npm i chart.js
//INSTALL CHARTJS npm i react-chartjs-2

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip

} from 'chart.js';
import Drop from './Drop.js';


const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 540px;
  height: 275px;


  .drop{
    margin-left: 450px
  }

`

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
)

function Linechart() {
  const data = {
    labels: ['JAN','FEB','MAR','APR','MAY','JUN',],
    datasets: [{
      label: 'Test week',
      data: [25,120,145,115,165,200],  //13 points and 200 final
      backgroundColor: 'white',
      borderColor: '#66D998',
      pointBorderColor: 'black',
      fill: true,
      radius: 3,
      pointStyle: 'circle',
      borderWidth: 2,
    }]
  }

  const options = {
    plugins: {
      legend: false,
    },
    scales: {
      x:{
        grid: {
          display: false,
        },
        ticks:{
          stepsize: 1,
        },

      },
      y: {
        min:0,
        max: 250,
        ticks: {
          callback: (value) => '₹' + value,
        },
        grid: {
          display: true,
        },
        border: {
          dash: [10],
        }
      }
    }
    
  }
  return (
    <Container>
      <Drop className='drop'/>
      <Line
        data = {data}
        options = {options}

      ></Line>
    </Container>
  )
}

export default Linechart