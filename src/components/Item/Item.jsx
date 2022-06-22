import { Link } from "react-router-dom"
import './item.css'

const Item = ( {prod} ) => {

  return (
    
        <div className="itemContainer">                      
            <Link className="itemInCategory" to={`/detail/${prod.id}`}>
                <div>
                    <div className="item" >
                        {prod.name}
                    </div>
                    <div className="item" >
                        <img src={prod.img} alt=''/>                                                            
                    </div>
                    <div className="item" >Price: ${prod.price}</div>
                    <div>  
                        <button>
                            Product Detail
                        </button>                
                    </div>
                </div>
            </Link>                                                                                
        </div>
    )
}

export default Item
