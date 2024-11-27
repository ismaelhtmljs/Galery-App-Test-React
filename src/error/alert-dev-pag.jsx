import React from "react";
import { Link } from "react-router-dom";
import '../css/dev_working_css.css'

function Dev_working_pag() {
    return(
        <>
        <div className="backgrounddiv"></div>
        <div className="contenedor_contenido_error">
            <div className="img-404">
                <img src="/logo-404.svg" alt="ERROR_404" className="Error_404"/>
            </div>
            <div className="contenedor-404">
                <h1>Estamos trabajando en este apartado</h1>
                <p>Por favor, intente nuevamente más tarde.</p>
                <div className="buton-section-404">
                    <Link to="/">Volver a la página principal</Link>
                </div>
            </div>
        </div>
        </>
    );
}

export default Dev_working_pag;