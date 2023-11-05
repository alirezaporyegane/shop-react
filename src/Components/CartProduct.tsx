import {ICartItems} from '@/context/CartContext'
import {useContext} from 'react'
import {Button} from 'react-bootstrap'
import {CartContext} from '../context/CartContext'
import {getProductById} from '../data/product'

interface IProps {
  cartItem: ICartItems
}

const CartProduct = ({cartItem}: IProps) => {
  const productData = getProductById(cartItem.id)
  const cart = useContext(CartContext)

  const price = (productData?.price || 0) * cartItem.quantity

  return (
    <>
      <p>{productData?.title}</p>

      <div className="d-flex">
        <Button
          size="sm"
          className="mb-5 text-white"
          variant="outline-secondary"
          onClick={() => cart.addItemToCart(cartItem.id)}
        >
          +
        </Button>

        <p className='mb-0 mx-3'>تعداد: {cartItem.quantity}</p>

        <Button
          size="sm"
          className="mb-5 text-white"
          variant="outline-secondary"
          onClick={() => cart.removeItemFromCart(cartItem.id)}
        >
          -
        </Button>
      </div>

      <p>قیمت: {productData?.price}</p>

      <p>قیمت کل: {price}</p>

      <Button
        size="sm"
        className="mb-5 text-white"
        variant="outline-secondary"
        onClick={() => cart.deleteFromCart(cartItem.id)}
      >
        حذف
      </Button>
    </>
  )
}

export default CartProduct
