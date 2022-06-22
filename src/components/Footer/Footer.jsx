import facebook from '../../assets/images/facebook.png'
import instagram from '../../assets/images/instagram.png'
import github from '../../assets/images/github.png'
import './Footer.css'

const Footer = () => {

    return (

        <>
            <div className="footer">

                <img src={facebook} alt="" />
                <img src={instagram} alt="" />
                <img src={github} alt="" />

            </div>
            
            <div className='copyrights'>
                <p>Developed by KeeweeOnline</p>
            </div>
        </>
    )
}

export default Footer