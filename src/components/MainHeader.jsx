import { Link } from "react-router-dom"
import Image from '../images/duckplaceholder.png'

const MainHeader = () => {
  return (
    <header className="main__header">
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>Negocio del Larry</h4>
          <h1>Toldos perrones buenos y baratos</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In iusto fugiat sunt enim fuga? Deserunt.</p>
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