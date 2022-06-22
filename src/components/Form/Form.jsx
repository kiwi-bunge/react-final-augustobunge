import React from "react";
import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { collection, getFirestore, addDoc, where, writeBatch, documentId, query, getDocs } from "firebase/firestore";
import "./Form.css";
import Footer from '../Footer/Footer'

export const Form = () => {

  const db = getFirestore();
  const { cartList, eliminateCart } = useCartContext();

  const total = cartList.reduce(

    (acc, item) => (acc = acc + parseFloat(item.price) * item.quantity),
    0
  );

  const [buyer, setBuyer] = useState({

    name: "",
    email: "",
    emailConfirm: "",
    lastName: "",
    adress: "",
    city: ""
  });

  function handleInputChange(e) {

    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  }

  async function newOrder(e) {

    e.preventDefault();

    let order = {};

    if (buyer.email === buyer.emailConfirm) {

      order.buyer = buyer;

      order.date = new Date();

      order.items = cartList.map((item) => {

        const id = item.id;
        const name = item.name;
        const price = item.price;
        const quantity = item.quantity;

        return { id, name, price, quantity };

      });

      order.total = total;

      const queryCollectionOrders = collection(db, "orders");

      setTimeout(() => {

        addDoc(queryCollectionOrders, order)
          .then((answer) =>
            alert("Thanks for your purchase! The order number is:" + answer.id)) 
          .catch((err) => console.log(err))
          .finally(eliminateCart())

      }, 2000);

    } else {

        alert("Emails are not the same, please check again.")
    }

    const queryCollectionStocks = collection(db, 'products');

    const queryUpdateStocks = query(queryCollectionStocks, where(documentId(), 'in', cartList.map(item => item.id)));

    const batch = writeBatch(db)

    await getDocs(queryUpdateStocks)

    .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: res.data().stock - cartList.find(item => item.id === res.id).quantity})
          ))
    .catch(err => console.log(err))
    .finally(()=> console.log("updated"))

    batch.commit()
    
  }

  return (

    <>
      
        <div className="form">
          <form onSubmit={(e) => newOrder(e)}>

            <div>

              <h2>Complete Purchase</h2>

              <h3>Confirm Email</h3>

              <input
                type="email"
                required
                placeholder="Email"
                name="email"
                onChange={handleInputChange}
              />
              <input
                type="email"
                required
                placeholder="Confirm email"
                name="emailConfirm"
                onChange={handleInputChange}
              />
            </div>

            <div>

              <h4>Names</h4>

              <input
                type="text"
                required
                placeholder="First Name"
                name="name"
                onChange={handleInputChange}
              />
              <input
                type="text"
                required
                placeholder="Last Name"
                name="lastName"
                onChange={handleInputChange}
              />
            </div>

            <div>

              <h4>Address</h4>

              <input
                type="text"
                required
                placeholder="Address"
                name="address"
                onChange={handleInputChange}
              />
              <input
                type="text"
                required
                placeholder="City"
                name="city"
                onChange={handleInputChange}
              />
            </div>

            <button type="submit">Buy Now</button>
          </form>
        </div>

        <Footer />
    </>
  );
};