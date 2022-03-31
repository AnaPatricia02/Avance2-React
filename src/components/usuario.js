
import React from "react";
import './usuario.css';

export const Usuario = () => { 
        return (
            
     <dib>
                <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                    <div className="container-fluid ">
                        <a class="navbar-brand" href="#">
                            <img src="icon.png" alt="" width="40" height="40"/>
                        </a>
                    <a className="navbar-brand" href="#">Doc Anwear</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            
                            <form className="d-flex  mx-auto" >
                                <input type="Buscar"className="form-control me-2"  placeholder="buscar" />
                                <button className="btn btn-outline-success" type="submit">Buscar</button>
                            </form>
                            <li className="nav-item">
                            <a className="navbar-brand" href="#">Iniciar Sesion</a>
                            <img src="doctor.jpg"  alt="" width="40" height="40"/>
                            </li>

                        </div>
                    </div>
                </nav>

            <form class="form">           
                    <div className="card mb-3">
                        <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="doctor.jpg" className="img-fluid rounded-start" alt="..."/>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                    <h5 className="card-title">Dr. Omar Lopez Gzz</h5>
                                    <p className="card-text"><small class="text-muted">DoctOmar21@hotmail.com</small></p>
                                    <p className="card-text"><small class="text-muted">Especialidad: Psquiatria, Nutricion</small></p>
                                    <p className="card-text"><small class="text-muted">Cedula: 12569902</small></p>
                                    <p className="card-text"><small class="text-muted">Telefono: 811299305</small></p>
                                    <p className="card-text"><small class="text-muted">Contraseña: *********</small></p>
                                    </div>
                                </div>
                        </div>
                    </div>                        
            </form> 
     </dib>
        );
    
}