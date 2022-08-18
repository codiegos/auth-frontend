import {Outlet , Navigate} from 'react-router-dom';
import React from 'react'

function PrivateRoutes() {
    let auth = {'token':true}
  return (
    auth.token ? <Outlet/> : <Navigate to={'/'}/>
  )
}

export default PrivateRoutes