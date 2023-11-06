import {Link} from 'react-router-dom'

const Success = () => {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column my-4">
      <h2>سفارش با موفقیت ثبت شد</h2>

      <Link to="/" className="btn btn-success">
        بازگشت به فروشگاه
      </Link>
    </div>
  )
}

export default Success
