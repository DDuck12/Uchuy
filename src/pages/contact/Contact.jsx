import Header from '../../components/Header'
import HeaderImage from '../../images/logob.png'
import {MdEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

function Contact() {
  return (
    <>
    <Header title="" image={HeaderImage}>
      
    </Header>
    <section className="contact">
      <div className="container contact__container">
        <div className="contact__wrapper">
          <a href="mailto:Kroon.steel.design@gmail.com" target="_blank" rel="noreferrer noopener"><MdEmail/></a>
          <a href="http://m.me/jesus.a.medina.9" target="_blank" rel="noreferrer noopener"><BsMessenger/></a>
          <a href="https://wa.me/527221285022" target="_blank" rel="noreferrer noopener"><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact