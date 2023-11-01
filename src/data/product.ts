interface IProductList {
  id: number
  title: string
  price: number
  image: string
}

const productList: IProductList[] = [
  {
    id: 1,
    title: 'product 1',
    price: 10000,
    image: '/img/no-image.png'
  },
  {
    id: 2,
    title: 'product 2',
    price: 10000,
    image: '/img/no-image.png'
  },
  {
    id: 3,
    title: 'product 3',
    price: 10000,
    image: '/img/no-image.png'
  },
  {
    id: 4,
    title: 'product 4',
    price: 10000,
    image: '/img/no-image.png'
  },
  {
    id: 5,
    title: 'product 5',
    price: 10000,
    image: '/img/no-image.png'
  }
]

function getProductById(id: number): IProductList | null {
  return productList.find((item) => item.id === id) || null
}

export {getProductById, productList}
