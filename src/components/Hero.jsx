import Silk from './Silk';
import './Hero.css';

function Hero() {
    const abrirCV = () => {
        window.open('cv.pdf', '_blank');
    }

    return (
        <section id="hero">
            <Silk
                speed={5}
                scale={1}
                color="#7B7481"
                noiseIntensity={1.5}
                rotation={0}
            />
            <h1>Joaquin Gabriel Tonizzo</h1>
            <h2>Técnico en Informática y Electrónica</h2>
            <h2>Desarrollador Full-Stack</h2>
            <h2>Estudiante de Licenciatura en Sistemas</h2>
            <button className="btn btn-danger mt-3" onClick={abrirCV}>
                Curriculum Vitae
            </button>
        </section>
    )
}

export default Hero
