import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Layout from './components/Layout';
import About from './components/About';
import Intro from './components/Intro';
import Work from './components/Work';
import Contact from './components/Contact';

function App() {
  return (
    <Layout>
      <Intro />
      <About />
      <Work />
      <Contact />
    </Layout>
  );
}

export default App;
