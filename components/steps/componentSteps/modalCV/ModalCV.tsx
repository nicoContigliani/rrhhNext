import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ModalCV = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <>
            <Button type="primary" 
            
            onClick={showModal}>
                Open Modal
            </Button>
            <Modal title="Mi CV"
                width="90%"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
            >

                <div>

                    <header>
                        <h1>Rodrigo Báez Gull</h1>
                        <h2>Content Manager</h2>
                        <ul>
                            <li><a href="mailto:rbaezgull@email.com">rbaezgull@email.com</a></li>
                            <li><a href="tel:6312X45XX">631 2X4 5XX</a></li>
                            <li><a href="https://linkedin.com/rbaezgull">linkedin.com/rbaezgull</a></li>
                        </ul>
                    </header>
                    <section className="perfil-profesional">
                        <h3>Perfil profesional</h3>
                        <p>Content Manager con 6 años de experiencia en gestión de contenidos y planificación de estrategias de marketing y comunicación digital. Con capacidad de crear contenido innovador que convierta a los lectores ocasionales en clientes ávidos. En mi puesto actual he logrado duplicar el tráfico web y aumentar las conversiones en ##% en 18 meses. Busco unirme a Skynet para seguir potenciando la imagen y el servicio de la empresa.</p>
                    </section>
                    <section className="experiencia-laboral">
                        <h3>Experiencia laboral</h3>
                        <h4>Digital Content Manager</h4>
                        <h5>Bluelines CA, Barcelona, España</h5>
                        <h6>Enero de 2019 – actualidad</h6>
                        <ul>
                            <li>Actualizó el contenido/tono y la imagen de marca de la empresa para que fuera fresca, casual y atractiva.</li>
                            <li>Confección de la estrategia de contenidos de la empresa: incluyendo calendarios editoriales, campañas de email marketing, seminarios web y guiones de vídeo</li>
                            <li>Implementó nuevos procedimientos para agilizar la producción creativa de contenidos</li>
                            <li>Diseñó un nuevo marco de contenidos utilizando los grupos temáticos de HUBSPOT para generar nuevas ideas, conceptualizar estrategias de narración y fomentar la colaboración</li>
                            <li>Produjo contenido adicional como infografías, encuestas, plantillas de comunicación, guiones de seminarios web</li>
                        </ul>
                        <h4>Content Manager</h4>
                        <h5>Motosprint Shop, Sabadell, España</h5>
                        <h6>Septiembre de 2016 – noviembre de 2018</h6>
                        <ul>
                            <li>Encabezó la estrategia de contenido para el lanzamiento de la nueva página web en 2016</li>
                            <li>Realizó una expansión masiva de la presencia en línea y la participación de la comunidad motera en Andorra y España (Primordialmente Barcelona y Madrid)</li>
                            <li>Generando un aumento del ##% en el tráfico del sitio web en 18 meses desde el lanzamiento</li>
                            <li>Investigación y análisis de Benchmarking e implementación de acciones para contrarrestar la competencia</li>
                            <li>Renovación del blog de la web para llevar tráfico, ### visitas en ## semanas desde su optimización</li>
                        </ul>
                    </section>
                    <section className="formacion-academica">
                        <h3>Formación académica</h3>
                        <h4>Máster en Inbound Marketing</h4>
                        <h5>Universidad de Barcelona, Barcelona, España</h5>
                        <h6>Julio 2013 – septiembre 2015</h6>
                        <h4>Grado en Periodismo</h4>
                        <h5>Universidad de Barcelona, Barcelona, España</h5>
                        <h6>Septiembre de 2008 – junio de 2012</h6>
                    </section>
                    <section className="habilidades-aptitudes">
                        <h3>Habilidades y aptitudes</h3>
                        <ul>
                            <li>Excelentes habilidades de comunicación a nivel oral y escrito</li>
                            <li>Sensibilidad estética y atención al detalle</li>
                            <li>Excelente capacidad de trabajo en equipo</li>
                            <li>Pensamiento estratégico para la gestión de contenidos</li>
                            <li>Capacidad de toma de decisiones de forma autónoma</li>
                            <li>Resolución de problemas y cumplimiento de plazos establecidos</li>
                        </ul>
                    </section>


                    <section className="lenguaje">
                        <h3>Lenguaje</h3>
                        <ul>
                            <li>English</li>
                        </ul>
                    </section>
                    <section className="cursos-certificaciones">
                        <h3>Cursos y certificaciones</h3>
                        <ul>
                            <li>Certificación de HubSpot</li>
                            <li>Taller teórico-práctico de conceptualización – IART Barcelona</li>
                            <li>Fundamentos del Marketing de Digital – Google Actívate</li>
                            <li>Certificación de Google Analytics – Google Actívate</li>
                            <li>Certificación de Adobe Photoshop – Escuela de Tecnología y Comunicación Band Apart</li>
                        </ul>
                    </section>
                </div>




            </Modal>
        </>
    );
}

export default ModalCV
