import Greeting from './components/greeting/Greeting.jsx'
import CarritoCompras from './components/carrito/CarittoCompras.jsx';
import ContadorCarrito from './components/carrito/ContadorCarrito.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <span>Mi primer componente</span>
      <Greeting />
      <CarritoCompras />
      <ContadorCarrito />
    </div>
  );
}

export default App;
