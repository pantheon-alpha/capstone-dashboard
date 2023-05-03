import React, { useState } from 'react'
import styled from 'styled-components'


const Body = styled.div`
    flex: 5;
    display: flex;
    align-items: left;
    justify-content: top;
    flex-direction: column;
    padding: 1rem 0rem;
    margin-top: 1rem;

    .answer{
        font-size: 12px;
        padding: 0px 15px;
        padding-left: 2.5rem;
        max-height: 0;
        height: auto;
        overflow: hidden;
        transition: all 0.5s cubic-bezier(0,1,0,1);
    }


    .answer.show{
        max-height: 9999px;
        height: auto;
        transition: all 0.5s cubic-bezier(0,1,0,1);
    }

`

const Title = styled.div`

    display: flex;
    align-items: top;
    justify-content: top;

    
    h3 {
        padding: 0 2.5rem;
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 30px;;
        color: ${p=> p.theme.textPrimary};

    }

    margin-bottom: 1rem;

`

const Accordion = styled.div``


const Question = styled.div`

    display: flex;
    cursor: pointer;
    padding: 20px 15px;
    align-items: center;



    h2{
    font-style: normal;
    font-weight: 400;
    font-size: 16px;   
    }
`

const Item = styled.div``


const Plus = styled.span`
    color: ${p=> p.theme.FNGreen};
    margin-right: 1rem;
    transition: all 0.5s cubic-bezier(0,1,0,1);
`
const data = [
    {
        question: 'How to Invest?',
        answer: 
            'As an investor once the account verification is all complete investing in a farm is as simple as selecting the farm and crop of desire. The quantity in shares or amount to be invested in the farm and making the payment.',
    },
    {
        question: 'How to get the accounts verified',
        answer: 
            'All accounts are verified with the filing of Know Your Customer (KYC) forms with these details Finseed is able to verify the user to be allowed to invest'
    },
    {
        question: 'Trouble Registering?',
        answer: 
            'Any trouble in registering helpline number is given below, please contact the administrator we will be at your help as soon as possible.',
    },
    {
        question: 'How to add multiple farms and crops?',
        answer: 
            'A farmer can hold multiple farms and crops and add these separately with the help of the add button given in the farms section and filing the details.',
    },
    {
        question: 'How to track crop prices?',
        answer: 
            'Farms section displays the prices of crop and farm value in a graph, showing the prices over the past months and years.',
    },
    {
        question: 'What are the risks of investing on finseed?',
        answer: 
            'Similar to any financial investment finseed consists of risks in agriculture which largely is failed crop especially during a unforeseen climatic calamity. Finseed provides risk assessment by rating the farms better which have less chance of a crop failure.',
    },
]


function FAQ() {

    const [active, setActive] = useState(null)
    
    
    const toggle = (index) => {
        if (active === index) {
            return setActive(null)
        }
        setActive(index)
    }
    
  return (
        <Body>
            <Title>
                <h3>FAQ</h3>
            </Title>
            <Accordion>
                {data.map((item, index) => (
                    <Item className='item'>
                        <Question onClick={() => toggle(index)}>
                            <Plus>{active === index ? '-' : '+'}</Plus>
                            <h2>{item.question}</h2>
                        </Question>
                        <div className={active === index ? 'answer show' : 'answer'}>{item.answer}</div>
                    </Item>
                ))}
            </Accordion>
        </Body>

  )
}

export default FAQ