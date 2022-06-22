import { useCartContext } from "../../Context/CartContext"
import { useState, useEffect } from "react"
import { Form } from "../Form/Form";
import CartDetails from "../CartDetails/CartDetails";



const Cart = () => {

	const { cartList } = useCartContext()

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
	
	return (

		<div>       

			{ emptyCart
			
				?

				<h4>Empty Cart</h4>

				:

				<>
                    <div>
                        <CartDetails />
                            
                        <Form />
                    </div>
				</>

			}

		</div>
		
	)
}

export default Cart

	