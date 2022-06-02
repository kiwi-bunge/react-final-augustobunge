import { useState } from "react"
import ButtonCount from "../AddToCartEvent/Exchange"



const ItemCount = ({initial, productId}) => {
    const [count, setCount] = useState(initial)

    const add = () => setCount(count+1)
    const reduce = () => setCount(count-1)
    
    return (

        <div>
            <p> {count} </p>
            <button onClick={add}>+</button>
            <button onClick={reduce}>-</button><br/>
            <h3>Product Id: #{productId}</h3>
            <ButtonCount />        
        </div>
    )
}

export default ItemCount

