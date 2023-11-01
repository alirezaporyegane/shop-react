import {Button, Navbar as NavbarBs} from 'react-bootstrap'
import {BsBasket} from 'react-icons/bs'

export default function Navbar() {
  return (
    <NavbarBs className="border-bottom border-secondary ">
      <NavbarBs.Collapse className="justify-content-end">
        <NavbarBs.Text className="text-white">محصولات</NavbarBs.Text>

        <Button variant="outline-secondary" className="text-white ms-3">
          سبد خرید
          <BsBasket className="ms-2" />
        </Button>
      </NavbarBs.Collapse>
    </NavbarBs>
  )
}
