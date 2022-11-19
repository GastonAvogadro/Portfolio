import { SiLinkedin, SiGithub } from 'react-icons/si';
import './Home.css';

const Home = () => {
    return (
        <section className="homeContainer">
            <div className="heroSection">
                <p>Hi, I am</p>
                <h1>Gaston Avogadro</h1>
                <h2>Front-end Developer</h2>
                <div className="socialMedia">
                    <SiGithub size={30}/>
                    <SiLinkedin size={30}/>
                </div>
            </div>
        </section>
    );
};

export default Home;
