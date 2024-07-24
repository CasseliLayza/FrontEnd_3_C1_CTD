import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Componente from './Componente'
import ComponenteImg from './ComponenteImg'
'./Componente.jsx'

function App() {

  return (
    <>
      <img src={viteLogo} alt="Logo" />
      <img src={reactLogo} alt="Logo React" />
      <h1>Saludos a los compañeros</h1>
      <Componente
        nombre='Dani'
      />
      <ComponenteImg
        imagenUrl='https://e7.pngegg.com/pngimages/943/1016/png-clipart-boy-character-illustration-miguel-rivera-at-the-movies-cartoons-thumbnail.png'
      />
      <Componente
        nombre='Lina'
      />
      <ComponenteImg
        imagenUrl='https://i.pinimg.com/564x/bc/3f/d5/bc3fd54a7ce0387e2c06d996e875b659.jpg' />

    </>
  )
}

export default App
