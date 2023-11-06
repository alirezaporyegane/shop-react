import {Container} from 'react-bootstrap'
import {Route, Routes} from 'react-router-dom'
import Navbar from './Components/Navbar'
import Success from './Pages/Success'
import Shop from './Pages/shop'
import {CartProvider} from './context/CartContext'

function App() {
  return (
    <CartProvider>
      <Container>
        <Navbar />

        <Routes>
          <Route index element={<Shop />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Container>
    </CartProvider>
  )
}

export default App
