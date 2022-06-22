import { Link } from 'react-router-dom'
import homeBackground from '../../assets/images/homeBackground.jpg'
import Footer from '../Footer/Footer'
import './Home.css'

const Home = () => {

    return (

        <>
            <div className='home'>
                <img src={homeBackground} alt=""/>

                <Link to="/shop"  className='shopNow'>
                    <div>
                        <h1>Shop Now</h1>
                    </div>
                </Link>
            </div>

            <Footer />
        </>

    )
}

export default Home