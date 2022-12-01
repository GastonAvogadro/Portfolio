import Skills from '../Skills/Skills';
import './About.css';

const About = () => {
    return (
        <section className="aboutContainer" id='about'>
            <div className="aboutTitle">
                <h3>About</h3>
            </div>
            <article className="aboutBio">
                <div>
                    <p>
                        My name is Gaston, I'm a front-end developer. I'm an enthusiast and resolutive
                        person, at an early age I developed a strong passion for puzzle solving and it
                        led into design solutions written in code. Currently I'm learning back-end
                        technologies.
                    </p>
                    <Skills />
                </div>
                <div className="aboutImg">
                    <img src="https://i.ibb.co/6JQCtVC/IMG-1763.jpg" alt="Gaston" />
                </div>
            </article>
        </section>
    );
};

export default About;
