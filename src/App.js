import React from 'react';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Camping from './pages/Camping';
import Layout from './component/Layout/Layout';
import Aboutus from './pages/Location';
import Shop from './pages/Shop';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  console.log('@@@@@@@')
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />     
          <Route path='/aboutus'Component={Aboutus}/>
          <Route path='/camping' Component={Camping}/>
          <Route path='/Shop' Component={Shop}/>
          <Route path='/PageNotFound' Component={PageNotFound}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
