import { Link } from "react-router-dom"
import '../../App.css'

const Item = ( {prod} ) => {

  return (
      <div className="itemContainer">                      
        <Link className="itemDetails" to={`/detail/${prod.id}`}>
            <div className="itemDetails" >
                <div className="itemDetails" >
                    {`${prod.name}`}
                </div>
                <div>
                    <img src={prod.img} alt=''/>                                                            
                </div>
                <div className="itemDetails" >{prod.price}</div>
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
