import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../ItemDetail/ItemDetail'
import { getFetch } from '../../../helpers/getFetch'
import logo from '../../../assets/images/pelotaMundial.png'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { detailId } = useParams()

    useEffect(() => {
        getFetch(detailId)  
        .then(answer=> setProduct(answer))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false)) 
     
    })
    
    return (
        <div>
            {   
                loading 
                    ?
                        <img className='App-logo-loading' src={logo} alt="spinning ball"></img>
                    :
                        <ItemDetail product={product} />
            }
            
        </div>
    )
}

export default ItemDetailContainer