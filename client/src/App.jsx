import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Authordetails from './pages/Authordetails';
import BookDetails from './pages/BookDetails';
import Display from './pages/Display';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
        <Route index element={<Home/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/Authordetails" element={<Authordetails />} />
        <Route path="/BookDetails" element={<BookDetails />} />
        <Route path="/display" element={<Display />} />
        
        
        
        
        </Route>
        
        
       
      </Routes>
    </Router>
  );
};

export default App;
