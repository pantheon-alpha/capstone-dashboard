import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${p=>p.theme.secondaryBg};
  width: 292px;
  height: 270px;
  border-radius: 5px;
  font-weight: 500;

  .tabslist{
    display: flex;
    padding: 0px 0px 0px 15px;
    padding-top: 20px;
    border-bottom: .5px solid rgba(64, 64, 64, 50%);


    .tabhead{
      padding:7px 7px 0px 7px;
      display: flex;
      flex-direction: column;
      align-items:center;
      font-size: 10px;
      cursor: pointer;
      font-weight: 600;
      color: ${p=>p.theme.textPrimary};

      .indicator{
        height:2px;
        width:38px;
        background-color: ${p=>p.theme.FNGreen};
        margin-top: 5px;
      }
    }
  }
  .tabcontent{
    margin: 18px 15px 0px 15px;
    font-weight:400;


    .quanpri{
      display: flex;
      justify-content: space-between;
      margin: 9px 0px;
      font-size: 12px;
    }

    input, input:focus, textarea:focus, select:focus {
      width: 100px;
      background-color: #DAF6E6;
      border: 0px solid;
      outline: none;
      text-align: right;
      color: ${p=>p.theme.FNGreen};
      font-weight: 500;
    }
    
  }
  .top-con{
    height:40px;
    padding: 15px 0px 0px 15px;

    .frm-nam{
      font-size: 16px;
      padding-bottom: 6px;
      font-weight: 500;
      color: ${p=>p.theme.textPrimary};
    }

    .prc{
      font-size: 10px;
      font-weight: 600;
      color: ${p=>p.theme.textPrimary};
    }
  }

  .btn-con{
    margin-top: 40px;
    border-top: .5px solid rgba(64, 64, 64, 50%);


    .balance{
      font-size: 8px;
      margin: 8px 0px 4px 15px;
      font-weight:400;
      color: ${p=>p.theme.textPrimary};
    }

    button{
      background-color: ${p=>p.theme.FNGreen};
    }

    .btn{
      padding-left: 15px;
      outline: none;
      border: none;
      text-decoration: none;
    } 
  }
`

const Button = styled.button`
  height: 30px;
  width: 260px;
  cursor: pointer;
  border: 0px solid red;
  color: ${p=>p.theme.primaryBg};
  border-radius: 2px; 
  align-items: center;
  justify-content: center;
  margin: 4px 0px 0px 15px;
`

function Buyselltab() {
  const[index,setIndex] = useState(0);
  return (
    <Container>
      <div className="top-con">
        <div className="frm-nam">Sridevi Farms</div>
        <div className="prc">₹2300.06 (+2.87%)</div>
      </div>
      <div className="tabslist">
        <div className="tabhead" onClick={()=>{setIndex(0)}}>BUY <div className="indicator" /*hidden={index !== 0}*/></div></div>
        <div className="tabhead" onClick={()=>{setIndex(1)}}>SELL <div className="indicator" /*hidden={index !== 1}*/></div></div>
      </div>
      <div className="tabcontent" hidden={index !== 0}>
        <div className="quanpri">Quantity<input className="input" placeholder="₹" type="tel" name="quantity" /></div>
        <div className="quanpri">Prime Limit<input className="input" placeholder="₹" type="tel" name="primelimit" /></div>
      </div>
      <div className="tabcontent" hidden={index !== 1}>
        <div className="quanpri">Qselltity<input className="input" placeholder="₹" type="tel" name="quantity" /></div>
        <div className="quanpri">Pselle Limit<input className="input" placeholder="₹" type="tel" name="pricelimit" /></div>
      </div>
      <div className="btn-con">
        <div className="balance">Balance: ₹10,145</div>
        <Button>BUY</Button>
        {/* <div className="btn"><button>BUY</button></div> */}
      </div>
    </Container>
  ); 
}
export default Buyselltab