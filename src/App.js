
import React, { useState } from 'react';
import './App.css';
import Facade from './Components/Facade';
import Header from './Components/Header';

export const CartContext = React.createContext()

function App() {

  const [cart, setCart] = useState([null])


  return (
    <div className="App">

      <CartContext.Provider value={[cart, setCart]}>
        <Header />
        {/* <BaseLayout /> */}
      </CartContext.Provider>

      <Facade />
      
    </div>
  );
}

export default App;


