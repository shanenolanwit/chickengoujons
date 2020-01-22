import { Link } from 'react-router-dom'

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, year, summary, source, tags, pdf) {
  return { name, year, summary, source, tags, pdf };
}

const rows = [
  createData('Sample Paper', '2019', '/thesis/papers/sample', 'IEEE', 'cloud, security', 'link to pdf'),
];

export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="thesis reference table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Year</TableCell>
            <TableCell align="left">Source</TableCell>
            <TableCell align="left">Tags</TableCell>
            <TableCell align="left">PDF</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
              <TableCell align="left"><Link to={ row.summary }>{row.name}</Link></TableCell>
              <TableCell align="left">{row.year}</TableCell>
              <TableCell align="left">{row.source}</TableCell>
              <TableCell align="left">{row.tags}</TableCell>
              <TableCell align="left">{row.pdf}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
