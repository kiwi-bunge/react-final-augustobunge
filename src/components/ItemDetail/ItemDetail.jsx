import ItemCount from "../ItemCount/ItemCount"
import './itemDetail.css'
import Exchange from '../AddToCartEvent/Exchange'
import { useState } from "react"
import { useCartContext } from "../../Context/CartContext"


const ItemDetail = ({product}) => {

  const productId = product.id
  const stock = product.stock
  const initial = 1
  const image = product.img



  const [count, setCount] = useState(initial)
  const [alert, setAlert] = useState(false)

  const add = () => {

      if(count >= stock) {

        setAlert(true)
      } else {

        setCount(count+1)}

  }

  const reduce = () => {

    if(count <=1) {

      setCount(count)
    } else {

      setCount(count-1)
    }

    if(count <= stock) {
      setAlert(false)
    }   
  }

  const {addToCart} = useCartContext()
 
  function onAdd(amount) {

    addToCart({ ...product, quantity: amount })
  }

  return (

      <div className="itemDetails" >
        <div>
          <img alt="product" src={image} />
        </div>
        <div>
          <h1>{product.name}</h1>
          <h2>{product.category}</h2>
          <p>${product.price}</p>
          <ItemCount add={add} reduce={reduce} count={count} productId={productId} />
          { !alert ? <h3 className="stockAvailable">Stock Available</h3> : <h3 className="insufficientStock">Insufficient Stock</h3> }
          <Exchange onAdd={() => onAdd(count)} />
        </div>
        
      </div>


  )
}

export default ItemDetail
