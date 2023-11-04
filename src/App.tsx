import {Container} from 'react-bootstrap'
import {Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Shop from './Pages/shop'
import {CartProvider} from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <Container>
        <Navbar />

        <Routes>
          <Route index element={<Shop />} />
        </Routes>
      </Container>
    </CartProvider>
  )
}

export default App
