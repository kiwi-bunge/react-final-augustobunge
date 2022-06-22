import './ItemCount.css'

const ItemCount = ({add, reduce, productId, count}) => {
     
    return (

        <>
            <div className='itemCount'>
                <button onClick={add}>+</button>
                <p> {count} </p>            
                <button onClick={reduce}>-</button><br/>
            </div>
        </>
    )
}

export default ItemCount

