import { Link } from 'react-router-dom'
import Img from '../../assets/images/shopping-cart.png'
import './cartWidget.css'
import { useCartContext } from '../../Context/CartContext'

const CartWidget = () => {

  const { totalQuantity } = useCartContext()

  return (
    
    <>  
         
        <Link to='/cart' className='cartWidget'>

          <img src={ Img } alt="shopping cart icon"/>
          <div>{totalQuantity() !== 0 && totalQuantity()}</div> 
          
        </Link>   
    </>
  )
}

export default CartWidget
