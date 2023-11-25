import React, { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";
import {Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import Header from '../componentes/Header';
import NAvbar from '../componentes/Index';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const Principal = () => {
  const [products, setProducts] = useState([]);
  const [cartTotal, setCartTotal] = useState(0); // Nuevo estado para la cantidad total en el carrito

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setProducts([]); // Puedes ajustar esto según tus necesidades
      }
    };

    fetchProducts();
  }, []);
  const YourLeftArrowComponent = (props) => (
    <div {...props} className="arrow left-arrow">
      <span>&#9664;</span>
    </div>
  );
  
  const YourRightArrowComponent = (props) => (
    <div {...props} className="arrow right-arrow">
      <span>&#9654;</span>
    </div>
  );
  
  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <YourLeftArrowComponent />, 
    nextArrow: <YourRightArrowComponent />, 
  };
  

  const gallery = products.map((product) => (
    <div key={product.id} className="product-card">
      <button className='image-button'><img className="imagen im-center content shadow" src={product.image} alt={product.title} /></button>
      <p className='im-center'>${product.price}</p>
    </div>
  ));

  const addToCart = (productId) => {
    // Implementa la lógica para agregar productos al carrito
    console.log(`Producto ${productId} agregado al carrito`);
    // Actualiza la cantidad total en el carrito
    setCartTotal((prevTotal) => prevTotal + 1);
  };

  const productList = products.map((product) => (
    <div key={product.id} className="product-card">
      <img className="imagen" src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <button onClick={() => addToCart(product.id)} className="button">
        Agregar al carro
      </button>
    </div>
  ));
  

  return (
    <div>
      <Header />
      <NAvbar/>
      
      <section className="">
        <div className="contenido-objetivos">
          <p className="parrafo nav-item-text">
            ¡Bienvenido a nuestra tienda online, el destino perfecto para encontrar la fusión ideal entre estilo y funcionalidad! Sumérgete en un mundo donde la moda se encuentra con la comodidad, y la innovación se entrelaza con la elegancia. En nuestro rincón virtual, te invitamos a explorar una cuidadosa selección de productos que no solo siguen las últimas tendencias, sino que también se adaptan a tu estilo de vida. Desde prendas de vestir hasta accesorios, cada artículo ha sido elegido pensando en ofrecerte calidad, versatilidad y un toque de originalidad.
          </p>
        </div>
      </section>
      <div>
        <h2 className="title2 nav-item-text">Destacados</h2>
        <div style={{height: "auto", width: 'auto' , minHeight: '70vh', margin: '25px' }}>
          <section className="gallery-section">
            {products.length > 0 ? (
              <Slider {...sliderSettings}>{gallery}</Slider>
            ) : (
              <p>No hay productos disponibles</p>
            )}
          </section>
        </div>
      </div>
    </div>
  );
};
export default Principal;
