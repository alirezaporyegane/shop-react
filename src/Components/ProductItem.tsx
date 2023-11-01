import {Button, Card} from 'react-bootstrap'
import {BsBasket2} from 'react-icons/bs'

interface IProps {
  title: string
  image: string
  price: number
}

export default function ProductItem(props: IProps) {
  return (
    <Card className="rounded-5">
      <Card.Img variant="top" src={props.image} />

      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        <Card.Text>{props.price}</Card.Text>

        <Button className="rounded-4">
          افزودن به سبد خرید
          <BsBasket2 className="ms-2" />
        </Button>
      </Card.Body>
    </Card>
  )
}
