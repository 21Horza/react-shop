import { observer } from 'mobx-react-lite'
import React, { useContext, useState, useEffect } from 'react'
import { Modal, Button, Form, Dropdown, Row, Col } from 'react-bootstrap'
import { Context } from '..'
import { createDevice, getBrands, getTypes } from '../http-service/deviceApi'

const DeviceModal = observer(({show, onHide}) => {
    const {device} = useContext(Context)
    const [info, setInfo] = useState([]) // set info for device description
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [file, setFile] = useState(null)

    useEffect(() => {
      getTypes().then(data => device.setTypes(data))
      getBrands().then(data => device.setBrands(data))
    }, [])

    const addInfo = () => {
        setInfo([...info, {title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number) => {
      setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const addDevice = () => {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('price', `${price}`)
      formData.append('img', file)
      formData.append('brandId', file.selectedBrand.id)
      formData.append('typeId', device.selectedType.id)
      formData.append('info', JSON.stringify(info))
      createDevice(formData).then(data => onHide())
    }

    const selectFile = e => {
      setFile(e.target.files[0])
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
          Add new type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <Form>
              <Dropdown className='mt-3'>
                  <Dropdown.Toggle>{device.selectedType.name || 'Choose a type'}</Dropdown.Toggle>
                  <Dropdown.Menu>
                      {device.types.map(type => 
                        <Dropdown.Item 
                        onClick={() => device.setSelectedType(type)} 
                        key={type.id}>{type.name}
                        </Dropdown.Item>
                        )}
                  </Dropdown.Menu>
              </Dropdown>
              <Dropdown className='mt-3'>
                  <Dropdown.Toggle>{device.selectedBrand.name || 'Choose a brand'}</Dropdown.Toggle>
                  <Dropdown.Menu>
                      {device.brands.map(brand => 
                        <Dropdown.Item 
                        onClick={() => device.setSelectedBrand(brand)} 
                        key={brand.id}>{brand.name}
                        </Dropdown.Item>
                        )}
                  </Dropdown.Menu>
              </Dropdown>
              <Form.Control
                className='mt-3'
                placeholder='Type a device name'
                onChange={e => setName(e.target.value)}
                value={name}
               />
              <Form.Control
                className='mt-3'
                placeholder='Type a device price'
                onChange={e => setPrice(Number(e.target.value))}
                type='number'
                value={price}
               />
              <Form.Control
                className='mt-3'
                placeholder=''
                type='file'
                onChange={selectFile}
               />
               <hr />
               <Button 
                    variant='warning'
                    onClick={addInfo}
                >
                    Add new description
                </Button>
                {info.map(i => 
                    <Row className='mt-3' key={i.number}>
                        <Col md={4}>
                            <Form.Control
                                value={i.title}
                                onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                placeholder='Type a description titile'
                            />
                        </Col>
                        <Col md={4}>
                            <Form.Control
                                value={i.description}
                                onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                placeholder='Type a description'
                            />
                        </Col>
                        <Col md={4}>
                            <Button 
                                onClick={() => removeInfo(i.number)}
                                variant='outline-danger'
                            >
                                Delete
                            </Button>
                        </Col>
                    </Row>
                )}
          </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='danger' onClick={onHide}>Close</Button>
        <Button variant='success' onClick={addDevice}>Add</Button>
      </Modal.Footer>
    </Modal>
  )
})

export default DeviceModal