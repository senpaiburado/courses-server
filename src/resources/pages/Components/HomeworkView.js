import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { border } from '@material-ui/system';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

import DropDawnView from "./DropDawnView";
import { Button } from '@material-ui/core';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    width: "14.27%"
  },
  body: {
    fontSize: 14,
    borderRight: "1px solid rgb(212, 212, 212)",
    cursor: "pointer",
    width: "14.27%",

  },

}))(TableCell);
const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },


  },
}))(TableRow);

function createData(teachers_number, teacher_name, task) {
  return { teachers_number, teacher_name, task};
}

const rows = [

  createData('1', 'Владислав', 'Повторить грамматику времён в английском языке'),
 
];

const useStyles = makeStyles({
  root: {
    width: '100%',
    overflowX: 'auto',
    textAlign: 'center',
  },
  table: {
    minWidth: 700,
  },
});

export default function HomeworkView() {
  const classes = useStyles();
  function handleClick(e, data) {
    console.log(data.foo);
  }

  return (

    <Table className={classes.table} aria-label="customized table">
      <TableHead>
        <TableRow>
          <StyledTableCell align="center">Номер урока</StyledTableCell>
          <StyledTableCell align="center">Имя учителя</StyledTableCell>
          <StyledTableCell align="center">Задание</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map(row => (
          <StyledTableRow key={row.name}>

            {/* NOTICE: id must be unique for EVERY instance */}
            <StyledTableCell align="left"><ContextMenuTrigger id="some_unique_identifier">{row.teachers_number }</ContextMenuTrigger>
            </StyledTableCell>
            <StyledTableCell align="left"><ContextMenuTrigger id="some_unique_identifier">{row.teacher_name}</ContextMenuTrigger>
            </StyledTableCell>
            <StyledTableCell align="left"><ContextMenuTrigger id="some_unique_identifier">{row.task}</ContextMenuTrigger>
            </StyledTableCell>


          </StyledTableRow>
        ))}
      </TableBody>

    
    
      
  </Table>


  );
}