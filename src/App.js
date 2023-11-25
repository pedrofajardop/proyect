import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './paginas/Principal';
import Errorpagina from "./paginas/Errorpagina";
import Reclamo from './paginas/Reclamo';
import Terminos from './paginas/Terminos';
import Carrito from './paginas/Carrito';
import Productos from './paginas/Productos';
import Footer from './componentes/Footer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element= {<Principal/>} />
          <Route path="/Principal" element = {<Principal/>} />
          <Route path="/Reclamo" element = {<Reclamo/>} />
          <Route path='/Terminos' element = {<Terminos/>} />
          <Route path='/Carrito' element = {<Carrito/>} />
          <Route path='*' element = {<Errorpagina/>} />
          <Route path='/productos' element = {<Productos/>}/>
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
