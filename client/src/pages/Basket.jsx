import React from 'react'
import { Container, Card, Button, Row, Col, Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import BasketItem from '../components/BasketItem';
import { SHOP_ROUTE, PAYMENT_ROUTE } from '../utils/consts';

const Basket = () => {
  const device = {id: 1, type: 'Smartphone', name: 'Iphone 10', price: 10000, rating: 5, img : 'https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-x-space-gray-back.png'}
  
  const navigate = useNavigate();

  return (
    <Container>
        <Row>
          <Col>
            <h1>Shopping Card</h1>
          </Col>
          <Col md={5}>
            <h1 style={{textAlign: 'left'}}>{device.id} item</h1>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col>
                <BasketItem />
                <BasketItem />
                <BasketItem />
              <Button onClick={() => navigate(SHOP_ROUTE)} className='m-4' variant='danger'> Back to Shop</Button>
            </Col>
            <Col md={3}>
              <Card style={{ width: '18rem', height: '35rem', background: 'lightgray'}}>
                <Card.Body>
                  <Card.Title className=' d-flex align-items-center justify-content-center'><h2>Summary</h2></Card.Title>
                    <hr />
                    <h5>Items: {device.id}</h5>
                    <div className='mt-3'>
                      <Form.Group className="mt-3">
                        <Form.Label><h5>Shipping</h5></Form.Label>
                        <Form.Select>
                          <option>Express</option>
                          <option>Speed Express</option>
                          <option>High Speed Express</option>
                        </Form.Select>
                      </Form.Group>
                      <Form.Group className="mt-3">
                        <Form.Label><h5>Discount code (optional)</h5></Form.Label>
                        <Form.Control placeholder="Enter your code"/>
                      </Form.Group>
                    </div>
                    <h5 className='mt-5'>Total price: </h5>
                </Card.Body>
                <hr />
                  <Button onClick={() => navigate(PAYMENT_ROUTE)} className='m-4' size='lg' variant="success">Proceed to payment</Button>
              </Card>
            </Col>
          </Row>
        </Container>
      </Container>
  )
}

export default Basket