import React, { useContext } from 'react';
import { Context } from '..';
import { Button, Container, Nav, Navbar} from 'react-bootstrap'
import { NavLink, useNavigate } from 'react-router-dom'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts';
import {observer} from 'mobx-react-lite';

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
    }

  return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: '#fff'}} to={SHOP_ROUTE}>Shop</NavLink>
                    {user.isAuth ? 
                    <Nav className="ml-auto" style={{color: '#fff'}}>
                        <Button
                            onClick={() => navigate(ADMIN_ROUTE)}
                            variant='light'
                        >
                            Admin tools
                        </Button>
                        <Button
                            onClick={() => logOut()}
                            variant='primary' className="ml-4"
                        >
                            Log Out
                        </Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: '#fff'}}>
                        <Button variant='primary' onClick={() => navigate(LOGIN_ROUTE)}>Authorization</Button>
                    </Nav>
                    }
            </Container>
        </Navbar>
  )
})

export default NavBar