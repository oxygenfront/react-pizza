import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './components';
import { Cart, Home } from './pages';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <Header />
        <div className='content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </div>
      </div>
    </div>
  );
} 
export default App;
