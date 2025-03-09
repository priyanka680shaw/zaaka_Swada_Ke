import { useState } from 'react'
import React from 'react'
import './App.css'
import { BrowserRouter , Routes,Route } from 'react-router-dom'
import { Home  , Success , Error} from './pages/pagesIndex'
function App() {
  

  return (
    <>

     <BrowserRouter>
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/success' element = {<Success/>}/>
      <Route path='/*' element = {<Error/>} />
      
    </Routes>
    </BrowserRouter>

      
    </>
  )
}

export default App
