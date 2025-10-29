import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import Informacion from './componentes/publico/paginas/Info'
import ListaNotas from './componentes/publico/paginas/ListaNotas'
import Layout from './componentes/Layout'
import CrearNota from './componentes/publico/paginas/CrearNota'
import Registro from './componentes/publico/registro/Registro'
import Login from './componentes/publico/login/Sesion'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/informacion" />} />
        <Route element={<Layout />}>
          <Route path="informacion" element={<Informacion />} />
          <Route path="lista-notas" element={<ListaNotas />} />
          <Route path="crear-nota" element={ <CrearNota /> } />
          <Route path="registro" element={ <Registro /> } />
          <Route path="login" element={ <Login /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
