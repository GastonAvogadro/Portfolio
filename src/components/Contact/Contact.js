import { SiGmail, SiLinkedin, SiGithub } from 'react-icons/si';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contactContainer" id='contact'>
            <div className="contactTitle">
                <h3>Contact</h3>
            </div>
            <ul className='contactList'>
                <li>
                    <SiGmail size={"2rem"} />
                    <p>Mail</p>
                </li>
                <li>
                    <SiLinkedin size={"2rem"} />
                    <p>LinkedIn</p>
                </li>
                <li>
                    <SiGithub size={"2rem"} />
                    <p>GitHub</p>
                </li>
            </ul>
        </section>
    );
};

export default Contact;
