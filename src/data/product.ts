export interface IProductList {
  id: number
  title: string
  price: number
  image: string
}

const productList: IProductList[] = [
  {
    id: 1,
    title: 'آیفون',
    price: 899,
    image: '/img/no-image.png'
  },
  {
    id: 2,
    title: 'مک بوک',
    price: 1999,
    image: '/img/no-image.png'
  },
  {
    id: 3,
    title: 'آیپد',
    price: 499,
    image: '/img/no-image.png'
  },
  {
    id: 4,
    title: 'ایربادز',
    price: 199,
    image: '/img/no-image.png'
  },
  {
    id: 5,
    title: 'میکروفون',
    price: 699,
    image: '/img/no-image.png'
  },
  {
    id: 6,
    title: 'اپل واچ',
    price: 499,
    image: '/img/no-image.png'
  },
  {
    id: 7,
    title: 'ماوس',
    price: 299,
    image: '/img/no-image.png'
  },
  {
    id: 8,
    title: 'هدفون',
    price: 599,
    image: '/img/no-image.png'
  }
]

function getProductById(id: number): IProductList | null {
  return productList.find((item) => item.id === id) || null
}

export {getProductById, productList}
