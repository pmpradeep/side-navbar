
import Sidenav from './Sidenav'
import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Products from "./pages/Products"
import Reports from './pages/Reports';
import NoPage from './pages/Nopage';
import Messages from './pages/Messages';
import Team from './pages/Team';

function App() {

  return (
    <BrowserRouter>

      {/* <div className='App'>
        <
        <Sidenav />
     

      </div> */}
      <Routes>
        <Route path="/" element={<Sidenav />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="reports" element={<Reports />} />
          <Route path="team" element={<Team />} />
          <Route path="messages" element={<Messages />} />
          <Route path="*" element={<NoPage />} />
         
        </Route>
      </Routes>
    </BrowserRouter>


  );
}

export default App;
