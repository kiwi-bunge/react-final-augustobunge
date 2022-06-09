
const ItemCount = ({add, reduce, productId, count}) => {

    
    return (

        <div>
            <p> {count} </p>
            <button onClick={add}>+</button>
            <button onClick={reduce}>-</button><br/>
            <p>Product Id: #{productId}</p>
        </div>
    )
}

export default ItemCount

