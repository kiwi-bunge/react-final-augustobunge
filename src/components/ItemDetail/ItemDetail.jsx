import ItemCount from "../ItemCount/ItemCount"
import '../../App.css'



const ItemDetail = ({product}) => {

  const productId = product.id

  console.log(productId)

  return (
    <div className="itemDetails" >
      <div>
        <img alt="product" src={product.img} />
      </div>
      <div>
        <h1>{product.name}</h1>
        <h2>{product.category}</h2>
        <p>{product.price}</p>
        <ItemCount initial={1} productId= {productId}/>
      </div>
      
    </div>

  )
}

export default ItemDetail
