import {Link} from 'react-router-dom'
import Logo from '../images/logow.png'
import { FaFacebookF } from 'react-icons/fa'
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
                Materiales de alta calidad y estructuras de alta duración garantizadas.
                </p>
                <div className='footer__socials'>
                    <a href="https://www.facebook.com/profile.php?id=100087619848903" target="_blank" rel='noreferrer noopener'><FaFacebookF/></a>
                    <a href="https://www.instagram.com/pergolasmetepec/" target="_blank" rel='noreferrer noopener'><AiFillInstagram/></a>
                </div>
            </article>
            <article>
                <h4>Permalinks</h4>
                <Link to="/about">Acerca de</Link>
                <Link to="/gallery">Galeria</Link>
                <Link to="/contact">Contacto</Link>
            </article>
            <article>
                <h4>Acerca De</h4>
                <Link to="/about">Acerca de</Link>
                <Link to="/">FAQs</Link>
            </article>
            <article>
                <h4>Ponte en contacto</h4>
                <Link to="/contact">Contactanos</Link>
                <Link to="/Gallery">Galeria</Link>
            </article>
        </div>
        <div className="footer__copyright">
            <small>2023 Kroon Steel Design &copy; Todos los derechos reservados</small>
        </div>
    </footer>
  )
}

export default Footer