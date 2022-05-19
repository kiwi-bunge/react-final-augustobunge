import { useState } from "react"

const ItemCount = ({initial, stock, onAdd}) => {
    const [count, setcount] = useState(initial)

    const add = () => setcount(count+1)
    const reduce = () => setcount(count-1)

    return (
        <div>
            { count }<br/>
            <button onClick={add}>+</button>
            <button onClick={reduce}>-</button><br/>
            <button onClick={()=> onAdd(count)}>Add To Cart</button>
        </div>
    )
}

export default ItemCount

