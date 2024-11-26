import React,{useEffect,useState} from "react";
import Footer from "../components/footer";

function Home() {
    const [loading, setLoading] = useState(true);  // Estado de la pantalla de carga

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        // Simula una espera de 3 segundos antes de que la pantalla de carga desaparezca
        setTimeout(() => {
            setLoading(false); // Después de 3 segundos, la pantalla de carga desaparece
            document.body.style.overflow = 'auto';
        }, 3000);
        return () => {
            document.body.style.overflow = 'auto';
        };
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
                </div>
            )}
            <main>
                <div className="widget-for-animation"></div>
                <div className="contenedor-main">
                    <article className="post1">
                        <section className="subtitulo-post1">
                            <h2>Bienvenidos a "Fotos De Montañas", un lugar donde la majestuosidad de la naturaleza y la belleza de las montañas se encuentran a través del lente de la fotografía.</h2>
                        </section>
                        <section className="contenido-post1">
                            <p>
                                Este blog nace con el propósito de compartir con todos los amantes de la
                                naturaleza, la fotografía y la aventura, un rincón digital lleno de
                                impresionantes imágenes de montañas de todo el mundo. Ya sea que seas un
                                fotógrafo experimentado, un entusiasta de las montañas o simplemente alguien
                                que aprecia la paz y la grandeza que las montañas nos brindan, este es el
                                lugar para ti.
                            </p>
                            <p>
                                Aquí no solo encontrarás fotos espectaculares que capturan la magnificencia
                                de las montañas en distintas estaciones del año y desde diversas
                                perspectivas, sino también historias detrás de cada imagen, las técnicas
                                fotográficas utilizadas para capturarlas, y datos interesantes sobre los
                                paisajes que aparecen en cada toma. Cada montaña tiene una historia que
                                contar, y a través de nuestras publicaciones, tratamos de transmitir esas
                                historias con el máximo respeto y admiración por la naturaleza.
                            </p>
                            <p>
                                Exploramos montañas de todos los rincones del planeta, desde las más altas y
                                conocidas, como el Everest o el Kilimanjaro, hasta esas joyas escondidas que
                                pocos han tenido el privilegio de conocer. Nos encanta sumergirnos en las
                                particularidades de cada cordillera, sus ecosistemas y sus formas de vida,
                                porque creemos que las montañas no son solo un atractivo visual, sino
                                también un refugio vital para miles de especies, una fuente de inspiración
                                para los humanos y un símbolo de resistencia y poder de la naturaleza.
                            </p>
                            <p>
                                Además de las fotos, también ofrecemos artículos sobre cómo planificar
                                viajes a destinos montañosos, recomendaciones sobre el equipo fotográfico
                                ideal para capturar paisajes y consejos de expertos para quienes deseen
                                adentrarse en el mundo de la fotografía de montañas. Aquí, no solo nos
                                centramos en la belleza estética de las imágenes, sino también en la
                                importancia de capturar el alma de los lugares, con un enfoque respetuoso
                                hacia el medio ambiente y la preservación de estos magníficos paisajes.
                            </p>
                            <p>
                                Cada sección de nuestro blog está pensada para inspirar y educar, para que
                                puedas apreciar las montañas no solo a través de las fotos, sino también
                                entendiendo su significado, su cultura y su rol en el equilibrio de nuestro
                                planeta. En "Fotos De Montañas", buscamos conectar a las personas con la
                                naturaleza de una manera profunda, ya sea a través de la admiración visual o
                                el deseo de explorar estos majestuosos paisajes por ti mismo.
                            </p>
                            <p>
                                Si eres un fotógrafo de montañas, un viajero aventurero o alguien que
                                simplemente disfruta de las vistas que las montañas nos ofrecen, te
                                invitamos a ser parte de nuestra comunidad. No dudes en compartir tus
                                propias experiencias, fotos y reflexiones sobre tus propios viajes o
                                exploraciones montañosas. Queremos que este blog se convierta en un espacio
                                interactivo donde todos podamos compartir el amor y respeto por las
                                montañas.
                            </p>
                            <p>
                                Te invitamos a explorar nuestras galerías de imágenes, leer sobre los
                                distintos destinos de montañas que cubrimos, y sumergirte en los relatos que
                                acompañan cada imagen. Ya sea que estés buscando inspiración para tu próxima
                                aventura o simplemente deseas perderte en la belleza de la naturaleza,
                                esperamos que encuentres algo que te cautive y te inspire a seguir
                                explorando y admirando las montañas.
                            </p>
                            <p>
                                Gracias por acompañarnos en este viaje visual a través de las montañas.
                                Estamos emocionados de tenerte aquí y esperamos que disfrutes de cada
                                paisaje, cada historia y cada foto tanto como nosotros disfrutamos
                                capturándolas.
                            </p>
                        </section>
                    </article>
                </div>
            </main>
            <Footer/>
        </>
    );
}

export default Home;