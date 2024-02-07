import { useState } from 'react'
import './App.css'
import Logo from './components/logo/Logo'
import imgRight from './assets/foto.png'
import MiApi from './components/MiApi/miApi'
import Buscador from './components/Buscador/Buscador'

function App() {


  return (
    <>
<div className='mainContainer'>
<div className='miniContainer'>
<div className='logo'><Logo/></div>
<div className='subContainer'>
<div className='cont1'> <h1 style={{color: '#3d50b6'}}>Listado de personajes</h1> <br></br>
<div className='cont11'>
 
  <MiApi/></div>
  <h1 style={{color: '#840001'}}>Buscar personaje</h1><br></br>
<div className='cont12'><Buscador/></div>
<div className='cont13'></div>
</div>
<div className='cont2'><img src={imgRight} alt="Titulo" height="400px"></img></div>
</div>
</div>
</div>

    </>
  )
}

export default App
