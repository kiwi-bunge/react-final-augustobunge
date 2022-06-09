import ItemCount from "../ItemCount/ItemCount"
import '../../App.css'
import Exchange from '../AddToCartEvent/Exchange'
import { useState } from "react"


const ItemDetail = ({product}) => {

  const productId = product.id
  const stock = product.stock
  const initial = 1


  const [count, setCount] = useState(initial)

  const add = () => {

      if(count >= stock) {
          alert("Sorry! We only have", {stock}, " in stock.")
      } else {
      setCount(count+1)}

  }

  const reduce = () => {

    if(count <=1) {
        setCount(count)
    } else {
        setCount(count-1)
    }
    
  }

  function onAdd(amount) {

    console.log(amount)
  }

  return (

      <div className="itemDetails" >
        <div>
          <img alt="product" src={product.img} />
        </div>
        <div>
          <h1>{product.name}</h1>
          <h2>{product.category}</h2>
          <p>{product.price}</p>
          <ItemCount add={add} reduce={reduce} count={count} productId={productId} />
          <Exchange onAdd={() => onAdd(count)} />
        </div>
        
      </div>


  )
}

export default ItemDetail
