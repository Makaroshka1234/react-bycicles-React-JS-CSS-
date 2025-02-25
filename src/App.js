import React from 'react';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router';

import Home from './pages/Home';
import About from './pages/About'
import Bicycles from './pages/Bycicles/Bicycles'
import Contacts from './pages/Contacts'
import Servises from './pages/Servises'
import { BicyclesContext, BicyclesProvider } from './providers/CategoryContext';



function App() {


  const [searchValue, setSearchValue] = React.useState('')

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

        <Route path='/bicycles' element={<BicyclesProvider> <Bicycles /> </BicyclesProvider>} />

        <Route path='/contacts' element={<Contacts />} />
        <Route path='/servises' element={<Servises />} />
      </Routes>

    </>

  );
}

export default App;
