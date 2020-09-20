import React from 'react';
import Dropzone from 'react-dropzone'; 
import AddIcon from '@material-ui/icons/Add';
import Axios from 'axios';
function FileUpload(props) {
    const [Image, setImage] = React.useState([])
    const onDrop = (files) =>
    {
        //we are sending the files to the backend server.
        let formData = new FormData();
        const config = 
        {
            header: {'content=-type': 'multipart/form-data'}
        }
        formData.append("file", files[0])

        //save the image inside the node server
        Axios.post('/api/product/uploadImage', formData, config)
      .then(response =>
        {
            if(response.data.success)
            {
                setImage([...Image, response.data.image])
                props.refreshFunction([...Image, response.data.image])
            }
            else
            {
                alert('Image failed to be uploaded')
            }
        })      
    }
    const onDelete =(image) =>
    {

            const currentIndex = Image.indexOf(image);
            let newImage =[...Image]
            newImage.splice(currentIndex, 1);
            setImage(newImage)
            props.refreshFunction(newImage)
    }
    return (
        <div style={{display:'flex', justifyContent:'space-between'}}>
            <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={8000000000}
            >
                {({getRootProps, getInputProps}) => 
                (
                    <div style={{width:'300px', height:'240px', display: 'flex', border:'1px solid lightgray', alignItems:'center', justifyContent:'center'}}
                    {...getRootProps()}
                    > 
                      <input {...getInputProps()}/>   
                    <AddIcon 
                    style={{fontSize:'3rem'}}
                    helperText="Upload the picture for the product"
                    />
                    </div>
                )
                }

            </Dropzone>
            
            <div style={{ display: 'flex', width: '350px', height: '240px', overflowX: 'scroll' }}>

{Image.map((image, index) => (
    <div onClick={() => onDelete(image)}>
        <img style={{ minWidth: '300px', width: '300px', height: '240px' }} src={`http://localhost:5000/${image}`} alt={`productImg-${index}`} />
    </div>
))}


</div>

</div>
)
}
export default FileUpload
