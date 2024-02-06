import { useState } from 'react'
import './App.css'
import Logo from './components/logo/Logo'
import imgRight from './assets/foto.png'
import MiApi from './components/MiApi/miApi'

function App() {


  return (
    <>
<div className='mainContainer'>
<div className='miniContainer'>
<div className='logo'><Logo/></div>
<div className='subContainer'>
<div className='cont1'><MiApi/></div>
<div className='cont2'><img src={imgRight} alt="Titulo" height="400px"></img></div>
</div>
</div>
</div>
    </>
  )
}

export default App
