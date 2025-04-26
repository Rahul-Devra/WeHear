// import { useState } from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout"

import FoundersPage from './components/FoundersPage';

function App() {
 

  return (
    <Router>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<WofrPage3/>} /> */}
          <Route path='/' element={<FoundersPage/>} />
         
          <Route path="/Our-Founders" element={<FoundersPage/>} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
