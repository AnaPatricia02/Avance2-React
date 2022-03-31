import * as React from "react";
import { Routes, Route, BrowserRouter} from "react-router-dom";
import { Login } from "./components/Login";
import {LoginR} from "./components/LoginR";
import {Usuario} from "./components/usuario";
import {ContenidoU}from "./components/contenidoU";

export const AppRouter = () => { 
  return (
    <BrowserRouter>
      <Routes>
        
        <Route path="/Login" element={<Login />} />
        <Route path="/LoginR" element={<LoginR />} /> 
        <Route path="/usuario" element={<Usuario />} /> 
        <Route path="/contenidoU" element={<ContenidoU />} />          
        
      </Routes>
    </BrowserRouter>
  );
}

