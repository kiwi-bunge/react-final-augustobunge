import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import Footer from '../../Footer/Footer'
import ItemList from "../../../components/ItemList/ItemList"
import './itemListContainer.css'
import logo from '../../../assets/images/pelotaMundial.png'
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {  

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    const { category } = useParams() 

    useEffect(() => {
      
        const database = getFirestore()

        const queryCollection = collection(database, "products")
       

        if(!category) {

            getDocs(queryCollection)
                .then((answer) => setProducts(answer.docs.map((prod) => ({ id: prod.id, ...prod.data() }))))
                .catch((err)=> console.log(err))
                .finally(()=>setLoading(false))

        } else {

            const queryCollectionFilter = query(queryCollection, where("category","==", category))

            getDocs(queryCollectionFilter)
                .then((answer) => setProducts(answer.docs.map((doc) => ({ id: doc.id, ...doc.data() }))))
                .catch((err)=> console.log(err))
                .finally(()=>setLoading(false))
        }

    }, [category])
    
    return (

        <div>
            { loading ? 
                <img className='App-logo-loading' src={logo} alt="spinning ball"></img>
                :
                <>
                    <div className='title'>
                        {  category ?

                            <h2>{category}</h2>
                            :
                            <h2>All Products</h2>

                        }
                    </div>
                    
                    <div className='itemListContainer'>
                        <ItemList products={products} />                     
                    </div>

                    <Footer />        
                </> 
            }   
        </div>
    )
}

export default ItemListContainer
