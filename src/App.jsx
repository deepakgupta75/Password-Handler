import { useState } from 'react'
import 'tailwindcss/tailwind.css';


import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/Manager';
import Footer from './components/Footer';
function App() {
 
  return (
    <>
    <Navbar/>
    <div className=" bg-green-50 bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>
    <Manager/>
     <Footer/>
    </>
  )
}

export default App
