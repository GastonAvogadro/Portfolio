import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si';

const Contact = () => {
    return (
        <section className="contactContainer" id="contact">
            <div className="contactTitle">
                <h3>Contact</h3>
            </div>
            <div className="contactMail">
                <SiGmail />
                <a href="mailto:gaston.avogado@gmail.com">
                    <p>gaston.avogado@gmail.com</p>
                </a>
            </div>
            <ul className="contactList">
                <li>
                    <a href="https://www.linkedin.com/in/gaston-avogadro/" target="_blank">
                        <SiLinkedin size={30} />
                        <p>LinkedIn</p>
                    </a>
                </li>
                <li>
                    <a href="https://github.com/GastonAvogadro" target="_blank">
                        <SiGithub size={30} />
                        <p>GitHub</p>
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default Contact;
