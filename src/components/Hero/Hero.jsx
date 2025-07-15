import { useLanguage } from '../../contexts/LanguageContext';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import Aurora from '../Aurora/Aurora';
import './Hero.css';

function Hero() {
    const { t } = useLanguage();
    const heroRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const buttonsRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        if (imageRef.current) observer.observe(imageRef.current);
        if (textRef.current) observer.observe(textRef.current);
        if (buttonsRef.current) observer.observe(buttonsRef.current);

        return () => observer.disconnect();
    }, []);

    const abrirCV = () => {
        window.open('cv.pdf', '_blank');
    }

    const abrirLinkedIn = () => {
        window.open('https://www.linkedin.com/in/joaquin-tonizzo/', '_blank');
    }

    const abrirGitHub = () => {
        window.open('https://github.com/JoaquinTonizzo', '_blank');
    }

    return (
        <section id="hero" ref={heroRef}>
            <Aurora
                colorStops={["#0066FF", "#0099FF", "#0033CC"]}
                blend={0.5}
                amplitude={0.5}
                speed={0.5}
            />
            <div className="hero-content">
                <div className="hero-image" ref={imageRef}>
                    <img src="/portfolio/yo.png" alt="Joaquin Gabriel Tonizzo" />
                </div>
                <div className="hero-text" ref={textRef}>
                    <h1>Joaquín Gabriel Tonizzo</h1>
                    <h2>{t('title')}</h2>
                    <div className="hero-buttons" ref={buttonsRef}>
                        <button className="btn btn-danger" onClick={abrirCV}>
                            {t('cvButton')}
                        </button>
                        <button className="btn btn-linkedin" onClick={abrirLinkedIn}>
                            <FaLinkedin />
                            LinkedIn
                        </button>
                        <button className="btn btn-github" onClick={abrirGitHub}>
                            <FaGithub />
                            GitHub
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
