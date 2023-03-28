import Header from '../../components/Header'
import HeaderImage from '../../images/logow.png'
import VisionImage from '../../images/placeholder.jpg'
import MissionImage from '../../images/placeholder.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="Acerca de" image={HeaderImage}>
      
    </Header>
    <section className="about__vision">
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Nuestra Mision</h1>
          <p>
          Somos una empresa dedicada a brindar soluciones innovadoras en techos y pergolas, comprometida en ofrecer a nuestros clientes un servicio de calidad, con materiales de primera y un equipo de profesionales altamente capacitados.
          </p>
          <p>
          Nuestra misión es satisfacer las necesidades de nuestros clientes, generando confianza y seguridad en cada proyecto realizado.
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Vision img" />
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Mission img" />
        </div>
        <div className="about__section-content">
          <h1>Nuestra Vision</h1>
          <p>
          Ser una empresa líder en el mercado de techos y pergolas, reconocida por su calidad, innovación y excelencia en el servicio al cliente.
          </p>
          <p>
          Deseamos ser una empresa que se adapte constantemente a las necesidades y tendencias del mercado, ofreciendo soluciones integrales y personalizadas que permitan mejorar la calidad de vida y la estética de los hogares de nuestros clientes.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About