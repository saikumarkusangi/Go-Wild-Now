import React from 'react'
import Layout from './component/Layout/Layout'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'


const App = () => {
  return (
    <div>
    <BrowserRouter>
    <Layout>
      <Routes>
         <Route path='/' Component={Home}/>
      </Routes>
    
    </Layout>
    
    </BrowserRouter>
    </div>
  )
}

export default App
