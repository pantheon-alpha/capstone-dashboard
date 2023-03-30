import React from 'react'
import { CiSearch } from "react-icons/ci"
import Layout from "../components/layout"
import Seo from "../components/seo"
import styled from 'styled-components'


import { ResponsiveBar } from '@nivo/bar'
import { ResponsivePie } from '@nivo/pie'
import { ResponsiveLine } from '@nivo/line'
import { ResponsiveAreaBump } from '@nivo/bump'

const data = [
  {
    day: "Monday",
    degress: 59
  },
  {
    day: "Tuesday",
    degress: 61
  },
  {
    day: "Wednesday",
    degress: 55
  },
  {
    day: "Thursday",
    degress: 78
  },
  {
    day: "Friday",
    degress: 71
  },
  {
    day: "Saturday",
    degress: 56
  },
  {
    day: "Sunday",
    degress: 67
  }
];

const pieData = [
    {
      id: "java",
      label: "java",
      value: 195,
      color: "hsl(90, 70%, 50%)"
    },
    {
      id: "erlang",
      label: "erlang",
      value: 419,
      color: "hsl(56, 70%, 50%)"
    },
    {
      id: "ruby",
      label: "ruby",
      value: 407,
      color: "hsl(103, 70%, 50%)"
    },
    {
      id: "haskell",
      label: "haskell",
      value: 474,
      color: "hsl(186, 70%, 50%)"
    },
    {
      id: "go",
      label: "go",
      value: 71,
      color: "hsl(104, 70%, 50%)"
    }
  ];

const bumpData = [
    {
      "id": "JavaScript",
      "data": [
        {
          "x": 2000,
          "y": 22
        },
        {
          "x": 2001,
          "y": 24
        },
        {
          "x": 2002,
          "y": 25
        },
        {
          "x": 2003,
          "y": 16
        },
        {
          "x": 2004,
          "y": 18
        },
        {
          "x": 2005,
          "y": 13
        }
      ]
    },
    {
      "id": "ReasonML",
      "data": [
        {
          "x": 2000,
          "y": 21
        },
        {
          "x": 2001,
          "y": 16
        },
        {
          "x": 2002,
          "y": 13
        },
        {
          "x": 2003,
          "y": 10
        },
        {
          "x": 2004,
          "y": 27
        },
        {
          "x": 2005,
          "y": 26
        }
      ]
    },
    {
      "id": "TypeScript",
      "data": [
        {
          "x": 2000,
          "y": 21
        },
        {
          "x": 2001,
          "y": 14
        },
        {
          "x": 2002,
          "y": 26
        },
        {
          "x": 2003,
          "y": 25
        },
        {
          "x": 2004,
          "y": 15
        },
        {
          "x": 2005,
          "y": 16
        }
      ]
    },
    {
      "id": "Elm",
      "data": [
        {
          "x": 2000,
          "y": 29
        },
        {
          "x": 2001,
          "y": 24
        },
        {
          "x": 2002,
          "y": 11
        },
        {
          "x": 2003,
          "y": 10
        },
        {
          "x": 2004,
          "y": 22
        },
        {
          "x": 2005,
          "y": 19
        }
      ]
    },
    {
      "id": "CoffeeScript",
      "data": [
        {
          "x": 2000,
          "y": 21
        },
        {
          "x": 2001,
          "y": 21
        },
        {
          "x": 2002,
          "y": 13
        },
        {
          "x": 2003,
          "y": 24
        },
        {
          "x": 2004,
          "y": 17
        },
        {
          "x": 2005,
          "y": 12
        }
      ]
    }
  ]

const lineData = [
    {
      "id": "japan",
      "color": "hsl(159, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 162
        },
        {
          "x": "helicopter",
          "y": 250
        },
        {
          "x": "boat",
          "y": 125
        },
        {
          "x": "train",
          "y": 68
        },
        {
          "x": "subway",
          "y": 106
        },
        {
          "x": "bus",
          "y": 131
        },
        {
          "x": "car",
          "y": 218
        },
        {
          "x": "moto",
          "y": 292
        },
        {
          "x": "bicycle",
          "y": 142
        },
        {
          "x": "horse",
          "y": 91
        },
        {
          "x": "skateboard",
          "y": 99
        },
        {
          "x": "others",
          "y": 146
        }
      ]
    },
    {
      "id": "france",
      "color": "hsl(259, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 79
        },
        {
          "x": "helicopter",
          "y": 229
        },
        {
          "x": "boat",
          "y": 144
        },
        {
          "x": "train",
          "y": 293
        },
        {
          "x": "subway",
          "y": 246
        },
        {
          "x": "bus",
          "y": 187
        },
        {
          "x": "car",
          "y": 38
        },
        {
          "x": "moto",
          "y": 137
        },
        {
          "x": "bicycle",
          "y": 58
        },
        {
          "x": "horse",
          "y": 295
        },
        {
          "x": "skateboard",
          "y": 230
        },
        {
          "x": "others",
          "y": 56
        }
      ]
    },
    {
      "id": "us",
      "color": "hsl(234, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 111
        },
        {
          "x": "helicopter",
          "y": 63
        },
        {
          "x": "boat",
          "y": 91
        },
        {
          "x": "train",
          "y": 12
        },
        {
          "x": "subway",
          "y": 1
        },
        {
          "x": "bus",
          "y": 238
        },
        {
          "x": "car",
          "y": 197
        },
        {
          "x": "moto",
          "y": 201
        },
        {
          "x": "bicycle",
          "y": 197
        },
        {
          "x": "horse",
          "y": 182
        },
        {
          "x": "skateboard",
          "y": 106
        },
        {
          "x": "others",
          "y": 136
        }
      ]
    },
    {
      "id": "germany",
      "color": "hsl(4, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 69
        },
        {
          "x": "helicopter",
          "y": 91
        },
        {
          "x": "boat",
          "y": 199
        },
        {
          "x": "train",
          "y": 154
        },
        {
          "x": "subway",
          "y": 47
        },
        {
          "x": "bus",
          "y": 153
        },
        {
          "x": "car",
          "y": 96
        },
        {
          "x": "moto",
          "y": 184
        },
        {
          "x": "bicycle",
          "y": 160
        },
        {
          "x": "horse",
          "y": 211
        },
        {
          "x": "skateboard",
          "y": 81
        },
        {
          "x": "others",
          "y": 78
        }
      ]
    },
    {
      "id": "norway",
      "color": "hsl(86, 70%, 50%)",
      "data": [
        {
          "x": "plane",
          "y": 8
        },
        {
          "x": "helicopter",
          "y": 203
        },
        {
          "x": "boat",
          "y": 12
        },
        {
          "x": "train",
          "y": 189
        },
        {
          "x": "subway",
          "y": 188
        },
        {
          "x": "bus",
          "y": 215
        },
        {
          "x": "car",
          "y": 219
        },
        {
          "x": "moto",
          "y": 1
        },
        {
          "x": "bicycle",
          "y": 69
        },
        {
          "x": "horse",
          "y": 186
        },
        {
          "x": "skateboard",
          "y": 16
        },
        {
          "x": "others",
          "y": 159
        }
      ]
    }
  ]

const Container = styled.section`
    background-color: ${p=> p.theme.primaryBg};
    flex: 3;
    padding: 2rem;
    margin-left: 20vw;
    margin-right: 18vw;
    height: 100vh;
    
    //border: 2px solid red;
`
const Header = styled.div`
    padding: 1rem 0rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    //margin-bottom: 3rem;
`
const Title = styled.h3`

    font-style: normal;
    font-weight: 600;
    font-size: 26px;
    line-height: 39px;
    color: ${p=>p.theme.textPrimary};
`
const SearchBar = styled.div`

    display: flex;
    align-items: center;


    input {
        padding: 0 0 0 .3rem;
        border: none;
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 22px;
        background-color: transparent;

        color: ${p=> p.theme.textPrimary};
        opacity: .5;
    }
`
const PieContainer = styled.div`
    width: 100%;
    height: 400px;
    background-color: transparent;
    margin: 0;

`

const SearchIcn = styled(CiSearch)`
    color: ${p=> p.theme.textPrimary};
    opacity: .5;
`

const ChartsTest = () => (
    <Layout>
        <Container>
            <Header>
                <Title>Charts Test</Title>
                <SearchBar>
                    <SearchIcn />
                    <input type="text" placeholder="Search" />
                </SearchBar>
            </Header>
            <ResponsiveBar
                height={200}
                data={data}
                keys={['degress']}
                indexBy="day"
                margin={{ top: 50, right: 130, bottom: 0, left: 60 }}
                padding={0.3}
                valueScale={{ type: 'linear' }}
                indexScale={{ type: 'band', round: true }}
                height={400}
                colors={{ scheme: 'nivo' }}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Day',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Degrees',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                labelSkipWidth={12}
                labelSkipHeight={12}
                labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
            
            <PieContainer>
                <ResponsivePie 
                    height={400}
                    data={pieData}
                    margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
                    innerRadius={0.5}
                    padAngle={0.7}
                    cornerRadius={3}
                    colors={{ scheme: 'nivo' }}
                    borderWidth={1}
                    borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
                    radialLabelsSkipAngle={10}
                    radialLabelsTextXOffset={6}
                    radialLabelsTextColor="#333333"
                    radialLabelsLinkOffset={0}
                    radialLabelsLinkDiagonalLength={16}
                    radialLabelsLinkHorizontalLength={24}
                    radialLabelsLinkStrokeWidth={1}
                    radialLabelsLinkColor={{ from: 'color' }}
                    slicesLabelsSkipAngle={10}
                    slicesLabelsTextColor="#333333"
                    animate={true}
                    motionStiffness={90}
                    motionDamping={15}
                />
            </PieContainer>

            <ResponsiveAreaBump
                height={200}
                data={bumpData}
                margin={{ top: 40, right: 100, bottom: 40, left: 60 }}
                spacing={8}
                colors={{ scheme: 'nivo' }}
                blendMode="multiply"
                startLabel="id"
                startLabelPadding={16}
                startLabelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendPosition: 'middle',
                    legendOffset: 36
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
                enableGridX={false}
                enableGridY={true}
                enablePoints={false}
                enableArea={true}
                areaOpacity={1}
                areaBlendMode="normal"
                isInteractive={true}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />

            <ResponsiveLine
                data={lineData}
                height={300}
                margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
                xScale={{ type: 'point' }}
                yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                yFormat=" >-.2f"
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    orient: 'bottom',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'transportation',
                    legendOffset: 36,
                    legendPosition: 'middle'
                }}
                axisLeft={{
                    orient: 'left',
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'count',
                    legendOffset: -40,
                    legendPosition: 'middle'
                }}
                colors={{ scheme: 'nivo' }}
                pointSize={10}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={2}
                pointBorderColor={{ from: 'serieColor' }}
                pointLabel="y"
                pointLabelYOffset={-12}
                useMesh={true}
                enableSlices="x"
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
            
                
        </Container>
    </Layout>
)

export default ChartsTest