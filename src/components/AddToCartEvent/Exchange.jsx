import { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonCount } from "../ButtonCount/ButtonCount";


const InputCount = () => {

    return (
   
        <>        
            <Link to='/cart' >
                <button>
                    Proceed To Payment
                </button>
            </Link>

            <Link to='/' >
                <button>
                    Back Home
                </button>
            </Link>
        </>
    )
}


const Exchange = ({onAdd}) => {

    const [change, setChange ] = useState('button')

    const handleExchange=()=>{
        setChange('input')

    }
    
    return (
        
        <div>
            
            {
                change === 'button' ? 
                    <ButtonCount handleExchange={()=> handleExchange()} onAdd={onAdd} />
                : 
                    <InputCount />
            }
             
        </div>
    )
}

export default Exchange
