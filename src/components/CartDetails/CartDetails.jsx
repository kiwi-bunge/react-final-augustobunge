import { useCartContext } from "../../Context/CartContext"
import './CartDetails.css'

export default function CartDetails() {

    const { cartList, totalPrice, eliminateCart, eliminateProduct } = useCartContext();

    return (


        <div className="cartContainer">

            <h2>Your cart</h2>

            {   cartList.map(prod => 

                                <div className="cartItems" key={prod.id}>

                                    <li className="cartInfo">
                                        <p>Product: {prod.name}</p>
                                        <p>Price: $ {prod.price}</p>
                                        <p>Quantity: {prod.quantity}</p>
                                        {/* Product: {prod.name} - Price: {prod.price} - Quantity: {prod.quantity}  */}
                                    </li>

                                    <button onClick={()=> eliminateProduct(prod.id)}>
                                        X
                                    </button>

                                </div>
                            )
            }

                <h3>Total Price: $ {totalPrice() !== 0 && totalPrice()}</h3>

                <button onClick={eliminateCart}>Empty Cart</button>
        </div>
    )

}