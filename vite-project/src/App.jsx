import './App.css'
import { Routes, Route } from 'react-router-dom'
import AddStudent from './AddStudent'
import Load from './load'
import Login from './Login'
function App() {
 

  return (
    <>
       
        <Routes>
          <Route path="/dashboard" element={<Load/>} />
          <Route path="/" element={<Login />} />
          <Route path="/AddStudent" element={<AddStudent />} />
        </Routes>
        
    </>
  )
}

export default App
