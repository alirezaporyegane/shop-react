import {useContext, useState} from 'react'
import {Button, Modal, Navbar as NavbarBs} from 'react-bootstrap'
import {BsBasket} from 'react-icons/bs'
import {CartContext, type ICartItems} from '../context/CartContext'
import CartProduct from './CartProduct'

export default function Navbar() {
  const cart = useContext(CartContext)
  const [modal, setModal] = useState(false)

  const showModel = () => setModal(true)
  const hideModal = () => setModal(false)

  const productCount = cart.items.reduce((sum: number, product: ICartItems) => sum + product.quantity, 0)

  return (
    <>
      <NavbarBs className="border-bottom border-secondary ">
        <NavbarBs.Collapse className="justify-content-end">
          <NavbarBs.Text className="text-white">محصولات</NavbarBs.Text>

          <Button variant="outline-secondary" className="text-white ms-3" onClick={showModel}>
            سبد خرید
            <BsBasket className="ms-2" />
            {productCount ? `(${productCount})` : ''}
          </Button>
        </NavbarBs.Collapse>
      </NavbarBs>

      <Modal contentClassName="bg-dark" show={modal} onHide={hideModal}>
        <Modal.Header className="d-flex justify-content-between" closeButton closeVariant="white">
          <Modal.Title>سبد خرید محصول</Modal.Title>
        </Modal.Header>

        <Modal.Body dir="rtl">
          {productCount > 0 ? (
            cart.items.map((item) => {
              return <CartProduct key={item.id} cartItem={item} />
            })
          ) : (
            <h3>سبد خرید خالی است</h3>
          )}

          <div className='d-flex align-items-center justify-content-between'>
            <span>
              قیمت کل
            </span>

            <h3>
              {cart.getTotalAmount() || 0}
            </h3>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
