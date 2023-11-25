import './App.css';
import Navbar from "./componentes/Navbar";
import Header from './componentes/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Principal from './paginas/Principal';
import Pedro from "./paginas/Pedro";
import Rosario from './paginas/Rosario';
import Josefa from './paginas/Josefa';
import Errorpagina from "./paginas/Errorpagina";


function Footer() {
  return(
    <footer class="footer">
    <p>2023-02 Diseño de Software TICS316</p>
</footer>    
  )
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element= {<Principal/>} />
          <Route path="/Principal" element = {<Principal/>} />
          <Route path="/Pedro" element = {<Pedro/>} />
          <Route path="/Rosario" element = {<Rosario/>} />
          <Route path="/Josefa" element = {<Josefa/>} />
          <Route path='*' element = {<Errorpagina/>} />
        </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
