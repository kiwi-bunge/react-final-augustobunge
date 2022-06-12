import { useCartContext } from "../../Context/CartContext"



const Cart = () => {

  const { cartList, emptyCart, totalPrice, eliminateProduct } = useCartContext()

  return (

    <div>
      {cartList.map(prod => 

      <div key={prod.id}>

        <li>
          Product: {prod.name} - Price: {prod.price} - Quantity: {prod.quantity} 
        </li>

        <button onClick={()=> eliminateProduct(prod.id)}>
          Eliminate Product
        </button>

      </div>
      )}
      <h3>Total Price: {totalPrice() !== 0 && totalPrice()}</h3>

      <button onClick={emptyCart} >Empty Cart</button>

    </div>
    
    
  )
}

export default Cart

  