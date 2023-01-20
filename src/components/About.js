import Skills from './Skills';
import imgAbout from '../assets/imgAbout.jpg';

const About = () => {
    return (
        <section className="aboutContainer" id="about">
            <div className="aboutTitle">
                <h3>About</h3>
            </div>
            <article className="aboutBio">
                <div className="aboutTxt">
                    <p>
                        My name is Gaston, I'm a front-end developer (and a drummer too!). I'm an
                        enthusiast and resolutive person, at an early age I developed a strong passion
                        for puzzle solving wich led into design solutions written in code. Currently I'm
                        looking for a workplace where I can collaborate with colleagues and continue
                        learning new technologies and improve my actual ones.
                    </p>
                    <Skills />
                </div>
                <div className="aboutImg">
                    <img src={imgAbout} alt="Gaston" />
                </div>
            </article>
        </section>
    );
};

export default About;
