//import 'node_modules/bootstrap/dist/css/bootstrap.min.css';
import { render } from "@testing-library/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';


export const Login = () => {

    const navigate = useNavigate();

    const handle = () => {
        navigate('/LoginR', {
            replace: true
        });
    }

        return (
            <form class="form">  
                <h3>Iniciar Secion</h3><p></p>
                <div className="form-group">
                    <label>Correo Electronico</label>
                    <input type="email" className="form-control" placeholder="Correo@correo.com" />
                </div>
                <div className="form-group">
                    <label>Contraseña</label>
                    <input type="password" className="form-control" placeholder="Contraseña" />
                </div>
                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>
                <button class="form-element" type="submit" className="btn btn-primary btn-block">Submit</button><p></p>
                        <p className="forgot-password text-right">
                            No tienes cuenta? <a href="#" onClick={handle} >Crear cuenta.</a> 
                        </p>
                    </form>

        );




} 