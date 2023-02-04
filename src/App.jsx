import { Container, ModalBody } from 'react-bootstrap'
import Formulario from './components/Formulario'
import ListadoBebidas from './components/ListadoBebidas'
import ModalBebida from './components/ModalBebida'
import { CategoriasProvider } from './context/CategoriasProvider'
import { BebidasProvider } from './context/BebidasProvider'
import './app.css'

function App() {

  return (
    <CategoriasProvider>
      <BebidasProvider>
          <header className="py-2">
          <div >
                <img className='logo' src="../src/logo.jpg" alt="Logo Take a drink" />
                <p className='parrafo'>
                 Los mejores tragos del mundo en un solo lugar
                </p>
            </div>
            <h1>Busca tu trago</h1>
          </header>


          <Container className='mt-5'>
              <Formulario />

              <ListadoBebidas />

              <ModalBebida />
          </Container>
      </BebidasProvider>
    </CategoriasProvider>
  )
}

export default App
