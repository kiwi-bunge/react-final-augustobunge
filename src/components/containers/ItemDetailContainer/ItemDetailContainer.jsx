import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../ItemDetail/ItemDetail'
import { getFetch } from '../../../helpers/getFetch'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const { detailId } = useParams()

    useEffect(() => {
        getFetch(detailId)  
        .then(answer=> setProduct(answer))
        .catch((err)=> console.log(err))
     
    }, [])
    
    return (
        <div>
            <ItemDetail product={product}  />
        </div>
    )
}

export default ItemDetailContainer