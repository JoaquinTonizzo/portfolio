import './About.css';

function About() {
  return (
    <section id="sobre-mi">
      <div className="about-container">
        <div className="about-image">
          <img src="yo.png" alt="Joaquin Tonizzo Fotografía" />
        </div>
        <div className="about-content">
          <h2>Sobre mí</h2>
          <p>
            Soy Técnico especializado en Electrónica, egresado del Instituto Cardenal Stepinac. Durante mi
            formación adquirí amplios conocimientos en las áreas de la electrónica, la Informática y la
            computación. Actualmente estoy estudiando la carrera Licenciatura en Sistemas en la Universidad
            Nacional de General Sarmiento.
          </p>
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">3+</span>
              <span className="stat-label">Años estudiando</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Proyectos</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Especialidades</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
