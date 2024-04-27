import './App.css';
import Header from './components/Header';
import Products from './components/Products/Product';
import { Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/basket" element={<Cart />} />
        </Routes>
        
    </div>
  );
}


export default App;
