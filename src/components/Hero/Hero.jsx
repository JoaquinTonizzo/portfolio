import { useLanguage } from '../../contexts/LanguageContext';
import { FaLinkedin } from 'react-icons/fa';
import Aurora from '../Aurora/Aurora';
import './Hero.css';

function Hero() {
    const { t } = useLanguage();

    const abrirCV = () => {
        window.open('cv.pdf', '_blank');
    }

    const abrirLinkedIn = () => {
        window.open('https://www.linkedin.com/in/joaquin-tonizzo/', '_blank');
    }

    return (
        <section id="hero">
            <Aurora
                colorStops={["#0066FF", "#0099FF", "#0033CC"]}
                blend={0.5}
                amplitude={0.5}
                speed={0.5}
            />
            <div className="hero-content">
                <div className="hero-image">
                    <img src="/portfolio/yo.png" alt="Joaquin Gabriel Tonizzo" />
                </div>
                <div className="hero-text">
                    <h1>Joaquín Gabriel Tonizzo</h1>
                    <h2>{t('title')}</h2>
                    <div className="hero-buttons">
                        <button className="btn btn-danger" onClick={abrirCV}>
                            {t('cvButton')}
                        </button>
                        <button className="btn btn-linkedin" onClick={abrirLinkedIn}>
                            <FaLinkedin />
                            LinkedIn
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
