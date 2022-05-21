import React, {useState} from 'react'
import {Card, Form, Col, Row, Button} from 'react-bootstrap'
import CreditCardModal from '../modals/CreditCardModal'

const PaymentCard = () => {
    const [paymentVisible, setPaymentVisible] = useState(false)

  return (
    <Card className='mt-4 p-4'>

            <Form>
        <Row className="mb-3">
            <Form.Group as={Col} >
            <Form.Label>Name</Form.Label>
            <Form.Control type="email" placeholder="Enter your name" />
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Last name</Form.Label>
            <Form.Control type="email" placeholder="Enter your last name" />
            </Form.Group>

        </Row>

        <Form.Group className="mb-3" >
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="Type your adress" />
        </Form.Group>

        <Row className="mb-3">
            <Form.Group as={Col} >
            <Form.Label>City</Form.Label>
            <Form.Control />
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
            </Form.Select>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Country</Form.Label>
            <Form.Select defaultValue="Choose...">
                <option>Choose...</option>
                <option>...</option>
            </Form.Select>
            </Form.Group>

            <Form.Group as={Col} >
            <Form.Label>Zip</Form.Label>
            <Form.Control />
            </Form.Group>
        </Row>
        </Form>
        <Button onClick={() => setPaymentVisible(true)} className='align-self-end' variant="primary" type="submit">
            Confirm
        </Button>
        <CreditCardModal show={paymentVisible} onHide={() => setPaymentVisible(false)}/>
        </Card>
  )
}

export default PaymentCard