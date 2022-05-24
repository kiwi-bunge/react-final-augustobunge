import '../../../../src/Products.css';
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

import ItemList from "../../../components/ItemList/ItemList"
import { getFetch } from "../../../helpers/getFetch"
import '../../../App.css'


const ItemListContainer = ( {} ) => {      
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    const { id } = useParams() 

    useEffect(() => {
        if (id) {
            getFetch()
            .then(answer=> setProducts(answer.filter((prods) => prods.category === id)))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))                             
        } else {
            getFetch()
            .then(answer=> setProducts(answer))
            .catch((err)=> console.log(err))
            .finally(()=>setLoading(false))                 
        }
    }, [id])
    
    return (
        <div>
            { loading ? 
                <h2>Loading...</h2> 
                :
                <>
                <div className='itemListContainer'>
                    <ItemList products={products} />                     
                </div>
                
                </> 
            }

            
        </div>
    )
}

export default ItemListContainer
