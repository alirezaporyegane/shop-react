import {ReactNode, createContext, useEffect, useState} from 'react'
import {getProductById} from '../data/product'

export interface ICartItems {
  id: number
  quantity: number
}

interface ICartContext {
  items: ICartItems[]
  getProductQuantity: (id: number) => number
  addItemToCart: (id: number) => void
  removeItemFromCart: (id: number) => void
  deleteFromCart: (id: number) => void
  getTotalAmount: () => number
}

interface ICartProvider {
  children: ReactNode
}

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteFromCart: () => {},
  getTotalAmount: () => 0
} as ICartContext)

// eslint-disable-next-line react-refresh/only-export-components
export function CartProvider({children}: ICartProvider) {
  const [cartProducts, setCartProducts] = useState<ICartItems[]>([])

  const setLocaleStorage = (key: string, value: ICartItems[]) => {
    localStorage.setItem(key, JSON.stringify(value))
  }

  const getLocaleStorage = (key: string): ICartItems[] => {
    return JSON.parse(localStorage.getItem(key) || '')
  }

  useEffect(() => {
    const cartItem = getLocaleStorage('cart')

    if (cartItem?.length) setCartProducts(cartItem)
  }, [])

  useEffect(() => setLocaleStorage('cart', cartProducts), [cartProducts])

  function getProductQuantity(id: number): number {
    const quantity = cartProducts.find((item) => item.id === id)?.quantity

    if (quantity === undefined) return 0

    return quantity
  }

  function addItemToCart(id: number): void {
    const quantity = getProductQuantity(id)

    if (quantity === 0) setCartProducts([...cartProducts, {id: id, quantity: 1}])
    else setCartProducts(cartProducts.map((item) => (item.id === id ? {...item, quantity: item?.quantity + 1} : item)))
  }

  function deleteFromCart(id: number) {
    setCartProducts((cartProduct: ICartItems[]) => cartProduct.filter((item) => item.id !== id))
  }

  function removeItemFromCart(id: number): void {
    const quantity = getProductQuantity(id)
    if (quantity === 1) deleteFromCart(id)
    else setCartProducts(cartProducts.map((item) => (item.id === id ? {...item, quantity: item?.quantity - 1} : item)))
  }

  function getTotalAmount(): number {
    let totalAmount: number = 0

    cartProducts.map((item) => {
      const productData = getProductById(item.id)
      totalAmount += (productData?.price || 0) * item.quantity
    })

    return totalAmount
  }

  const ContextValue = {
    items: cartProducts,
    getProductQuantity,
    addItemToCart,
    removeItemFromCart,
    deleteFromCart,
    getTotalAmount
  }

  return <CartContext.Provider value={ContextValue}>{children}</CartContext.Provider>
}
