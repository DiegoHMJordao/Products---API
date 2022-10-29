import React from 'react'
import Header from './components/Header/Header';
import MenuMobile from './components/MenuMobile/MenuMobile';
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'
import './App.css';

function App() {
  return (    
    <div>
      <MenuMobile/>
      <Header />
      <Home />
      <Footer />
    </div>
    
  );
}
export default App;