import React from 'react'
import { Form, Row, Col, Card, Button, Container, Alert } from 'react-bootstrap'
import PaymentCard from '../components/PaymentCard'

const Payment = () => {
  return (
      <Container style={{maxWidth: 1000, maxHeight: 600}}>
        <PaymentCard />
        <Alert className='mt-4' variant="warning">
            <Alert.Heading>Hey, dear user!</Alert.Heading>
            <p>
                In order to avoid any delivery mistakes, please, make sure that your address and all the information are correct!
            </p>
            <hr />
            <p className="mb-0">
                Have a nice day! :)
            </p>
        </Alert>
      </Container>
  )
}

export default Payment