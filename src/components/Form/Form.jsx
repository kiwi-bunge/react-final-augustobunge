import React from "react";
import { useState } from "react";
import { useCartContext } from "../../Context/CartContext";
import { collection, getFirestore, addDoc } from "firebase/firestore";
// import "./Form.css";

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

  function newOrder(e) {

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
          alert("Thanks for your purchase" + answer.id)) 
          .catch((err) => console.log(err))
          .finally(eliminateCart())

      }, 2000);
    } else {
        console.log("test")
    }
  }

  return (
    <div className="cartInfo">
      <form onSubmit={(e) => newOrder(e)}>
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

        <button type="submit">Finish Purchase</button>
      </form>
    </div>
  );
};