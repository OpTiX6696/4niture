
import React from 'react';
import './App.css';
import Facade from './Components/Facade';

function App() {
  return (
    <div className="App">

      <CartContext.Provider value={[cart, setCart]}>
        <Header />
      </CartContext.Provider>
   

      <Facade />
      
    </div>
  );
}

export default App;


