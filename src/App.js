import React from 'react'
import Header from './components/Header/Header';
import MenuMobile from './components/MenuMobile/MenuMobile';
import Footer from './components/Footer/Footer'
import './App.css';
import Routes from './components/Routes/Routes'

function App() {
  return (    
    <div>
      <MenuMobile/>
      <Header />
      <Routes />
      <Footer />
    </div>
    
  );
}
export default App;