import React, {useEffect, useState} from "react";
import '../css/images-section.css';

function Images() {
    const [loading, setLoading] = useState(true);  // Estado de la pantalla de carga

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        // Simula una espera de 3 segundos antes de que la pantalla de carga desaparezca
        setTimeout(() => {
            setLoading(false);  // Después de 3 segundos, la pantalla de carga desaparece
            document.body.style.overflow = 'auto';
        }, 3000);
        return () => {
            document.body.style.overflow = 'auto';  // Restaura el scroll cuando la página se carga completamente
        }
    }, []);

    return(
        <>
            {loading && (
                <div className="loading-screen-images">
                    <div className="loader-dots">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                    <p>Cargando imagenes</p>
                </div>)}
            <div className="widget-for-animation"></div>
            <div className="contenedor-pag-images"></div>
            <div className="contenedor-main-content">
                <main className="images-main">
                    <div className="contenedor-images-1">
                        <section className="Huascaran">
                            <span>Imagen de <strong>Huascaran</strong></span>
                            <img src="https://highsummitperu.com/wp-content/uploads/2022/03/51.jpg" alt="Huascaran" />
                        </section>
                        <section className="alpamayo">
                            <span>Imagen de <strong>Alpamayo</strong></span>
                            <img src="https://www.peru.travel/Contenido/General/Imagen/es/645/1.1/alpamayo.jpg" alt="alpamayo" />
                        </section>
                        <section className="nevado tres picos">
                            <span>Imagen del <strong>Nevado Tres Picos</strong></span>
                            <img src="https://cdn.andeshandbook.org/media/route_gallery/1533774785745762560.jpg" alt="nevado tres picos" />
                        </section>
                    </div>
                    <div className="contenedor-images-2">
                        <section>
                            <span>Imagen de <strong>Ausangate</strong></span>
                            <img src="https://machupicchuluxuryperu.com/wp-content/uploads/2023/04/Ausangate.jpg" alt="ausangate" />
                        </section>
                        <section>
                            <span>Imagen del <strong>Nevado Salkantay</strong></span>
                            <img src="https://www.peru.travel/Contenido/Atractivo/Imagen/es/56/1.1/Principal/nevado-salkantay.jpg" alt="nevado salkantay" />
                        </section>
                        <section>
                            <span>Imagen de <strong>Machu Picchu</strong></span>
                            <img src="https://viajes.nationalgeographic.com.es/medio/2018/03/01/machu-picchu_5ff969ae_1280x720.jpg" alt="machu picchu" />
                        </section>
                    </div>
                    <div className="contenedor-images-3">
                        <section>
                            <span>Imagen del <strong>Nevado Yerupaja</strong></span>
                            <img src="https://www.chullostravelperu.com/wp-content/uploads/2023/05/4Laguna-Carhuacocha-y-Nevado-Yerupaja_-Trekking-en-la-Cordillera-Huayhuash.jpg" alt="nevado yerupaja" />
                        </section>
                        <section>
                            <span>Imagen de <strong>Chopicalqui</strong></span>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e6/Chopicalqui2013.jpg" alt="Imagen 11" />
                        </section>
                        <section>
                            <span>Imagen del <strong>Nevado Pisco Mataraju</strong></span>
                            <img src="https://zenda-montanismo.com/wp-content/uploads/2022/06/nevado-pisco-mataraju-cordillera-blanca-zenda-escuela-de-montanismo-peru-4-768x589.webp" alt="Imagen 12" />
                        </section>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Images;