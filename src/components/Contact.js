import { Fade } from "react-awesome-reveal";
import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si';

const Contact = () => {
    return (
        <section className="contactContainer" id="contact">
            <Fade direction="down" triggerOnce>
                <div className="contactTitle">
                    <h3>Contact</h3>
                </div>
            </Fade>
            <Fade triggerOnce>
                <div className="contactMail">
                    <SiGmail />
                    <a href="mailto:gaston.avogado@gmail.com">
                        <p>gaston.avogado@gmail.com</p>
                    </a>
                </div>
                <ul className="contactList">
                    <li>
                        <a
                            href="https://www.linkedin.com/in/gaston-avogadro/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SiLinkedin size={30} />
                            <p>LinkedIn</p>
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://github.com/GastonAvogadro"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <SiGithub size={30} />
                            <p>GitHub</p>
                        </a>
                    </li>
                </ul>
            </Fade>
        </section>
    );
};

export default Contact;
