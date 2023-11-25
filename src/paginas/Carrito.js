import React, { useEffect, useState } from 'react';
import Header from '../componentes/Header';
import NAvbar from '../componentes/Index';
import Footer from '../componentes/Footer';
import { Button } from 'react-bootstrap';

function Carrito() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Recuperar el carrito del localStorage al cargar la página
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  const renderCart = () => {
    return cart.map((product) => (
      <div key={product.id} className="product-card">
        <img className="imagen" src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price} (Cantidad: {product.quantity})</p>
        <Button onClick={() => addToCart(product.id)}>+1</Button>
        <Button onClick={() => removeFromCart(product.id)}>-1</Button>
      </div>
    ));
  };

  const addToCart = (productId) => {
    const productInCart = cart.find(product => product.id === productId);
    if (productInCart && productInCart.quantity > 1) {
      // Reducir la cantidad si es mayor que 1
      const updatedCart = cart.map(product =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      setCart(updatedCart);
      // Actualizar localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    } else {
      // Eliminar el producto del carrito si la cantidad es 1 o menos
      const updatedCart = cart.filter(product => product.id !== productId);
      setCart(updatedCart);
      // Actualizar localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

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
    } else {
      // Eliminar el producto del carrito si la cantidad es 1 o menos
      const updatedCart = cart.filter(product => product.id !== productId);
      setCart(updatedCart);
      // Actualizar localStorage
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    cart.forEach((product) => {
      totalPrice += product.price * product.quantity;
    });
    return totalPrice;
  };

  return (
    <div>
      <Header />
      <NAvbar />
      <div className="Carrito">
        <h2>Carrito de Compras</h2>
        {cart.length > 0 ? (
          <div className="cart-container">
            {renderCart()}
          </div>
        ) : (
          <p>No hay productos en el carrito</p>
        )}
        <div className="total-price">
          <p>Total: ${calculateTotalPrice()}</p>
          <Button variant="primary">Checkout</Button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Carrito;
