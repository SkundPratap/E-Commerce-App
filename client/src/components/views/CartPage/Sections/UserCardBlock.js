import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';


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


function UserCardBlock(props) {
    const classes = useStyles();
    

    // const renderCartImage = (images) => {
    //     if(image.length > 0) {
    //         let image = image[0]
    //         return `http://localhost:5000/${image}`
    //     }
    // }

    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr key={product._id}>
                <td>
                    {/* <img style={{ width: '70px' }} alt="product" 
                    src={renderCartImage(product.images)} /> */}
                    {product.title}
                </td> 
                <td>{product.quantity}</td>
                <td>$ {product.price} </td>
                <td><button 
                onClick={()=> props.removeItem(product._id)}
                >Remove </button> </td>
            </tr>
        ))
    )


    return (
        <div>
            

<TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Name</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Remove from the cart</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.products && props.products.map((product) => (
            <StyledTableRow key={product._id}>
              <StyledTableCell component="th" scope="row">
                {product.title}
              </StyledTableCell>
              <StyledTableCell align="right">{product.quantity}</StyledTableCell>
              <StyledTableCell align="right">{product.price}</StyledTableCell>
              <StyledTableCell align="right"><DeleteIcon onClick={()=> props.removeItem(product._id)} />  </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </div>
    )
}

export default UserCardBlock


