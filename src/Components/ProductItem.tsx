import {useContext} from 'react'
import {Button, Card, Col, Form, Row} from 'react-bootstrap'
import {BsBasket2, BsTrash} from 'react-icons/bs'
import {CartContext} from '../context/CartContext'

interface IProps {
  id: number
  title: string
  image: string
  price: number
}

export default function ProductItem(props: IProps) {
  const cart = useContext(CartContext)

  const productQuantity = cart.getProductQuantity(props.id)

  return (
    <Card className="rounded-5 card-bg">
      <Card.Img className="p-3" variant="top" src={props.image} />

      <Card.Body className="text-center">
        <Card.Title>{props.title}</Card.Title>

        <Card.Text dir="rtl">{props.price} تومان</Card.Text>

        {productQuantity > 0 ? (
          <>
            <Form as={Row}>
              <Form.Label column={true} sm="4" className="text-white">
                تعداد: {productQuantity}
              </Form.Label>

              <Col sm="8">
                <Button
                  className="mx-2 text-white"
                  variant="outline-secondary"
                  onClick={() => cart.addItemToCart(props.id)}
                >
                  +
                </Button>

                <Button
                  className="mx-2 text-white"
                  variant="outline-secondary"
                  onClick={() => cart.removeItemFromCart(props.id)}
                >
                  -
                </Button>

                <Button
                  className="mx-2 text-white"
                  variant="outline-secondary"
                  onClick={() => cart.deleteFromCart(props.id)}
                >
                  <BsTrash />
                </Button>
              </Col>
            </Form>
          </>
        ) : (
          <Button className="text-white" variant="outline-secondary" onClick={() => cart.addItemToCart(props.id)}>
            افزودن به سبد خرید
            <BsBasket2 className="ms-2" />
          </Button>
        )}
      </Card.Body>
    </Card>
  )
}
