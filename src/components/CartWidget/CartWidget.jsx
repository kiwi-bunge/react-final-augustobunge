import { Link } from 'react-router-dom'
import Img from '../../assets/images/shopping-cart.png'
import '../../App.css'



const CartWidget = () => {
  return (
    <>    
        <Link to='/cart' className='cartWidget'>
          <img src={ Img } alt="photo"/>
        </Link>   
    </>
  )
}

export default CartWidget
