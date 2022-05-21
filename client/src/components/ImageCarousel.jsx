import React from 'react'
import { Carousel } from 'react-bootstrap'

const ImageCarousel = () => {
    const images = [
        {id:1, source: 'https://sun9-32.userapi.com/c850228/v850228741/14b98d/TqxDIkUHEbI.jpg'},
        {id:2, source: 'https://remsmart24.ru/wp-content/uploads/2020/02/iphone_X_big.png'},
        {id:3, source: 'https://cdn.rbt.ru/images/gen/item_image/image/7649/24/764808_r9051.jpg'}
      ]

  return (
        <Carousel fade>
            {images.map(image => 
                <Carousel.Item>
                    <img
                    height={300}
                    width={300}
                    className="d-block w-100"
                    src={image.source}
                    alt="First slide"
                    />
                </Carousel.Item>
                )}
    </Carousel>
  )
}

export default ImageCarousel