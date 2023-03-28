import './gallery.css'
import Header from '../../components/Header'
import SectionHead from '../../components/SectionHead'
import {FaCrown} from 'react-icons/fa'
import HeaderImage from '../../images/logob.png'
import MaderaImage from '../../images/maderas.jpg'
import './gallery.css'

function Gallery() {

  const galleryLenght = 9;
  const images = []

  for (let i = 1; i <= galleryLenght; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  const celosiasLenght = 6;
  const celosias = []

  for (let i = 1; i <= celosiasLenght; i++) {
    celosias.push(require(`../../images/celosia${i}.jpg`))
  }

  const techosLenght = 9;
  const techos = []

  for (let i = 1; i <= techosLenght; i++) {
    techos.push(require(`../../images/techo${i}.jpg`))
  }


  return (
    <>
      <Header title="" image={HeaderImage}>
        
      </Header>
      <section className="gallery">
      <div className="gallery__title">
      <SectionHead icon={<FaCrown/>} title="Techos y Pergolas"/>
      </div>
      <div>
        <h1>{}</h1>
      </div>
        <div className="container gallery__container">
          {
            techos.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery img ${index = 1}`} />
              </article>
            })
          }
        </div>

      </section>
      <section className="Pergolas">
      <div className="gallery__title">
      <SectionHead icon={<FaCrown/>} title="Celosias"/>
      </div>
        <div className="container gallery__container">
          {
            celosias.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery img ${index = 1}`} />
              </article>
            })
          }
        </div>
      </section>
      
      <section className="Pergolas">
      <div className="gallery__title">
      <SectionHead icon={<FaCrown/>} title="Colores de Madera"/>
      </div>
        <div className="container gallery__container">
        <article>
                <img src={MaderaImage} alt="Maderas" />
        </article>
        </div>
      </section>

      <section className="Pergolas">
      <div className="gallery__title">
      <SectionHead icon={<FaCrown/>} title="Colores de Metal"/>
      </div>
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery img ${index = 1}`} />
              </article>
            })
          }
        </div>
      </section>

      <section className="Pergolas">
      <div className="gallery__title">
      <SectionHead icon={<FaCrown/>} title="Policarbonatos y Cristales"/>
      </div>
        <div className="container gallery__container">
          {
            images.map((image, index) => {
              return <article key={index}>
                <img src={image} alt={`Gallery img ${index = 1}`} />
              </article>
            })
          }
        </div>
      </section>
    </>
  )
}

export default Gallery