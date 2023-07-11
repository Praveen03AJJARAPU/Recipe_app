import { useEffect, useState } from 'react'
import './App.css'
import List from './components/List';

import { BrowserRouter, Route, Routes } from 'react-router-dom'; 
import Details from './components/Details';
import Nav from './components/Nav';



function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Nav/>} />
        <Route path='/Details/:val' element={<Details/>}/>
      </Routes>
      
      {/* <Nav setData={setData} recipes={recipes} setRecipes={setRecipes}/> */}
      
    </>
  );
}

export default App
