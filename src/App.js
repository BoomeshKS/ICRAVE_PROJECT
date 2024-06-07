import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Home />
        <About />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;
