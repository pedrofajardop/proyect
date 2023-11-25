import React from "react";
import {NavLink} from "react-router-dom";
import { useState, useEffect } from 'react';
import Modal from '../componentes/Modal';
import Slider from 'react-slick';

/* import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements"; */

import {Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";

const NAvbar = () => {
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
    const gallery = products.map((product) => (
        <div key={product.id} className="product-card">
          <Button><img className="imagen im-center content shadow" src={product.image} alt={product.title} /></Button>
          <p className='im-center'>${product.price}</p>
        </div>
      ));
    const addToCart = (productId) => {
    // Implementa la lógica para agregar productos al carrito
    console.log(`Producto ${productId} agregado al carrito`);
    // Actualiza la cantidad total en el carrito
    setCartTotal((prevTotal) => prevTotal + 1);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
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
        <div className="nav-bg">
        <NavbarBs sticky ="top" className="nav-bg">
            <Container >
            <Nav className="me-auto  primary-nav shadow">
                <div className="nav-item-text margen-top">
                    <input type="text" className="search-box" placeholder="Buscar..." />
                    <button className="search-button">Buscar</button>
                </div>
                <Nav.Link to="/Principal" className="nav-item-text" as={NavLink}>Inicio</Nav.Link>

                <Nav.Link to="/Productos"as={NavLink} className="nav-item-text">Productos</Nav.Link>

            {cartTotal >= 0 && (

                <Nav.Link to="/Carrito" as={NavLink} style={{ position: 'static' }}>
                    <span className="material-symbols-outlined margen-bot">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-filled" width="3rem" height="3rem" viewBox="0 0 30 24" stroke-width="1" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" stroke-width="0" fill="currentColor" />
                    </svg>
                    </span>
                </Nav.Link>
            )}
                <Nav.Link>
                    <div className="App">
                        <button className="button1"onClick={openModal}>Iniciar sesión</button>
                        <Modal isOpen={isModalOpen} onClose={closeModal} />
                    </div>
                </Nav.Link>
            </Nav>
            </Container>
        </NavbarBs>
</div>
    )
};
 
export default NAvbar;


/* return (
    <>
        <Nav>
            <Bars />
            <NavMenu>
                <NavLink to="/" >
                    Inicio
                </NavLink>
                <NavLink to="/events" activeStyle>
                    Tendencias
                </NavLink>
                
                <NavLink to="/blogs" activeStyle>
                    Productos
                </NavLink>
                <NavLink to="/sign-up" activeStyle>
                    Cuenta
                </NavLink>
            </NavMenu>
            <NavBtn>
                <NavBtnLink to="/signin">
                    Sign In
                </NavBtnLink>
            </NavBtn>
            <div>
                <NavLink to="/Carrito"> 
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-shopping-cart-filled" width="28" height="28" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" stroke-width="0" fill="currentColor" />
                    </svg>
                </NavLink>
            </div>
        </Nav>
    </>
); */