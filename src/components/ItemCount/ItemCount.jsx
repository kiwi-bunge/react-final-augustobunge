import { useState } from "react"
import ButtonCount from "../AddToCartEvent/Exchange";



const ItemCount = ({initial, productId}) => {

    const [count, setCount] = useState(initial)

    const add = () => {

        if(count >= 10) {
            alert("Sorry! We only have 10 in stock.")
        } else {
        setCount(count+1)}}

    const reduce = () => {

        if(count <=1) {
            setCount(count)
        } else {
            setCount(count-1)
        }
    }       

    return (

        <div>
            <p> {count} </p>
            <button onClick={add}>+</button>
            <button onClick={reduce}>-</button><br/>
            <h3>Product Id: #{productId}</h3>
            <ButtonCount counter={count} />        
        </div>
    )
}

export default ItemCount

