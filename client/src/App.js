import { Route } from "react-router";
import Form from './components/Form/Form'
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import React, { useEffect } from 'react'
import mongoose from 'mongoose'

const App = () => {

  return (
      <>
      <h1>Form</h1>  
      <Router>
          <Routes>
              <Route path='/:code' element={<Form />} />
          </Routes>
      </Router>
    </>
  )
}

export default App
