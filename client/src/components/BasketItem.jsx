import React from 'react'
import {Row, Col, Image} from 'react-bootstrap'
import del from '../assets/del.png';

const BasketItem = () => {
    const device = {id: 1, type: 'Smartphone', name: 'Iphone 10', price: 10000, rating: 5, img : 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-x-space-gray-back.png'}
    const description = [
    {id:1, title: 'ORM', description: '5 gb'},
    {id:2, title: 'Camera', description: '14 Mp'},
    {id:3, title: 'Processor', description: 'Snapdragon 380'},
    {id:4, title: 'Yadro', description: '2'},
    {id:5, title: 'Accumulator', description: '4000'},
  ]

  const index = 10

  return (
    <Row style={{background: 'lightblue', borderRadius: 20}} className='mt-1'>
        <Col style={{ width: '20rem', height: '10rem' }}>
          <Image height={150} width={150} src={device.img}/>
        </Col>     
        <Col style={{ width: '20rem', height: '10rem' }}>
          <div className='mt-5'>{device.name}</div>
        </Col>     
        <Col style={{ width: '20rem', height: '10rem' }}>
          <div className='mt-5'><a>-</a> {index} <a>+</a></div>
        </Col>     
        <Col style={{ width: '20rem', height: '10rem' }}>
          <div className='mt-5'>$ {device.price}</div>
        </Col>     
        <Col style={{ width: '20rem', height: '10rem' }}>
          <Image className='mt-5' height={15} width={15} src={del}/>
        </Col>
    </Row> 
  )
}

export default BasketItem