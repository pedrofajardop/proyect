import Header from '../componentes/Header'; // Asegúrate de poner la ruta correcta
import NAvbar from '../componentes/Index'; // Asegúrate de poner la ruta correcta
import Footer from '../componentes/Footer'; // Asegúrate de poner la ruta correcta
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { NavLink } from "react-router-dom"

function Reclamo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div >
      <Header/>
      <NAvbar/>
       <div className="container izquierda">
        <Form>
        <Form.Group className="mb-3" controlId="formPedido">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control type="name" placeholder="Ingrese su nombre completo" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPedido">
          <Form.Label>Correo Electrónico</Form.Label>
          <Form.Control type="email" placeholder="Ingrese su correo electrónico" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formPedido">
            <Form.Label>Cuál fue tu problema</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Descripción con detalle lo que pasó"/>
        </Form.Group>  
        
        </Form>
        <Button type="submit" onClick={handleShow} style={{marginBottom:'3rem'}}>
            Enviar
        </Button> 
        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
          <Modal.Header>
            <Modal.Title>Reclamo recibido</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Gracias por comunicarte con nosotros, nos pondremos en contacto contigo lo antes posible.
          </Modal.Body>
          <Modal.Footer>
            <Button type="submit" to="/Principal" as={NavLink}>Volver a la pantalla de Inicio</Button>
          </Modal.Footer>
        </Modal>
    </div>
    </div>
   
  );
}

export default Reclamo;
