import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router } from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Hero from './components/Hero';
import WorkOutSessions from './components/WorkOutSessions';
import BMICalculatore from './components/BMICalculatore';
import "./App.css";

function App() {
  

  return (
    <Router>
      <Navbar/>
      <Hero/>
      <WorkOutSessions/>
      <Gallery/>
      <Pricing/>
      <Contact/>
      <BMICalculatore/>
      <Footer/>
      <ToastContainer theme={"dark"} position={"top-center"}/>
    </Router>
  )
}

export default App
