import ItemCount from "../ItemCount/ItemCount"
import '../../App.css'
import ButtonCount from "../AddToCartEvent/Exchange"


const ItemDetail = ({product}) => {


  return (
    <div className="itemDetails" >
      <div>
        <img alt="product" src={product.img} />
      </div>
      <div  >
        <h1>{product.name}</h1>
        <h2>{product.category}</h2>
        <p>{product.price}</p>
        <ItemCount  initial={1} stock={5} />
      </div>
      
    </div>

  )
}

export default ItemDetail
