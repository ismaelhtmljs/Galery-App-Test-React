import React, {useEffect, useState} from "react";
import '../css/copyright.css';

const copy_text = "Todos los derechos reservados.";
const user_name_copy = "Ismaelxd74";
const user_email_copy = "Ismaelgq.88@gmail.com";

function Click_user_name() {
    window.open('https://www.instagram.com/ismaelxd74/profilecard/?igsh=MWpzNno5eG9zejFtbw==', '_blank');
}

function CopyRight() {
    const [loading, setLoading] = useState(true);  // Estado de la pantalla de carga
        useEffect(() => {
            document.body.style.overflow = 'hidden';
            // Simula una espera de 3 segundos antes de que la pantalla de carga desaparezca
            setTimeout(() => {
                setLoading(false);// Después de 3 segundos, la pantalla de carga desaparece
                document.body.style.overflow = 'auto';
            }, 1000);
            return () => {
                document.body.style.overflow = 'auto';
            }
        }, []);
    return(
        <>
            {loading && (
                <div className="loading-screen">
                    <div className="loader-dots">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p>Cargando recursos</p>
                </div>)}
            <div className="fondo-oscuro-transparente"></div>
            <div className="widget-for-animation"></div>
            <main id="copy">
                <div className="contenedor-copyright">
                    <h1>CopyRight&copy; 2024 {user_name_copy}. {copy_text}</h1>
                    <section className="copy-fa-fa-rrr">
                        <p>
                            <strong>Este sitio web, su contenido y todos los materiales asociados</strong>, incluidos
                            pero no limitados a <strong>textos, imágenes, gráficos, logos, íconos, videos,
                                software</strong>, y cualquier otra propiedad intelectual, están protegidos por las
                            <strong>leyes internacionales de derechos de autor</strong> y son propiedad exclusiva de <strong>{user_name_copy}</strong> o sus licenciantes. Ningún material de este
                            sitio puede ser <strong>copiado, reproducido, distribuido, modificado, transmitido,
                                exhibido, publicado</strong>, o de cualquier otra manera explotado sin el <strong>permiso
                                explícito por escrito de <a href="#" onClick={Click_user_name} className="link_ig_user_name">{user_name_copy}</a></strong>, excepto para <strong>uso personal y no comercial bajo las leyes de "uso justo"</strong> (fair use).
                        </p>
                        <p>
                            El
                            acceso o uso de este sitio no otorga ningún <strong>derecho, título o interés</strong> en
                            ningún contenido del mismo. Cualquier <strong>uso no autorizado</strong> de los materiales
                            contenidos en este sitio está <strong>estrictamente prohibido</strong> y puede violar las
                            <strong>leyes de propiedad intelectual, marcas registradas</strong>, y otras leyes
                            aplicables.
                        </p>
                        <p>
                            Para obtener <strong>permisos o realizar consultas</strong> sobre el uso de
                            contenido en este sitio, por favor, <strong>contáctenos a través de </strong><span className="resaltado-email">{user_email_copy}</span>
                        </p>
                    </section>
                </div>
            </main>
        </>
    );
}

export default CopyRight;