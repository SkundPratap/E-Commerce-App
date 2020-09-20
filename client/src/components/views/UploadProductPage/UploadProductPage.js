import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import MenuItem from '@material-ui/core/MenuItem';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Button from '@material-ui/core/Button';
import FileUpload from '../../utils/FileUpload';
import Axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

    button: {
      margin: theme.spacing(1),
    },
  
  
}));

const clothes = [
  {
    "_id": 1,
    "name": "T-Shirts"
},
{
    "_id": 2,
    "name": "Shirts"
},
{
    "_id": 3,
    "name": "Shorts"
},
{
    "_id": 4,
    "name": "Bermudas"
},
{
    "_id": 5,
    "name": "Joggers"
},
{
    "_id": 6,
    "name": "Shoes"
}
  ];


function UploadProductPage(props) {
    const classes = useStyles();
    const [cloth, setClothes] = React.useState(1);
    const [titleValue, setTitleValue] = React.useState("");
    const [descriptionValue, setDescriptionValue] = React.useState("");
    const [priceValue, setPriceValue] = React.useState(0)
    const [Images, setImages] = React.useState([])
    const handleChangeClothes = (event) => {
    setClothes(event.target.value);
    }

    const onDescriptionChange = (event) => 
    {
        setDescriptionValue(event.currentTarget.value);
    }

    const onTitleChange = (event) => 
    {
        setTitleValue(event.currentTarget.value);
    }

    const onPriceChange = (event) =>
    {
        setPriceValue(event.currentTarget.value);;
    }
    
    const upadateImages =(newImages) =>
    {
        
      setImages(newImages)
    }

    const onSubmit = (event) =>{
      event.preventDefault();

      
      if (!titleValue || !descriptionValue || !priceValue ||
        !cloth || !Images) {
        return alert('fill all the fields first!')
    }


      const variables ={
        writer: props.user.userData._id,
        title:titleValue,
        description: descriptionValue,
        price: priceValue,
        image:Images,
        clothes:cloth

      }
      Axios.post('/api/product/uploadProduct',variables)
      .then(response => 
        {
          if(response.data.success)
          {
            alert('Product has been successfully uploaded inside the database. Thank you.')
          }else {
            alert('The server has failed to upload the desired product.')
          }
        })
    }

    return (
        <div style={{maxWidth:'700px', margin:'3rem'}}>
            <div style={{textAlign:'center', marginBottom: '3rem'}}> 
            <h2> Upload Your Product</h2>
            </div>
            <form onSubmit={onSubmit} className="upload-form">
               {/* Dropzone for the file */}
               <FileUpload refreshFunction={upadateImages} /> 
               <br/>
               <br/>
                <TextField
                    id="product-title"
                    label="Title"
                    onChange={onTitleChange}
                    value={titleValue}
                    variant="outlined"
                    color="primary"
                 />
                 <br/> 
                 <br/>
                 <TextField
                    id="product-description"
                    label="Description"
                    multiline
                    onChange={onDescriptionChange}
                    value={descriptionValue}
                    rows={3}
                    variant="outlined"
                  />
                <br/> 
                <br/> 
                <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
                 <OutlinedInput
                     id="outlined-adornment-amount"
                    onChange={onPriceChange}
                    value={priceValue}
                    type='number'
                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                    labelWidth={50}
                 />
                 <br/> 
                 <br/>
                 <TextField
                 id="outlined-select-currency"
                select
                label="Category is"
                value={cloth}
                onChange={handleChangeClothes}
                helperText="Please select the category"
                variant="outlined"
                >
                {clothes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                {option.label}
                </MenuItem>
          ))}
        </TextField>
                <br/>
                <br/> 
                <Button
                     variant="contained"
                    color="default"
                    onClick={onSubmit}
                    className={classes.button}
                 startIcon={<CloudUploadIcon />}
                  >
        Upload
      </Button>
            </form>
        </div>
    )
};

export default UploadProductPage
 