import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import './TV'
import Header from './Header'
import Trending from './Trending'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/header" element={<Header/>}/>
      <Route path="/trending" element={<Trending/>}/>

      
    </Routes>
    </BrowserRouter>
  )
}

export default App
