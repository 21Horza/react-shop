import React from 'react'
import {Modal, Form, Button, Alert, Row, Col} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { STATUS_ROUTE } from '../utils/consts'

const CreditCardModal = ({show, onHide}) => {
  const navigate = useNavigate()

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Enter your credentials
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" placeholder="Enter your card number" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Row>
                <Col>
                  <Form.Control type="password" placeholder="Expiration date" />
                </Col>
                <Col>
                  <Form.Control type="password" placeholder="CVC/CVV" />
                </Col>
              </Row>
            </Form.Group> 
          </Form>
          <Alert variant="danger">
            <Alert.Heading>Be careful!</Alert.Heading>
            <p>
              Do not let others know your credit card number and do not leave it in your browser cache
            </p>
          </Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={onHide}>Close</Button>
        <Button variant='success' onClick={() => navigate(STATUS_ROUTE)}>Confirm</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreditCardModal