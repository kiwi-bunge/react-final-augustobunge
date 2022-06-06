import { useState } from "react";
import { Link } from "react-router-dom";




const InputCount= ()=> {

    return (
        <>
        <Link to='/cart' >
            <button onClick={()=>console.log('go to cart') } >
                Proceed To Payment
            </button>
        </Link>
        <Link to='/' >
            <button onClick={()=> console.log('back home') } >
                Back Home
            </button>
        </Link>
        </>
    )
}

const ButtonCount= ({handleInter, counter})=> {

    const wrapperFunction = () => {
        handleInter();
        console.log(counter)
    }

    return (

        <button onClick={wrapperFunction} >
            Add To Cart
        </button> 
    )
}


const Exchange = () => {

    const [count, setCount ] = useState('button')

    const handleInter=()=>{
        setCount('input')
    }
    
    return (
        <div>
            
            {
                count === 'button' ? 
                    <ButtonCount handleInter={handleInter} />
                : 
                    <InputCount />
            }
             
        </div>
    )
}

export default Exchange
