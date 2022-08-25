import React from 'react';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import About from './components/About';
import Intro from './components/Intro';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Intro />
      <About />
      <Work />
      <Contact />
      <Footer />
    </Layout>
  );
}

export default App;
