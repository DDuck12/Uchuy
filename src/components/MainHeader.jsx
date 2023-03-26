import { Link } from "react-router-dom"
import Image from '../images/duckplaceholder.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>Kroon Steel Design</h4>
          <h1>Techos, Pergolas y Estructuras</h1>
          <p>Diseños e instalaciones de la mejor calidad con los mejores materiales</p>
          <Link to='/contact' className='btn lg'>Contactanos</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="Main Header" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader