import React from "react";
import MiSvg from './shop-bag-svgrepo-com.svg'

function Header() {
  return (
    <header className="title">
      <div className="logo">
      <img src={MiSvg} alt="Descripción del SVG" />
      </div>
      <div> 
        <h1 className="">TIENDA ROJOPE</h1>
      </div>
  
    </header>
  );
}

export default Header;


{/* <div style={{padding: 1,
                  color: "black", backgroundColor: 'pink'}}>
        <h1>Tienda RoJoPe</h1>
      </div> */}