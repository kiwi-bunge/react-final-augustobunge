import ItemCount from "../ItemCount/ItemCount"
import '../../App.css'

function onAdd(quantity) {
  console.log(quantity)
}

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
      </div>
      <ItemCount initial={1} stock={5} onAdd={onAdd}/>
    </div>

  )
}

export default ItemDetail
