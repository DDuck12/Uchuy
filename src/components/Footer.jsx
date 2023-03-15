import {Link} from 'react-router-dom'
import Logo from '../images/logo-placeholder.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
        <div className="container footer__container">
            <article>
                <Link to='/' className='logo'>
                    <img src={Logo} alt="Footer Log" />
                </Link>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores, repudiandae magni odit iste deserunt eum dolorum quisquam autem ea dolores ipsum totam.
                </p>
                <div className='footer__socials'>
                    <a href="https://linkedin.com" target="_blank" rel='noreferrer noopener'><FaLinkedin/></a>
                    <a href="https://facebook.com" target="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
                    <a href="https://instagram.com" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                    <a href="https://twitter.com" target="_blank" rel='noreferrer noopener'><AiOutlineTwitter/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">About</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
            </article>
            <article>
                <h4>Acerca De</h4>
                <Link to="/about">About</Link>
                <Link to="/Gallery">FAQs</Link>
            </article>
            <article>
                <h4>Ponte en contacto</h4>
                <Link to="/contact">Contactanos</Link>
                <Link to="/Gallery">Gallery</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2023 Empresas Uchuy &copy; Todos los derechos reservados</small>
        </div>
    </footer>
  )
}

export default Footer