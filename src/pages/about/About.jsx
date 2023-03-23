import Header from '../../components/Header'
import HeaderImage from '../../images/background.jpg'
import StoryImage from '../../images/placeholder.jpg'
import VisionImage from '../../images/placeholder.jpg'
import MissionImage from '../../images/placeholder.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="Acerca de" image={HeaderImage}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, corrupti ipsum! Earum adipisci autem ipsum dignissimos tempora illum animi vitae!
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Story img" />
        </div>
        <div className="about__section-content">
          <h1>Nuestra Historia</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo dignissimos quidem sed quas architecto. Suscipit obcaecati quod laborum quasi! Repellat earum expedita voluptas sapiente, tenetur exercitationem! Sed vitae eveniet voluptatem.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo dignissimos quidem sed quas architecto. Suscipit obcaecati quod laborum quasi! Repellat earum expedita voluptas sapiente, tenetur exercitationem! Sed vitae eveniet voluptatem.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem expedita sunt facilis odio rem fuga amet iusto iste corrupti pariatur?
          </p>
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Nuestra Vision</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo dignissimos quidem sed quas architecto. Suscipit obcaecati quod laborum quasi! Repellat earum expedita voluptas sapiente, tenetur exercitationem! Sed vitae eveniet voluptatem.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo dignissimos quidem sed quas architecto. Suscipit obcaecati quod laborum quasi! Repellat earum expedita voluptas sapiente, tenetur exercitationem! Sed vitae eveniet voluptatem.
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
          <h1>Nuestra Mision</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo dignissimos quidem sed quas architecto. Suscipit obcaecati quod laborum quasi! Repellat earum expedita voluptas sapiente, tenetur exercitationem! Sed vitae eveniet voluptatem.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo dignissimos quidem sed quas architecto. Suscipit obcaecati quod laborum quasi! Repellat earum expedita voluptas sapiente, tenetur exercitationem! Sed vitae eveniet voluptatem.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem expedita sunt facilis odio rem fuga amet iusto iste corrupti pariatur?
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About