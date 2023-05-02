import React from 'react'
import styled from 'styled-components'
import {Line} from 'react-chartjs-2'
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler

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

// register chartjs plugins
ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Legend,
  Tooltip,
  Filler
)

// require cropData
const cropData = require('../../data/cropData.json')

// function that takes in a crop and returns the data for the crop
function getCropData(cropId) {
  const cropData = require('../../data/cropData.json')
  const cropLabels = []
  const cropDataArray = []

  cropData.forEach((crop)=>{
    //return crop
    if(crop.cid == cropId) 
      cropDataArray.push(crop)
  })

  const cropYears = cropDataArray[0].prices
  let priceData = []

  let plotValues = []
  let plotLabels = []

  cropYears.forEach((year)=>{

    //console.log('year ' + year.year)
    priceData = year.data
    //console.log('priceData ' + typeof(priceData[0]))

    priceData.forEach((price)=>{

      
      var label = (price.Month).slice(0,3)
      label = label.toUpperCase()
      label = label +" "+ year.year
      //console.log(label)

      plotLabels.push(label)
      plotValues.push(price.Price)
      //console.log(price.Month, year.year, price.Price)
    })

  })
  
  return [plotLabels, plotValues]
}




function Linechart({cropId}) {

  console.log('ID' + typeof(cropId))

  const [plotLabels, plotValues] = getCropData(cropId)


  const data = {
    labels: plotLabels,
    datasets: [{
      label: 'Price in ₹',
      data: plotValues,  //13 points and 200 final
      //backgroundColor: 'red',
      borderColor: '#66D998',
      pointBorderColor: 'black',
      pointBackgroundColor: 'white',
      pointBorderWidth: .5,
      fill: true,
      pointHoverBorderWidth: 2,
      pointHoverBorderColor: 'black',
      pointHoverBackgroundColor: 'white',
      pointHoverRadius: 2,
      pointRadius: 2,
      tension: 0.2,
      pointStyle: 'circle',
      borderWidth: 1,
    }]
  }

  const options = {
    responsive: true,
    plugins: {
      legend: false,
    },
    spanGaps: true,
    showLine: true,
    
    scales: {
      x:{
        grid: {
          display: true,
        },
        ticks:{
          autoSkip: true,
          maxTicksLimit: 12,
        },
        border: {
          dash: [10],
        },
        title: {
          display: false,
          text: 'Month',
          color: 'black',
          font: {
            size: 15,
            weight: 'bold',
            family: 'Roboto',
          }
        },

      },
      y: {
        type: 'linear',
        ticks: {
          callback: (value) => '₹' + value,
        },
        grid: {
          display: false,
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