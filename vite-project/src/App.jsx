import './App.css'
import { Routes, Route } from 'react-router-dom'
import AddStudent from './AddStudent'
import Load from './load'
function App() {
 

  return (
    <>
       
        <Routes>
          <Route path="/" element={<Load/>} />
          <Route path="/AddStudent" element={<AddStudent />} />
        </Routes>
        
    </>
  )
}

export default App
