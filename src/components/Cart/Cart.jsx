import { useCartContext } from "../../Context/CartContext"
import { useState, useEffect } from "react"
import { Form } from "../Form/Form";



const Cart = () => {

  const { cartList, eliminateCart, totalPrice, eliminateProduct } = useCartContext()

  const [emptyCart, setEmptyCart] = useState(true)

  function checkCart() {

    if(cartList !== []) {

      setEmptyCart(false)
    }

    if(cartList === [])

      setEmptyCart(true)
  }
  
  useEffect(() => {
    checkCart()
  })

  console.log(cartList)
  console.log(emptyCart)
  
  return (

    <div> 

          

      { emptyCart
      
        ?

        <h4>Empty Cart</h4>

        :

        <>

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

            <button onClick={eliminateCart} >Empty Cart</button>
          </div>
          
          <Form />

        </>

      }

    </div>
  
    
  )
}

export default Cart

  