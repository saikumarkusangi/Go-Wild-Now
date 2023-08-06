import React from 'react';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Camping from './pages/Camping';
import Layout from './component/Layout/Layout';
import Location from './pages/Location';

const App = () => {
  console.log('@@@@@@@')
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path='/locations' Component={Location}/>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
