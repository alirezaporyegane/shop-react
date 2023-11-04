import {Col, Row} from 'react-bootstrap'
import ProductItem from '../Components/ProductItem'
import {productList} from '../data/product'

export default function Shop() {
  return (
    <Row xs={2} md={4} className="mt-4">
      {productList.map((item) => (
        <Col key={item.id} className="mb-4">
          <ProductItem image={item.image} title={item.title} price={item.price} id={item.id} />
        </Col>
      ))}
    </Row>
  )
}
