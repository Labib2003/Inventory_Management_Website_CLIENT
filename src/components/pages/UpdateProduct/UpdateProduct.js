import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const { name, user, image, description, price, quantity, supplier } = product;

  const quantityIncrementRef = useRef(0);

  // updating the ui each time an update messege comes from the server
  const [updateMsg, setUpdateMsg] = useState({});

  useEffect(() => {
    const url = `https://inventory-management-server-f0ho.onrender.com/products/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [updateMsg]);

  // increasing or decreasing the quantity
  const updateQuantity = (newQuantity) => {
    const url = `https://inventory-management-server-f0ho.onrender.com/products/${id}`;
    fetch(url, {
      method: "PATCH",
      body: JSON.stringify({
        quantity: newQuantity,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => setUpdateMsg(json));
  };

  const decreaseQuantityByOne = () => {
    const newQuantity = parseInt(quantity) - 1;
    updateQuantity(newQuantity);
  };

  const increaseQuantity = (event) => {
    event.preventDefault();
    const newQuantity =
      parseInt(quantity) + parseInt(quantityIncrementRef.current.value);
    updateQuantity(newQuantity);
    quantityIncrementRef.current.value = 0;
  };

  return (
    <div className="container mx-auto flex flex-col md:flex-row p-3">
      <Helmet>
        <title>UpdateProduct - EasyInventory</title>
      </Helmet>
      <img
        className="w-full md:w-1/3 mb-5 md:mb-0 mx-auto mr-10"
        src={image}
      ></img>
      <div className="text-left my-auto">
        <h3 className="text-3xl text-gray-900 font-semibold mb-5">{name}</h3>
        <p className="text-xl text-gray-800 mb-3">
          Added By: <span className="font-semibold">{user}</span>
        </p>
        <p className="text-xl text-gray-800 mb-3">{description}</p>
        <div className="flex mb-3 text-gray-700">
          <p className="mr-3">
            Price:
            <span className="font-semibold">${price}</span>
          </p>
          <p>
            Supplier:
            <span className="font-semibold">{supplier}</span>
          </p>
        </div>
        <div className="block md:flex mb-3 text-gray-700">
          <p className="mr-3 my-auto mb-3 md:mb-0">
            Quantity:
            <span className="font-semibold">{quantity}</span>
          </p>
          <button
            onClick={decreaseQuantityByOne}
            className="text-xl text-white font-semibold bg-blue-500 rounded-md px-3 py-1 hover:bg-blue-400"
          >
            Deliver
          </button>
        </div>
        <form onSubmit={increaseQuantity} className="mb-5">
          <input
            className="bg-blue-200 rounded-md px-3 py-1 mr-3"
            placeholder="Restock This Item"
            type="number"
            min="0"
            ref={quantityIncrementRef}
          ></input>
          <input
            className="text-xl text-white font-semibold bg-blue-500 rounded-md px-3 py-1 hover:bg-blue-400"
            type="submit"
            value="Restock"
          ></input>
        </form>
        <Link
          className="text-xl text-white font-semibold bg-blue-500 rounded-md px-3 py-1 hover:bg-blue-400"
          to="/manage"
        >
          Manage Inventory
        </Link>
      </div>
    </div>
  );
};

export default UpdateProduct;
