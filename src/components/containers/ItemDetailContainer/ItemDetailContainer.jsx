import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../../ItemDetail/ItemDetail'
import logo from '../../../assets/images/pelotaMundial.png'
import { getFirestore, doc, getDoc } from 'firebase/firestore'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const { detailId } = useParams()


    useEffect(() => {

        const database = getFirestore()
        const dbQuery = doc(database, 'products', detailId)
        getDoc(dbQuery)
        .then(answer => setProduct( { id: answer.id, ...answer.data() } ))
        .catch((err)=> console.log(err))
        .finally(()=>setLoading(false))
        
      }, [detailId])
    
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