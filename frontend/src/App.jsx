import { Navigate, Route, Routes } from 'react-router'
import './App.css'
import Layout from './componentes/Layout'
import Informacion from './componentes/Info'
import CrearNota from './componentes/compartidos/CrearNota'
import ListaNotas from './componentes/ListaNotas'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/informacion" />} />
        <Route element={<Layout />}>
          <Route path="informacion" element={<Informacion />} />
          <Route path="lista-notas" element={<ListaNotas />} />
          <Route path="crear-nota" element={ <CrearNota /> } />
        </Route>
      </Routes>
    </>
  )
}

export default App
