import React from 'react';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Camping from './pages/Camping';
import Layout from './component/Layout/Layout';


const App = () => {
  console.log('@@@@@@@')
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path='/locations' Component={Location}/>
          <Route path='/Camping' Component={Camping}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
