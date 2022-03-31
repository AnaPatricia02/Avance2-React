import { render } from "@testing-library/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import './contenidoU.css';

export const ContenidoU = () => {

    const navigate = useNavigate();

    const handle = () => {
        navigate('/usuario', {
            replace: true
        });
    }
  
        return (
             
    <div>
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
                    <img src="doctor.jpg"  onClick={handle} alt="" width="40" height="40"/>

                        
                    </li>

                </div>
            </div>
        </nav>

                    

        <form class="form" >  
          
                <ol class="list-group list-group-numbered">
                <li class="list-group-item list-group-item-info">Categorias⭐</li>
                <li class="list-group-item">Dentista</li>
                 <li class="list-group-item">Urologia</li>
                 <li class="list-group-item">Neumologia</li>
                 <li class="list-group-item">Psiquiatria</li>
                </ol>   
                
                <form class="form2">
                    <ol class="list2">
                    <li class="list-group-item list-group-item-success">Hecha por David Perez - Nutriologia<p></p> 
                    12/02/22<p></p>
                    Necesito ciudar el consumo de azucar</li>
                    
                    <li class="list-group-item list-group-item-primary ">Matia Correa - Nutriologa<p></p>
                    12/02/22<p>
                    Mandame whatsapp para agendarte una cita en mi consultorio.</p></li>
                    </ol>  
                </form>                
        </form>
                
     </div>
        );
    
}