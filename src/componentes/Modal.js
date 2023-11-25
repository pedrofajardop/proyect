import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Iniciar sesión con:', username, password);
    onClose();
  };

  return (
    <>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="nav-item-text">Iniciar Sesión</h2>
            <label className="nav-item-text" htmlFor="username">Usuario/Correo Electrónico:</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="nav-item-text" htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="button1"onClick={handleLogin}>Iniciar Sesión</button>
            <button className="button1"onClick={onClose}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
