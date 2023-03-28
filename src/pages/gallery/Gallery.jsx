import './gallery.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/logob.png'
import './gallery.css'

function Gallery() {

  const galleryLenght = 9;
  const images = []

  for (let i = 1; i <= galleryLenght; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  return (
    <>
      <Header title="Galeria" image={HeaderImage}>
        
      </Header>
      <section className="gallery">
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