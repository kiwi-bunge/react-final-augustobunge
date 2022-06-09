import logo from '../assets/images/pelotaMundial.png'
import ballImage2 from '../assets/images/mechta.png'
import ballImage3 from '../assets/images/brazuca.png'
import argentina from '../assets/images/argentina.png'
import brazil from '../assets/images/brazil.png'
import france from '../assets/images/france.png'


const productsArray = [

  { id: '1', category: "Balls", name: "Al-Rihla", price: "$ 98.49", img: logo, stock: 12},
  { id: '2', category: "Balls", name: "Adidas Metcha", price: "$ 68.49", img: ballImage2, stock: 14},
  { id: '3', category: "Balls", name: "Brazuca", price: "$ 38.49", img: ballImage3, stock: 15},
  { id: '4', category: "Jerseys", name: "Argentina", price: "$ 58.49", img: argentina, stock: 10},
  { id: '5', category: "Jerseys", name: "Brazil", price: "$ 58.49", img: brazil, stock: 10},
  { id: '6', category: "Jerseys", name: "France", price: "$ 58.49", img: france, stock: 10},
  { id: '7', category: "Boots", name: "Adidas", price: "$ 58.49", img: france, stock: 10},
  { id: '8', category: "Boots", name: "Nike", price: "$ 58.49", img: france, stock: 10},
  { id: '9', category: "Boots", name: "Puma", price: "$ 58.49", img: france, stock: 10},
]

export const getFetch = (id) => {
  return new Promise((resolve)=>{
      setTimeout(()=>{
              const query = id ? productsArray.find(product => product.id === id ) : productsArray                                  
              resolve( query )                           
          }, 1000)
      })            
  
}