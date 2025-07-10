import { useLanguage } from '../contexts/LanguageContext';
import Silk from './Silk';
import './Hero.css';

function Hero() {
    const { t } = useLanguage();
    
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
            <h2>{t('title')}</h2>
            <h2>{t('subtitle')}</h2>
            <h2>{t('subtitle2')}</h2>
            <button className="btn btn-danger mt-3" onClick={abrirCV}>
                {t('cvButton')}
            </button>
        </section>
    )
}

export default Hero
