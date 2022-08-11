import React from 'react';
import './App.css';
import Header from './features/header/Header';
import Main2 from './features/liked/Main2';
import Main1 from './features/posts/Main1';
import { Route,Routes, useLocation } from "react-router-dom";
import UserName from './features/username/UserName';
import { AnimatePresence } from 'framer-motion';


function App() {

  const location = useLocation()

  return (
    <div className="App">
      <Header/>
      <UserName/>

      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/posts" element={<Main1/>} />
          <Route path="/liked" element={<Main2/>} />
        </Routes>
      </AnimatePresence>
      
    </div>
  );
}

export default App;
