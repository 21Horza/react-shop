import React, {useContext, useState} from 'react'
import { Container, Form, Card, Button, Row } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { login, registration } from '../http-service/userApi'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'
import {observer} from 'mobx-react-lite'
import {Context} from "../index";
import { useNavigate } from 'react-router-dom';

const Auth = observer(() => {
  const {user} = useContext(Context)
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const clickHandler = async () => {
    try {
      let data;
      if (isLogin) {
        data = await login(email, password)
        console.log('Logged in', data)
      } else {
        data = await registration(email, password)
        console.log('Registered', data)
      }
      user.setUser(user)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    } catch (e) {
      alert(e.response.data.message)
    }
  }

  return (
    <Container 
      className="mt-5 d-flex justify-content-center alignt-items-center"
      style={{height: 350}}
      >
        <Card style={{width: 600}} className="p-5">
          <h2 className='m-auto'>{isLogin ? 'Authorization' : 'Registration'}</h2>
          <Form className='d-flex flex-column'>
            <Form.Control
              className='mt-3'
              placeholder='Enter email...'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Form.Control
              className='mt-3'
              placeholder='Enter password...'
              value={password}
              onChange={e => setPassword(e.target.value)}
              type='password'
            />
            <Row className='d-flex justify-content-between mt-3'>
              {isLogin ? 
                <div>
                  Don't have an account? <NavLink to={REGISTRATION_ROUTE}>Register here</NavLink>
                </div>
                :
                <div>
                  Do you have an account? <NavLink to={LOGIN_ROUTE}>Login here</NavLink>
                </div>
            }
              <Button 
                className='mt-4' variant='success'
                onClick={clickHandler}
                >
                {isLogin? 'Login' : 'Authorization'}
              </Button>
            </Row>
          </Form>
        </Card>
    </Container>
  )
})

export default Auth