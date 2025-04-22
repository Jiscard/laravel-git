import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'


import App from './App.jsx'
import Header from './Header.jsx'
import Load from './load.jsx'
import AddStudent from './AddStudent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <AddStudent/>
    <Load/>
    <App />
  </StrictMode>,
)
