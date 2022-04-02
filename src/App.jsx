import React, { useEffect, useState } from "react";
import Products from "./components/products/Products";
import Header from "./components/header/Header";
import { addProduct, fetchProductList, deleteProduct } from "./gateway/productsGateway";
import Modal from "./components/modal/Modal";

import './App.css';

function App() {
  const [customStore, setCustomStore] = useState([])
  const [isShowModal, setIsShowModal] = useState(false)

  // modal - window to add new product
  const closeOrShowModal = () => {
    setIsShowModal(!isShowModal)
  }

  const newProduct = (productData) =>
    addProduct(productData).then((response) => {
      if (!response.ok) {
        alert("Internal Server Error. Can't create product");
      }
      fetchProductList().then((productList) => {
        setCustomStore(productList);
      });
    });

  const handleProductRemove = (e) => {
    setCustomStore(
      customStore.filter(({ id }) => {
        // each product has id in attribute value
        if (id === e.target.attributes[0].nodeValue) {
          deleteProduct(id).then((response) => {
            if (!response.ok) {
              alert("Internal Server Error. Can't delete product");
            }
          });
        }
        return id !== e.target.attributes[0].nodeValue;
      })
    );
  };

  useEffect(() => {
    fetchProductList().then(productList => {
      setCustomStore(productList)
    })
  }, [])

  return (
    <div className='product-list'>
      <Header/>
      <Products handleProductRemove={handleProductRemove} customStore={customStore}/>
      <button onClick={closeOrShowModal} className="add-product">+</button>
      {isShowModal && <Modal newProduct={newProduct} closeOrShowModal={closeOrShowModal}/>}
    </div>
  );
}

export default App;
