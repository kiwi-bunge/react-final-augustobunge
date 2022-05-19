import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './containers/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';


function App() {
    
    return (
        <BrowserRouter>
                <div className="App">  
                    <NavBar />
                    
                    <Routes>
                        <Route path="/" element = { <ItemListContainer /> } />
                        <Route path="/category/:id" element = { <ItemListContainer /> } />                        
                        <Route path="/detail/:detailId" element = { <ItemDetailContainer /> } />
                        <Route path="/cart" element = { <Cart /> } />
                                          
                        <Route path="/*" element = { <Navigate to='/' replace  /> } />
                    </Routes>
                </div>
        </BrowserRouter>
    )
}

export default App

