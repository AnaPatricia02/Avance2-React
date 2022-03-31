//import React, { Component } from "react";
import { render } from "@testing-library/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import './LoginR.css';

export const LoginR = () => { 
    
    const navigate = useNavigate();

    const handle = () => {
        navigate('/contenidoU', {
            replace: true
        });
    }

        return (

            <form class="form">  
                <h3>Registrate</h3><p></p>
                <div className="form-group">
                    <label>Nombre</label>
                    <input type="nombre" className="form-control" placeholder="Nombre(s)" />
                </div>
                <div className="form-group">
                    <label>Apellidos</label>
                    <input type="apellidos" className="form-control" placeholder="Apellidos" />
                </div>
                <div className="form-group">
                    <label>Correo Electronico</label>
                    <input type="correo" className="form-control" placeholder="Correo@correo.com" />
                </div>
                <div className="form-group">
                    <label>Cedula Profesional</label>
                    <input type="cedula" className="form-control" placeholder="8 digitos" />
                </div>
                <div className="form-group">
                    <label>Especialidad</label>
                    <input type="especialidad" className="form-control" placeholder="ej.Dentista" />
                </div>
                <div className="form-group">
                    <label>Telefono</label>
                    <input type="Telefono" className="form-control" placeholder="10 digitos" />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="contraseña" className="form-control" pattern="/^[a-zA-Z0-9$@$!#%*?=+-\_\-]{8,}$/"/>
                </div>
                <div className="form-group">
                    <label>Repetir Contraseña</label>
                    <input type="contraseña2" className="form-control"/>
                </div>
                
                <div class="input-contenedor-file">
                <label>Cargar imagen</label>
                <button class="form-element" type="submit" className="btn btn-primary btn-block">Imagen</button><p></p>
                </div>
               
                <button class="form-element" type="submit" className="btn btn-primary btn-block" onClick={handle}>Registrate</button>
                
            </form>

        );
    
}
