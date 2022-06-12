import { createContext, useContext, useState } from "react";


const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext)

const CartContextProvider = ({children}) => {  
    
    const [cartList, setCartList] = useState([])

    function addToCart(item) {

        const index = cartList.findIndex((el) => el.id === item.id)         
        
        if (index !== -1) {

            const previousQuantity = cartList[index].quantity

            const newCart = cartList.filter(prod => prod.id !== item.id)

            item.quantity += previousQuantity

            setCartList([...newCart, item])

            } else {

                setCartList([...cartList, item])                
            }};

    const eliminateProduct = (id) => {
        
        setCartList(cartList.filter(prod => prod.id !== id))
    }

    const totalQuantity = () => {
        
        return cartList.reduce((counter, product) => counter += product.quantity, 0)
    }

    const totalPrice = () => {

        return cartList.reduce((counter, product) => counter + (product.quantity * product.price), 0).toFixed(2)
    }


    const emptyCart = () => {

        setCartList([])
    }

    return (

        <CartContext.Provider value={{
            cartList,
            addToCart,
            eliminateProduct,
            totalQuantity,
            totalPrice,
            emptyCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider