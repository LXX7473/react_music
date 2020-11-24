import React, { memo } from 'react'
import {HashRouter}from 'react-router-dom'
import routers from '@/router'
import {renderRoutes} from 'react-router-config'
import ContainerHeader from './components/ContainerHeader'
export default memo(function App() {
  return (
    <HashRouter>
      <ContainerHeader/>
      {renderRoutes(routers)}
   
    </HashRouter>
    
  )
})
