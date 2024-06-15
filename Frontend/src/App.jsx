import React from 'react'
import Home from './components/Home/Home';
import {Routes,Route} from 'react-router-dom'
import Courses from './components/Courses/Courses';
import Singup from './components/Singup';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/course' element={<Courses/>}/>
      <Route path='/signUp'element={<Singup/>}/>
    </Routes>
  ); 

}

export default App
