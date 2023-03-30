import React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/layout";
import styled from "styled-components";

import { ResponsiveBar } from "@nivo/bar";

const Container = styled.div`
    background-color: ${p=> p.theme.primaryBg};
    flex: 3;
    padding: 2rem;
    margin-left: 20vw;
    margin-right: 18vw;
    height: 100vh;
    
`;




const ApiTests = () => {

    const [fetchedData, setFetchedData] = useState(0)

    useEffect(() => {
        fetch('https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key=579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b&format=json&filters%5Bstate%5D=Karnataka')
        .then(
            response => {
                return response.json()
            }).then( json =>
                {
                    console.log(json.records)
                    setFetchedData(json.records)
                })
        }, [])

    const makeData = (fetchedData) =>  {
        const data = []
        for (let i = 0; i < fetchedData.length; i++) {
            data.push({
                state: fetchedData[i].state,
                district: fetchedData[i].district,
                market: fetchedData[i].market,
                commodity: fetchedData[i].commodity,
                variety: fetchedData[i].variety,
                arrival_date: fetchedData[i].arrival_date,
                min_price: fetchedData[i].min_price,
                max_price: fetchedData[i].max_price,
                modal_price: fetchedData[i].modal_price,
            })
        }
        console.log('data = ', data)
        return data
    }

    const data = makeData(fetchedData)


    return (
        <Layout>
            <Container>
                <h1>API Tests</h1>
                <ResponsiveBar
                    data={data}
                    keys={['modal_price', 'min_price', 'max_price']}
                    indexBy="commodity"
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
                        legend: 'Commodity',
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
            
            </Container>
        </Layout>
    )
}

export default ApiTests