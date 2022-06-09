
const ItemCount = ({add, reduce, productId, count}) => {

    
    return (

        <div>
            <p> {count} </p>
            <button onClick={add}>+</button>
            <button onClick={reduce}>-</button><br/>
            <h3>Product Id: #{productId}</h3>
        </div>
    )
}

export default ItemCount

