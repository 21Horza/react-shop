import React from 'react'
import { Modal, Button} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import {SHOP_ROUTE} from '../utils/consts'

const Status = () => {
    const navigate = useNavigate();

    const is_success = true

  return (
    <Modal.Dialog style={{marginTop: 100}}>
        <Modal.Header className='d-flex align-items-center justify-content-center'>
            <Modal.Title>{is_success ? 'Congrats!' : 'Oops...'}</Modal.Title>
        </Modal.Header>

        <Modal.Body className='d-flex align-items-center justify-content-center'>
            <p>{is_success ? 'Your order is completed' : 'Something went wrong'}</p>
        </Modal.Body>

        <Modal.Footer>
            {is_success ?
                <Button onClick={() => navigate(SHOP_ROUTE)} variant="success">Back to store</Button>
            :
            <Button style={{marginLeft: 'auto'}}variant="danger">Contact us</Button>
        }
        </Modal.Footer>
    </Modal.Dialog>
  )
}

export default Status