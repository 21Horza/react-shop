import React, {useState} from 'react'
import { Container, Button } from 'react-bootstrap'
import BrandModal from '../modals/BrandModal'
import DeviceModal from '../modals/DeviceModal'
import TypeModal from '../modals/TypeModal'

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false)
  const [typeVisible, setTypeVisible] = useState(false)
  const [deviceVisible, setDeviceVisible] = useState(false)

  return (
    <Container className='d-flex flex-column'>
      <Button 
        onClick={() => setTypeVisible(true)} 
        variant='outline-secondary' 
        className='mt-3'
      >
        Add a type
      </Button>
      <Button 
        onClick={() => setBrandVisible(true)} 
        variant='outline-secondary' 
        className='mt-3'
      >
        Add a brand
      </Button>
      <Button 
        onClick={() => setDeviceVisible(true)} 
        variant='outline-secondary' 
        className='mt-3'
      >
        Add a device
      </Button>
      <TypeModal show={typeVisible} onHide={() => setTypeVisible(false)}/> 
      <BrandModal show={brandVisible} onHide={() => setBrandVisible(false)}/> 
      <DeviceModal show={deviceVisible} onHide={() => setDeviceVisible(false)}/> 
    </Container>
  )
}

export default Admin