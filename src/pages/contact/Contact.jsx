import Header from '../../components/Header'
import HeaderImage from '../../images/background.jpg'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

function Contact() {
  return (
    <>
    <Header title="Ponte en contacto con nostros" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi rem dolore quos sunt nihil repellendus reiciendis vitae placeat laborum labore!
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:mail@mail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="http://m.me/jesus.a.medina.9" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/+52333333333" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact