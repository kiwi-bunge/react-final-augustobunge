import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import '../../App.css'
import logo from '../../assets/images/pelotaMundial.png'


const array = [
    {idCategory: '1', name: 'Balls', nameButton: 'Balls'},
    {idCategory: '2', name: 'Jerseys', nameButton: 'Jerseys'},
    {idCategory: '3', name: 'Boots', nameButton: 'Boots'}
]
const NavBar = () => {

    return (
        
            <div className="App-navbar" >

                <NavLink to="/">
                    <img className='App-logo' src={logo} alt="spinning ball"></img>
                </NavLink>

                <NavLink className="navBarLinks" key="home" to="/">World Cup 2022</NavLink>

                {array.map(param => <NavLink className="navBarLinks" key={param.idCategory} to={`/category/${param.name}`}>{param.nameButton}</NavLink>) }

                <CartWidget />

            </div> 
     
    )
}

export default NavBar
