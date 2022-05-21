import React, {useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import { createBrand } from '../http-service/deviceApi'

const BrandModal = ({show, onHide}) => {
  const [value, setValue] = useState('')

  const addBrand = () => {
    createBrand({name: value}).then(data => {
        setValue('')
        onHide()
    })
  }

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
          Add new brand
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
              <Form.Control
                value={value}
                onChange={e => setValue(e.target.value)}
                placeholder='add a type name'
              />
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={onHide}>Close</Button>
        <Button variant='success' onClick={addBrand}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default BrandModal