import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import Trend from '../images/example.png';

function createData(id, farmName, trend, price, profit, loss) {
    return { id,farmName, trend, price, profit, loss };
  }

const rows = [
  createData(1,'Sridevi Farms', {Trend}, 2300, 200, 400),
  createData(2,'Sridevi Farms', {Trend}, 2300, 200, 400),
  createData(3,'Sridevi Farms', {Trend}, 2300, 200, 400),
  createData(4,'Sridevi Farms', {Trend}, 2300, 200, 400),
];

const StyledTableContainer = styled(TableContainer)`
    //border: 2px solid red;
`

const StyledTable = styled(Table)`
    min-width: 650px;
`

const Column = styled(TableHead)`

    
`
const StyledColumnHeader = styled(TableRow)`
        //background-color: pink;

        border: 0;
    
`
const StyledTableRow = styled(TableRow)`
        
    background-color: ${p=> p.theme.primaryOffWhite};
    height: 50px;
    border-radius: 10px;
    margin-bottom: 12px ;
`


export default function BasicTable() {
  return (
    <StyledTableContainer component={Paper}>
      <StyledTable aria-label="simple table">
        <Column>
          <StyledColumnHeader>
            <TableCell></TableCell>
            <TableCell>Farm</TableCell>
            <TableCell></TableCell>
            <TableCell align="center">Market Price</TableCell>
            <TableCell align="center">Lorem</TableCell>
            <TableCell align="center">Ipsum</TableCell>
          </StyledColumnHeader>
        </Column>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>

              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.farmName}</TableCell>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center">{row.profit}</TableCell>
              <TableCell align="center">{row.loss}</TableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </StyledTable>
    </StyledTableContainer>
  );
}
