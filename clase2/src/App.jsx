import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import SaludoDeveloper from './componentes/Developer.jsx'
import ComponenteImg from './componentes/ImgAvatar.jsx'
import developers from './DatosDevelopers.js'


function App() {

  return (
    <>
      <img src={viteLogo} alt="Logo vite" />
      <img src={reactLogo} alt="Logo React" />
      <div className='contenedor-titulo' >
        <h1>It is a pleasure Grettings to CTD Full Stack Developers</h1>
      </div>
      <div className='Contenedor-developers'>

        {developers.map((dev, index) => (
          <>
            <SaludoDeveloper
              key={index}
              nombre={dev.nombre}
              empresa={dev.empresa}
              skill1={dev.skill1}
              skill2={dev.skill2}
              skill3={dev.skill3}
              skill4={dev.skill4}
            />
            <ComponenteImg
              imagenUrl={dev.avatar} />
          </>
        ))}
      </div>
    </>
  )
}

export default App
