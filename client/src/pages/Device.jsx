import React, {useEffect, useState} from 'react'
import { Col, Container, Card, Image, Row, Button } from 'react-bootstrap'
import bigStar from '../assets/bigStar.png'
import { useParams } from 'react-router-dom'
import { getDevice } from '../http-service/deviceApi'

const Device = () => {
  const [device, setDevice] = useState({info: []})
  const {id} = useParams()

  useEffect(() => {
    getDevice(id).then(data => setDevice(data))
  }, [])

  return (
    <Container className='mt-2'>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} />
        </Col>
        <Col md={4}>
          <Row className='d-flex flex-column align-items-center'>
            <h2 className='d-flex align-items-center justify-content-center'>{device.info.name}</h2>
            <div
              className='d-flex align-items-center justify-content-center'
              style={{background: `url(${bigStar}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 40 }}
            >
              {device.rating}
            </div>
          </Row>
        </Col>
          <Card
            className='d-flex flex-column align-items-center justify-content-around'
            style={{width: 300, height: 300, fontSize: 32, border: 'px solid black', borderRadius: '20px'}}
          >
            <h3>From {device.price} $</h3>
            <Button variant='outline-dark'>Add to basket</Button>
          </Card>
      </Row>
      <Row className='d-flex flex-column m-5'>
        <h1>Description</h1>
        {device.info.map((info, index) =>
          <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray': 'white'}}>
            {info.title}: {info.description}
          </Row>
          )}
      </Row>
    </Container>
  )
}

export default Device