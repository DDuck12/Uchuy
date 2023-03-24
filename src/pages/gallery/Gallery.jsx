import './gallery.css'
import Header from '../../components/Header'
import HeaderImage from '../../images/background.jpg'
import './gallery.css'

function Gallery() {

  const galleryLenght = 9;
  const images = []

  for (let i = 1; i <= galleryLenght; i++) {
    images.push(require(`../../images/gallery${i}.jpg`))
  }

  console.log(images)

  return (
    <>
      <Header title="Galeria" image={HeaderImage}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab mollitia quae obcaecati expedita commodi pariatur saepe qui alias ratione corporis!
      </Header>
    </>
  )
}

export default Gallery