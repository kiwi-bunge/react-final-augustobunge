import { useState } from "react"
import ButtonCount from "../AddToCartEvent/Exchange"



const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setcount] = useState(initial)

    const add = () => setcount(count+1)
    const reduce = () => setcount(count-1)


    return (

        <div>
            { count }<br/>
            <button onClick={add}>+</button>
            <button onClick={reduce}>-</button><br/>
            <ButtonCount onAdd={count}/>
        </div>
    )
}

export default ItemCount

