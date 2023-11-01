import {Container} from 'react-bootstrap'
import {Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Shop from './Pages/shop'

function App() {
  return (
    <Container>
      <Navbar />

      <Routes>
        <Route index element={<Shop />} />
      </Routes>
    </Container>
  )
}

export default App
