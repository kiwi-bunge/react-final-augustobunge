import { NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import '../../App.css'
import logo from '../../assets/images/pelotaMundial.png'


const array = [
    {idCategory: '1', name: 'Balls', nameButton: 'Balls'},
    {idCategory: '2', name: 'Jerseys', nameButton: 'Jerseys'}
]
const NavBar = () => {

    return (
        <>
            <navbar className="App-navbar" >

                <NavLink to="/">
                    <img className='App-logo' src={logo}></img>
                </NavLink>

                <NavLink className="navBarLinks" to="/">World Cup 2022</NavLink>

                {array.map(param => <NavLink className="navBarLinks" key={param.id} to={`/category/${param.name}`}>{param.nameButton}</NavLink>) }

                <CartWidget />

            </navbar> 
        </>
    )
}

export default NavBar
