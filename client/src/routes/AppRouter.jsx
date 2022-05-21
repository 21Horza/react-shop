import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { Context } from '../index';
import { SHOP_ROUTE } from '../utils/consts';
import { authRoutes, publicRoutes } from './routes';

const AppRouter = () => {
  const {user} = useContext(Context)

  return (
    <Routes>
        {user.isAuth && authRoutes.map(({path, element}) => 
            <Route key={path} path={path} element={element} />
        )}
        {publicRoutes.map(({path, element}) => 
            <Route key={path} path={path} element={element} />
        )}
        <Route path="*" element={<Navigate replace to={SHOP_ROUTE} />} />
    </Routes>
  )
}

export default AppRouter