import React from "react";


export const Header = () => {
  return (
    <div id="menu-container">
      <h1>Hola Mundo</h1>
      <p>Este es el header</p>

      <menu id="menu-content">
        <a href="#" className="menu-index">Inicio</a>
        <a href="#" className="menu-projects">Proyectos</a>
        <a href="#" className="menu-contact">Contacto</a>
      </menu>
    </div>
  );
};

export default Header;
