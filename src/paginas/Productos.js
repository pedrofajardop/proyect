import React, { useState, useEffect } from 'react';
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import NAvbar from '../componentes/Index';
import { Button } from "react-bootstrap";

export const Productos = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]);
      }
    };

    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    fetchProducts();
  }, []);

  useEffect(() => {

    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productId) => {
    const productInCart = cart.find(product => product.id === productId);

    if (productInCart) {
      setCart(prevCart =>
        prevCart.map(product =>
          product.id === productId
            ? { ...product, quantity: product.quantity + 1 }
            : product
        )
      );
    } else {
      const productToAdd = products.find(product => product.id === productId);
      setCart(prevCart => [...prevCart, { ...productToAdd, quantity: 1 }]);
    }

    setCartTotal(prevTotal => prevTotal + 1);
  };

  const cartList = cart.map((product) => (
    <div key={product.id} className="product-card">
      <img className="imagen" src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price} (Cantidad: {product.quantity})</p>
      <Button className='button1' onClick={() => addToCart(product.id)}> +1</Button>
      <Button className='button1' onClick={() => removeFromCart(product.id)}> -1</Button>
    </div>
  ));
  
  const removeFromCart = (productId) => {
    const productInCart = cart.find(product => product.id === productId);
  
    if (productInCart && productInCart.quantity > 1) {
      // Reducir la cantidad si es mayor que 1
      const updatedCart = cart.map(product =>
        product.id === productId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
  
      setCart(updatedCart);
      // Actualizar localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCartTotal(prevTotal => prevTotal - 1); // Actualizar la cantidad total
    } else {
      // Eliminar el producto del carrito si la cantidad es 1 o menos
      const updatedCart = cart.filter(product => product.id !== productId);
      setCart(updatedCart);
      // Actualizar localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      setCartTotal(prevTotal => prevTotal - 1); // Actualizar la cantidad total
    }
  };
  
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };
  
  return (
    <div>
      <Header />
      <NAvbar/>

      <div className="container mt-4">
        <h2 className="title2 nav-item-text">Productos</h2>
        {products.length > 0 ? (
          <div className="integrantes content shadow">
            {products.map((product) => (
              <div key={product.id} className="product-card">
                <button className='image-button' onClick={() => openModal(product)}>
                  <img className="imagen" src={product.image} alt={product.title} />
                </button>
                <h3>{product.title}</h3>
                <p>${product.price}</p>
                <button onClick={() => addToCart(product.id)} className="item button">
                  Agregar al carro
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p className='nav-item-text'>No hay productos disponibles</p>
        )}

        {cart.length > 0 && (
          <div>
            <h2 className="title2 nav-item-text">Carrito de Compras</h2>
            <div className="integrantes content shadow">{cartList}</div>
            <p className='nav-item-text'>Cantidad total en el carrito: {cartTotal}</p>
          </div>
        )}
      </div>
              {isModalOpen && selectedProduct && (
          <div className="modal1-overlay">
            <div className="modal1">
              <img className="imagen22"src={selectedProduct.image} alt={selectedProduct.title} />
              <h3>{selectedProduct.title}</h3>
              <p>{selectedProduct.description}</p>
              <button onClick={closeModal} className="close-button">
                Cerrar
              </button>
              {/* Otros detalles del producto */}
            </div>
          </div>
        )}
    </div>
  );
};

export default Productos;