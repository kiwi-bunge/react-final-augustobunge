import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './Context/CartContext'
import Home from './components/Home/Home';



function App() {
    
    return (
        
        <BrowserRouter>
            <CartContextProvider >
                <div className="App">  
                    <NavBar/>
                    
                        <Routes>
                            <Route path="/" element = { <Home /> } />
                            <Route path="/shop" element = { <ItemListContainer /> } />
                            <Route path="/category/:category" element = { <ItemListContainer /> } />
                            <Route path="/detail/:detailId" element = { <ItemDetailContainer /> } />
                            <Route path="/cart" element = { <Cart /> } />
                                            
                            <Route path="/*" element = { <Navigate to='/' replace  /> } />
                        </Routes>
                    
                </div>
            </CartContextProvider>
        </BrowserRouter>
    )
}

export default App

