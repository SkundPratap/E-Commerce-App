import React, { useEffect, useState } from 'react'
import ImageGallery from 'react-image-gallery';

function ProductImage(props) {
    const [Images, setImages] = useState([])

    useEffect(() => {
        {console.log('Product details', props.detail)}
        if (props.detail.image && props.detail.image.length > 0) {
            let images = [];

            props.detail.image && props.detail.image.map(item => {
                images.push({
                    original: `http://localhost:5000/${item}`
                  
                })
            })
            setImages(images)
        }
    }, [props.detail])

    return (
        <div>
            <ImageGallery items={Images} showThumbnails={false} showFullscreenButton={false} />
        </div>
    )
}

export default ProductImage