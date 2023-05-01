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
    font-size: 18px;   
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
        question: 'First question',
        answer: 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidun',
    },
    {
        question: 'Second question',
        answer: 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidun',
    },
    {
        question: 'Third question',
        answer: 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidun',
    },
    {
        question: 'Fourth question',
        answer: 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidun',
    },
    {
        question: 'Fifth question',
        answer: 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidun',
    },
    {
        question: 'Sixth question',
        answer: 
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam tincidun',
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