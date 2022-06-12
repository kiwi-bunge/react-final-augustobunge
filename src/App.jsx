import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/containers/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import CartContextProvider from './Context/CartContext'



function App() {
    
    return (
        
        <BrowserRouter>
            <CartContextProvider >
                <div className="App">  
                    <NavBar/>
                    
                        <Routes>
                            <Route path="/" element = { <ItemListContainer /> } />
                            <Route path="/category/:id" element = { <ItemListContainer /> } />
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

