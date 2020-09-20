import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  

function HistoryPage(props) {
    const classes = useStyles();
    return (
        <div style={{ width: '80%', margin: '3rem auto' }}>
            <div style={{ textAlign: 'center' }}>
                <h1>Your purchase history</h1>
            </div>
            <br />
        {console.log('User Data',props.user.userData )}
            <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Payment ID </StyledTableCell>
            <StyledTableCell align="right">Product Name </StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Date of Purchase</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {props.user.userData && props.user.userData.history &&
                        props.user.userData.history.map((item) => (
            <StyledTableRow key={item._id}>
              <StyledTableCell component="th" scope="row">
                {item.paymentId}
              </StyledTableCell>
              <StyledTableCell align="right">{item.name}</StyledTableCell>
              <StyledTableCell align="right">{item.price}</StyledTableCell>
              <StyledTableCell align="right">{item.quantity}</StyledTableCell>
              <StyledTableCell align="right">{item.dateOfPurchase}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default HistoryPage


